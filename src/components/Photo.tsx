import Image from "next/image";
import type { Photo as PhotoType } from "@/content";

/**
 * Framed photo with film grain and a slow 2–3% scale on hover.
 * The wrapper sets the aspect ratio; the image fills and crops via object-position.
 */
export function Photo({
  photo,
  sizes,
  aspect,
  preload = false,
  className = "",
}: {
  photo: PhotoType;
  sizes: string;
  aspect?: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`grain group relative overflow-hidden bg-black/10 ${className}`}
      style={{ aspectRatio: aspect ?? `${photo.width} / ${photo.height}` }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        quality={75}
        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.025]"
        style={{ objectPosition: photo.position ?? "50% 50%" }}
      />
    </div>
  );
}
