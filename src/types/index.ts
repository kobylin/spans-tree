export type RawSpan = {
  spanId: string;
  parentSpanId: string | null;
  name: string;
  startTime: string;
  endTime: string;
};

export type Span = {
  spanId: string;
  parentSpanId: string | null;
  name: string;
  startTime: Date;
  endTime: Date;
  spans?: Span[] | null;
};
