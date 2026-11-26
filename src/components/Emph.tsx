import { Fragment } from "react";

/**
 * Renders copy with *asterisk* emphasis as <em>.
 * The word "focus" always takes the accent blue.
 */
export function Emph({ text, accentClass = "text-accent" }: { text: string; accentClass?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          const inner = part.slice(1, -1);
          const isFocus = inner.trim().toLowerCase() === "focus";
          return (
            <em key={i} className={isFocus ? `${accentClass} italic` : "italic"}>
              {inner}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
