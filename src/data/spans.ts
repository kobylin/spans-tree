export const spans = {
  traceId: "1e2b3c4d5e6f7g8h9i0j",
  spans: [
    {
      spanId: "span1",
      parentSpanId: null,
      name: "HTTP GET /api",
      startTime: "2025-01-20T08:00:00.000Z",
      endTime: "2025-01-20T08:00:01.000Z",
    },
    {
      spanId: "span2",
      parentSpanId: "span1",
      name: "Database Query",
      startTime: "2025-01-20T08:00:00.500Z",
      endTime: "2025-01-20T08:00:00.800Z",
    },
    {
      spanId: "span3",
      parentSpanId: "span1",
      name: "Cache Lookup",
      startTime: "2025-01-20T08:00:00.100Z",
      endTime: "2025-01-20T08:00:00.150Z",
    },
    {
      spanId: "span4",
      parentSpanId: "span1",
      name: "Authentication",
      startTime: "2025-01-20T08:00:00.050Z",
      endTime: "2025-01-20T08:00:00.090Z",
    },
    {
      spanId: "span5",
      parentSpanId: "span2",
      name: "SQL Query Execution",
      startTime: "2025-01-20T08:00:00.600Z",
      endTime: "2025-01-20T08:00:00.750Z",
    },
    {
      spanId: "span6",
      parentSpanId: "span1",
      name: "Data Processing",
      startTime: "2025-01-20T08:00:00.810Z",
      endTime: "2025-01-20T08:00:00.950Z",
    },
    {
      spanId: "span7",
      parentSpanId: "span6",
      name: "JSON Serialization",
      startTime: "2025-01-20T08:00:00.900Z",
      endTime: "2025-01-20T08:00:00.940Z",
    },
    {
      spanId: "span8",
      parentSpanId: null,
      name: "HTTP GET /api/users",
      startTime: "2025-01-20T08:01:00.000Z",
      endTime: "2025-01-20T08:01:00.500Z",
    },
    {
      spanId: "span9",
      parentSpanId: "span8",
      name: "User Authentication",
      startTime: "2025-01-20T08:01:00.050Z",
      endTime: "2025-01-20T08:01:00.120Z",
    },
    {
      spanId: "span10",
      parentSpanId: "span8",
      name: "Database Query - Users",
      startTime: "2025-01-20T08:01:00.200Z",
      endTime: "2025-01-20T08:01:00.400Z",
    },
    {
      spanId: "span11",
      parentSpanId: "span10",
      name: "Index Lookup",
      startTime: "2025-01-20T08:01:00.250Z",
      endTime: "2025-01-20T08:01:00.300Z",
    },
    {
      spanId: "span12",
      parentSpanId: null,
      name: "HTTP POST /api/data",
      startTime: "2025-01-20T08:02:00.000Z",
      endTime: "2025-01-20T08:02:01.200Z",
    },
    {
      spanId: "span13",
      parentSpanId: "span12",
      name: "Request Validation",
      startTime: "2025-01-20T08:02:00.050Z",
      endTime: "2025-01-20T08:02:00.150Z",
    },
    {
      spanId: "span14",
      parentSpanId: "span12",
      name: "Database Transaction",
      startTime: "2025-01-20T08:02:00.200Z",
      endTime: "2025-01-20T08:02:01.000Z",
    },
    {
      spanId: "span15",
      parentSpanId: "span14",
      name: "Insert Operation",
      startTime: "2025-01-20T08:02:00.300Z",
      endTime: "2025-01-20T08:02:00.600Z",
    },
    {
      spanId: "span16",
      parentSpanId: "span14",
      name: "Update Related Records",
      startTime: "2025-01-20T08:02:00.650Z",
      endTime: "2025-01-20T08:02:00.900Z",
    },
    {
      spanId: "span17",
      parentSpanId: "span12",
      name: "Response Generation",
      startTime: "2025-01-20T08:02:01.050Z",
      endTime: "2025-01-20T08:02:01.150Z",
    },
    {
      spanId: "span18",
      parentSpanId: null,
      name: "Background Task Processing",
      startTime: "2025-01-20T08:03:00.000Z",
      endTime: "2025-01-20T08:03:05.000Z",
    },
    {
      spanId: "span19",
      parentSpanId: "span18",
      name: "File Processing",
      startTime: "2025-01-20T08:03:00.500Z",
      endTime: "2025-01-20T08:03:03.000Z",
    },
    {
      spanId: "span20",
      parentSpanId: "span19",
      name: "Image Resizing",
      startTime: "2025-01-20T08:03:01.000Z",
      endTime: "2025-01-20T08:03:02.500Z",
    },
    {
      spanId: "span21",
      parentSpanId: "span18",
      name: "Notification Dispatch",
      startTime: "2025-01-20T08:03:03.500Z",
      endTime: "2025-01-20T08:03:04.500Z",
    },
    {
      spanId: "span22",
      parentSpanId: "span21",
      name: "Email Sending",
      startTime: "2025-01-20T08:03:03.600Z",
      endTime: "2025-01-20T08:03:04.000Z",
    },
  ],
};
