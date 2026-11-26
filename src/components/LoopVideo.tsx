"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

/**
 * Silent looping clip. Server-renders the still poster, then swaps in the
 * video on the client only if the visitor hasn't asked for reduced motion.
 */
export function LoopVideo({ src, poster, alt, sizes }: { src: string; poster: string; alt: string; sizes: string }) {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => true,
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  // Some browsers ignore the autoplay attribute on client-inserted <video>; nudge it.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      /* autoplay blocked: the poster frame stays visible */
    });
  }, [reduced]);

  if (reduced) {
    return (
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.025]"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
    />
  );
}
