# بيتنا على Netlify (مجانًا)

الصفحة تُستضاف كموقع ثابت، والحفظ يتم عبر دالة Netlify Function وقاعدة Netlify Blobs المدمجة.
لا تحتاج قاعدة بيانات خارجية ولا بطاقة بنكية في الخطة المجانية.

## النشر (الطريقة الأسهل: عبر GitHub)
1. أنشئ حسابًا مجانيًا على github.com، ثم مستودعًا جديدًا (New repository)، وارفع إليه محتويات هذا المجلد كما هي (Add file ← Upload files).
2. أنشئ حسابًا على netlify.com (يمكنك الدخول بحساب GitHub).
3. Add new site ← Import an existing project ← GitHub ← اختر المستودع. اترك الإعدادات كما هي (يقرؤها من ملف netlify.toml) واضغط Deploy.
4. بعد دقيقة تحصل على رابط مثل https://اسم-موقعك.netlify.app. ويمكنك تغيير الاسم من Site configuration ← Change site name.
5. (موصى به) من Site configuration ← Environment variables أضف متغيرًا اسمه SECRET وقيمته نص عشوائي طويل، ثم أعد النشر (Deploys ← Trigger deploy). هذا يثبّت مفتاح تسجيل الدخول.

## النشر بالأوامر (بديل)
    npm i -g netlify-cli
    npm install
    netlify login
    netlify deploy --prod

## ملاحظات
- البيانات محفوظة في Netlify Blobs وتبقى بعد كل نشر جديد.
- الخطة المجانية تتسع لاستخدام أسرة أو عدة أسر بسهولة (حدودها الشهرية في netlify.com/pricing).
- لا تستخدم النشر بالسحب والإفلات (Drop) لأنه لا يثبّت مكتبة الدالة؛ استخدم GitHub أو الأوامر.
- لنسخة احتياطية: Netlify CLI يتيح تصدير الـ Blobs (netlify blobs:list).
