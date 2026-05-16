"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function CounterAnimation({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
}: Props) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const t0 = Date.now();
          const tick = () => {
            const elapsed = Date.now() - t0;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(eased * end);
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, started]);

  const display =
    end >= 1000
      ? Math.floor(value).toLocaleString()
      : Math.floor(value).toString();

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
