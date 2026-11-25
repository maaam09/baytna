export default async (req, context) => {
  const url = new URL(req.url);
  const path = url.pathname;

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  // فحص حالة الخادم
  if (path.endsWith("/health")) {
    return new Response(
      JSON.stringify({ ok: true, platform: "بيتنا", status: "active" }),
      { status: 200, headers }
    );
  }

  // تسجيل الدخول أو إنشاء حساب
  if (path.endsWith("/auth") && req.method === "POST") {
    try {
      const body = await req.json();
      const { phone, password, mode, name } = body;

      if (!phone || !password) {
        return new Response(
          JSON.stringify({ ok: false, message: "يرجى إدخال رقم الهاتف وكلمة المرور" }),
          { status: 400, headers }
        );
      }

      return new Response(
        JSON.stringify({
          ok: true,
          message: mode === "register" ? "تم إنشاء الحساب بنجاح" : "تم تسجيل الدخول بنجاح",
          user: {
            name: name || "ولي أمر الطالب",
            phone,
          },
        }),
        { status: 200, headers }
      );
    } catch {
      return new Response(
        JSON.stringify({ ok: false, message: "بيانات الطلب غير صالحة" }),
        { status: 400, headers }
      );
    }
  }

  return new Response(
    JSON.stringify({ ok: true, message: "Baytna API Ready" }),
    { status: 200, headers }
  );
};
