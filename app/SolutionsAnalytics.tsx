"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function SolutionsAnalytics() {
  useEffect(() => {
    const sessionKey = "watts_session_id";
    let sessionId = sessionStorage.getItem(sessionKey);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(sessionKey, sessionId);
    }

    const query = new URLSearchParams(window.location.search);
    const source = query.get("source") || query.get("utm_source") || "direct";

    const send = (detail: Record<string, unknown>) => {
      const enriched = {
        ...detail,
        page: window.location.pathname,
        sessionId,
        source,
        referrer: document.referrer,
      };

      window.dataLayer?.push(enriched);
      window.dispatchEvent(new CustomEvent("watts:analytics", { detail: enriched }));

      const payload = JSON.stringify(enriched);
      if (navigator.sendBeacon) {
        navigator.sendBeacon("https://wattsunified.com/conversion-event", new Blob([payload], { type: "application/json" }));
      } else {
        void fetch("https://wattsunified.com/conversion-event", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: payload,
          keepalive: true,
          mode: "cors",
        });
      }
    };

    const trackClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const element = target?.closest<HTMLElement>("[data-analytics-event]");
      if (!element) return;

      let destination = element instanceof HTMLAnchorElement
        ? element.href
        : element.dataset.analyticsDestination;

      if (element instanceof HTMLAnchorElement && destination) {
        const destinationUrl = new URL(destination, window.location.href);
        if (destinationUrl.hostname === "financialsnapshot.wattsunified.com") {
          destinationUrl.searchParams.set("wid", sessionId);
          if (!destinationUrl.searchParams.has("source")) destinationUrl.searchParams.set("source", source);
          destination = destinationUrl.toString();
          element.href = destination;
        }
      }

      const detail = {
        event: element.dataset.analyticsEvent,
        label: element.dataset.analyticsLabel,
        destination,
      };
      send(detail);
    };

    const milestones = new Set<number>();
    const trackDepth = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const depth = Math.round((window.scrollY / available) * 100);
      [50, 90].forEach((milestone) => {
        if (depth >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          send({ event: "scroll_depth", label: `${milestone}%` });
        }
      });
    };

    document.addEventListener("click", trackClick);
    window.addEventListener("scroll", trackDepth, { passive: true });
    send({ event: "page_view", label: document.title });

    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("scroll", trackDepth);
    };
  }, []);

  return null;
}
