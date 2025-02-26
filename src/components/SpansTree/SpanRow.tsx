import { useState } from "react";
import { Span } from "../../types";
import { DurationBar } from "../DurationBar/DurationBar";

export const SpanRow = ({
  span,
  parentSpan,
  rootSpan,
}: {
  span: Span;
  parentSpan: Span | null;
  rootSpan: Span | null;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const parenSpanDuration = parentSpan
    ? parentSpan.endTime.getTime() - parentSpan.startTime.getTime()
    : null;
  const parenSpanStarTime = parentSpan ? parentSpan.startTime : null;

  const rootSpanDuration = rootSpan
    ? rootSpan.endTime.getTime() - rootSpan.startTime.getTime()
    : null;
  const rootSpanStarTime = rootSpan ? rootSpan.startTime : null;

  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          outline: "1px solid black",
        }}
        onClick={() => {
          setIsExpanded(true);
        }}
      >
        <div
          style={{
            width: "300px",
          }}
        >
          {span.name} ({span.endTime.getTime() - span.startTime.getTime()}ms)
        </div>
        <div
          style={{
            flexGrow: 1,
          }}
        >
          {rootSpan ? (
            <DurationBar
              startTime={rootSpan.startTime}
              endTime={rootSpan.endTime}
              durationInterval={[span.startTime, span.endTime]}
            />
          ) : (
            <DurationBar
              startTime={span.startTime}
              endTime={span.endTime}
              durationInterval={[span.startTime, span.endTime]}
            />
          )}
        </div>
      </div>
      {isExpanded && (
        <div>
          {span.spans?.map((childSpan) => {
            return (
              <SpanRow
                key={childSpan.spanId}
                span={childSpan}
                parentSpan={span}
                rootSpan={rootSpan ? rootSpan : span}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
