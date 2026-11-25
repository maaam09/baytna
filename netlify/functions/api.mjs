export default async (req, context) => {
  const url = new URL(req.url);

  // مسار لفحص عمل الخادم: /api/health
  if (url.pathname.endsWith("/health")) {
    return new Response(
      JSON.stringify({
        ok: true,
        message: "المنصة والخادم يعملان بنجاح!",
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }

  // الرد الافتراضي لأي طلب آخر على /api/*
  return new Response(
    JSON.stringify({
      ok: true,
      method: req.method,
      path: url.pathname,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
};
