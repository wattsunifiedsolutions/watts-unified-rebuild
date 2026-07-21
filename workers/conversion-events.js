const allowedOrigins = new Set([
  "https://wattsunified.com",
  "https://www.wattsunified.com",
  "https://financialsnapshot.wattsunified.com",
]);

const allowedEvents = new Set([
  "primary_cta_click",
  "solution_card_click",
  "specialized_program_click",
  "education_solutions_click",
  "education_tool_click",
  "video_play",
  "page_view",
  "scroll_depth",
  "snapshot_view",
  "snapshot_start",
  "snapshot_complete",
  "snapshot_schedule_click",
]);

function corsHeaders(origin) {
  return {
    "access-control-allow-origin": allowedOrigins.has(origin) ? origin : "https://wattsunified.com",
    "access-control-allow-methods": "POST,OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
    vary: "Origin",
  };
}

function clean(value, length = 160) {
  return typeof value === "string" ? value.replace(/[\r\n\t]/g, " ").slice(0, length) : "";
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("origin") || "";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (request.method !== "POST" || !allowedOrigins.has(origin)) {
      return Response.json({ ok: false }, { status: 405, headers });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 4096) return Response.json({ ok: false }, { status: 413, headers });

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ ok: false }, { status: 400, headers });
    }

    const event = clean(body?.event, 64);
    if (!allowedEvents.has(event)) return Response.json({ ok: false }, { status: 400, headers });

    const sessionId = clean(body?.sessionId, 48);
    const source = clean(body?.source, 80);
    const referrer = clean(body?.referrer, 160);
    const rawDestination = clean(body?.destination, 240);
    const destination = clean([rawDestination, source && `source=${source}`, referrer && `referrer=${referrer}`].filter(Boolean).join(" | "), 320);
    const page = clean(body?.page, 180);
    const rawLabel = clean(body?.label, 110);
    const label = clean([rawLabel, sessionId && `session=${sessionId}`].filter(Boolean).join(" | "), 160);

    await env.CONVERSIONS.prepare(
      "INSERT INTO conversion_events (event, page, label, destination, origin) VALUES (?, ?, ?, ?, ?)",
    ).bind(event, page, label, destination, origin).run();

    return Response.json({ ok: true }, { status: 202, headers });
  },
};
