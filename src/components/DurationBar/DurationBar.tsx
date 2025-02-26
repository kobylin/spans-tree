import { useRef, useState, useEffect } from "react";

export const DurationBar = ({
  startTime,
  endTime,
  durationInterval,
}: {
  startTime: Date;
  endTime: Date;
  durationInterval: [Date, Date];
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  const isInBounds =
    durationInterval[0].getTime() >= startTime.getTime() &&
    durationInterval[0].getTime() <= endTime.getTime() &&
    durationInterval[1].getTime() >= startTime.getTime() &&
    durationInterval[1].getTime() <= endTime.getTime() &&
    durationInterval[0].getTime() < durationInterval[1].getTime();

  useEffect(() => {
    if (!rootRef.current) return;

    const updateWidth = () => {
      if (rootRef.current) {
        setWidth(rootRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(rootRef.current);

    return () => {
      if (rootRef.current) {
        resizeObserver.unobserve(rootRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  if (!isInBounds || width === null) {
    return (
      <div
        ref={rootRef}
        className="DurationBar"
        style={{
          width: "100%",
        }}
      >
        <div className="DurationBar__Interval"></div>
      </div>
    );
  }

  const totalDuration = endTime.getTime() - startTime.getTime();
  const intervalDuration =
    durationInterval[1].getTime() - durationInterval[0].getTime();
  const intervalDurationRelative = intervalDuration / totalDuration;
  const intervalStartRelative =
    (durationInterval[0].getTime() - startTime.getTime()) / totalDuration;

  return (
    <div
      ref={rootRef}
      className="DurationBar"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="DurationBar__Interval"
        style={{
          left: intervalStartRelative * width,
          width: intervalDurationRelative * width,
          position: "relative",
          height: "100%",
          background: "blue",
        }}
      >
        <div
          style={{
            position: "absolute",
          }}
        >
          {intervalDuration}ms
        </div>
      </div>
    </div>
  );
};
