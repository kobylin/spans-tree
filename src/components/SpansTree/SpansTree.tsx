import { useMemo } from "react";
import { SpanRow } from "./SpanRow";
import { RawSpan, Span } from "../../types";

const buildSpansTree = (spans: Span[]) => {
  const tree: Span[] = [];

  spans.forEach((span) => {
    if (span.parentSpanId === null) {
      tree.push(span);
    }
  });

  tree.forEach((s) => {
    populateSpanRecursively(spans, s);
  });

  return tree;
};

const populateSpanRecursively = (allSpans: Span[], span: Span) => {
  span.spans = allSpans.filter((s) => s.parentSpanId === span.spanId);
  span.spans.forEach((s) => {
    populateSpanRecursively(allSpans, s);
  });
};

const normalizeSpan = (rawSpan: RawSpan): Span => {
  return {
    spanId: rawSpan.spanId,
    parentSpanId: rawSpan.parentSpanId,
    name: rawSpan.name,
    startTime: new Date(rawSpan.startTime),
    endTime: new Date(rawSpan.endTime),
  };
};

const normalizeSpansTree = (spansTree: Span[]) => {
  const sortedTree = spansTree.sort(
    (a, b) => a.startTime.getTime() - b.startTime.getTime()
  );
  sortedTree.forEach((span) => {
    if (span.spans) {
      span.spans = normalizeSpansTree(span.spans);
    }
  });

  return sortedTree;
};

export const SpansTree = ({ rawSpans }: { rawSpans: RawSpan[] }) => {
  const spansTree = useMemo(() => {
    const tree = buildSpansTree(rawSpans.map((s) => normalizeSpan(s)));
    const normalizedTree = normalizeSpansTree(tree);

    return normalizedTree;
  }, [rawSpans]);

  return (
    <div
      className="SpansTree"
      style={{
        width: "800px",
      }}
    >
      {spansTree.map((span) => (
        <SpanRow
          key={span.spanId}
          span={span}
          parentSpan={null}
          rootSpan={null}
        />
      ))}
    </div>
  );
};
