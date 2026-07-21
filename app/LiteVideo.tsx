"use client";

import Image from "next/image";
import { useState } from "react";

type LiteVideoProps = {
  videoId: string;
  title: string;
  poster: string;
  posterAlt: string;
  analyticsLabel: string;
};

export function LiteVideo({ videoId, title, poster, posterAlt, analyticsLabel }: LiteVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      className="lite-video-trigger"
      type="button"
      aria-label={`Play ${title}`}
      data-analytics-event="video_play"
      data-analytics-label={analyticsLabel}
      data-analytics-destination={`https://www.youtube.com/watch?v=${videoId}`}
      onClick={() => setPlaying(true)}
    >
      <Image src={poster} alt={posterAlt} fill sizes="(max-width: 760px) 100vw, 1080px" />
      <span className="lite-video-shade" aria-hidden="true" />
      <span className="lite-video-play" aria-hidden="true">▶</span>
      <span className="lite-video-copy">
        <strong>Watch the Briefing</strong>
        <small>Video loads only when you press play</small>
      </span>
    </button>
  );
}
