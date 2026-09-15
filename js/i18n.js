/* تزويد | Tzweed — bilingual (AR/EN) i18n */
(function () {
  "use strict";

  const T = {
    // ---- meta / chrome ----
    "meta.title":        { ar: "تزويد | Tzweed — التجارة الإلكترونية B2B", en: "Tzweed — B2B E‑Commerce Platform" },
    "nav.features":      { ar: "لماذا تزويد", en: "Why Tzweed" },
    "nav.apps":          { ar: "تطبيقاتنا", en: "Our Apps" },
    "nav.about":         { ar: "من نحن", en: "About" },
    "nav.categories":    { ar: "الأقسام", en: "Categories" },
    "nav.how":           { ar: "كيف نعمل", en: "How It Works" },
    "nav.contact":       { ar: "تواصل معنا", en: "Contact" },
    "nav.start":         { ar: "ابدأ الآن", en: "Get Started" },
    "lang.toggle":       { ar: "EN", en: "ع" },

    // ---- hero ----
    "hero.eyebrow":  { ar: "منصة التجارة الإلكترونية بين الشركات B2B", en: "B2B E‑Commerce Platform" },
    "hero.title":    { ar: 'منصة <span class="hl">تزويد</span> للتجارة الإلكترونية<br>نربط سلسلة التوريد في السوق الليبي', en: '<span class="hl">Tzweed</span> B2B E‑Commerce<br>Connecting the supply chain in Libya' },
    "hero.lead":     { ar: "شركة تزويد للتجارة الإلكترونية (Tzweed) شركة تقنية وتجارية متخصصة في تطوير حلول التجارة الإلكترونية بين الشركات (B2B)، مع تركيز خاص على قطاع السلع الاستهلاكية في السوق الليبي. نوفّر منصة رقمية متكاملة تربط الموردين والمستوردين والموزعين وتجار الجملة والتجزئة والمطاعم والمنشآت التجارية، وتسهّل عرض المنتجات وطلبها وشراءها وإدارة عمليات التوريد والتوزيع بسرعة وتنظيم وكفاءة.", en: "Tzweed is a technology and trade company specialized in building business‑to‑business (B2B) e‑commerce solutions, with a strong focus on the consumer‑goods sector in the Libyan market. We provide an integrated digital platform that connects suppliers, importers, distributors, wholesalers, retailers, restaurants and businesses — making it easier to list, order and buy products and to manage supply and distribution with speed, structure and efficiency." },
    "hero.cta1":     { ar: "اطلب عرضاً توضيحياً", en: "Request a Demo" },
    "hero.cta2":     { ar: "تطبيقاتنا", en: "Our Apps" },
    "hero.badge1":   { ar: "حلول B2B متكاملة", en: "Integrated B2B Solutions" },
    "hero.badge2":   { ar: "كتالوجات رقمية", en: "Digital Catalogs" },
    "hero.badge3":   { ar: "إدارة التوريد والتوزيع", en: "Supply & Distribution" },
    "hero.card.title": { ar: "طلباتي الأخيرة", en: "Recent Orders" },
    "hero.card.r1":  { ar: "جهاز إلكتروني", en: "Electronics" },
    "hero.card.r1s": { ar: "قيد المعالجة", en: "Processing" },
    "hero.card.r2":  { ar: "مستلزمات منزلية", en: "Home Supplies" },
    "hero.card.r2s": { ar: "خرج للتوصيل", en: "Out for delivery" },
    "hero.card.r3":  { ar: "ملابس وأزياء", en: "Apparel" },
    "hero.card.r3s": { ar: "تم التوصيل", en: "Delivered" },
    "hero.float1":   { ar: "تم تأكيد الطلب", en: "Order confirmed" },
    "hero.float2":   { ar: "توصيل خلال 48 ساعة", en: "Delivery within 48h" },

    // ---- trust ----
    "trust1": { ar: "✓ آلاف المنتجات", en: "✓ Thousands of products" },
    "trust2": { ar: "✓ تطبيقات رقمية", en: "✓ Digital apps" },
    "trust3": { ar: "✓ دعم على مدار الساعة", en: "✓ 24/7 support" },
    "trust4": { ar: "✓ سياسة استرجاع عادلة", en: "✓ Fair returns policy" },
    "trust5": { ar: "✓ تغطية لكل ليبيا", en: "✓ Nationwide coverage" },

    // ---- features ----
    "feat.eyebrow": { ar: "لماذا تزويد", en: "Why Tzweed" },
    "feat.title":   { ar: "تجربة رقمية تستحق الثقة", en: "A digital experience you can trust" },
    "feat.sub":     { ar: "صُممت منصة تزويد وتطبيقاتنا لتمنحك أماناً وسهولة وسرعة في كل خطوة — من اختيار المنتج حتى استلامه.", en: "Tzweed and its apps are built to give you security, simplicity and speed at every step — from selecting a product to receiving it." },
    "feat.1t": { ar: "حماية ودفع آمن", en: "Secure Payments" },
    "feat.1p": { ar: "عمليات دفع مشفّرة عبر مزوّدي خدمات دفع معتمدين، دون تخزين بياناتك المصرفية الحساسة على أنظمتنا.", en: "Encrypted payments through certified providers, without storing your sensitive card data on our systems." },
    "feat.2t": { ar: "توصيل سريع وموثوق", en: "Fast, Reliable Delivery" },
    "feat.2p": { ar: "شبكة توصيل تغطي مختلف المدن الليبية، مع تتبّع لحالة طلبك خطوة بخطوة حتى يصل إلى بابك.", en: "A delivery network covering Libyan cities, with step‑by‑step tracking until your order reaches your door." },
    "feat.3t": { ar: "تطبيقات متكاملة", en: "Integrated Apps" },
    "feat.3p": { ar: "نطوّر تطبيقات رقمية سهلة وسريعة تخدم التجارة والتوزيع، بتجربة استخدام سلسة على الجوال والحاسوب.", en: "We build fast, easy digital apps for trade and distribution, with a smooth experience on mobile and desktop." },
    "feat.4t": { ar: "دعم على مدار الساعة", en: "24/7 Support" },
    "feat.4p": { ar: "فريق خدمة عملاء جاهز للرد على استفساراتك وحل مشاكلك بسرعة عبر قنوات تواصل متعددة.", en: "A customer‑service team ready to answer your questions and resolve issues quickly across multiple channels." },
    "feat.5t": { ar: "منتجات أصلية مضمونة", en: "Guaranteed Authentic Products" },
    "feat.5p": { ar: "نتحقق من جودة ومصدر المنتجات المعروضة، مع سياسة استبدال واسترجاع واضحة تحفظ حقك.", en: "We verify the quality and source of listed products, with a clear exchange and returns policy that protects you." },
    "feat.6t": { ar: "عروض وخصومات دائمة", en: "Ongoing Offers & Discounts" },
    "feat.6p": { ar: "حملات ترويجية وعروض حصرية على مدار العام، لتحصل على أفضل قيمة مقابل كل عملية شراء.", en: "Promotions and exclusive offers year‑round, so you get the best value on every purchase." },

    // ---- apps ----
    "apps.eyebrow": { ar: "تطبيقاتنا", en: "Our Apps" },
    "apps.title":   { ar: "تطبيقات من تزويد", en: "Apps by Tzweed" },
    "apps.sub":     { ar: "تزويد شركة برمجية تطوّر تطبيقات رقمية متكاملة في مجال التجارة والتوزيع. إليك أبرز تطبيقاتنا في نفس الفئة.", en: "Tzweed is a software company building integrated digital apps for trade and distribution. Here are our key apps in the same category." },
    "apps.tzweed.sector": { ar: "التجارة الإلكترونية", en: "E‑Commerce" },
    "apps.tzweed.name":   { ar: "تطبيق تزويد", en: "Tzweed App" },
    "apps.tzweed.desc":   { ar: "تطبيق التسوّق الإلكتروني من تزويد — آلاف المنتجات الأصلية، دفع آمن، وتوصيل سريع إلى باب منزلك في جميع أنحاء ليبيا.", en: "Tzweed's e‑commerce app — thousands of authentic products, secure payment and fast delivery to your door across Libya." },
    "apps.tzweed.link":   { ar: "اطلب التطبيق", en: "Request the app" },
    "apps.tawzee.sector": { ar: "التوزيع واللوجستيات", en: "Distribution & Logistics" },
    "apps.tawzee.name":   { ar: "توزيع Tawzee", en: "Tawzee" },
    "apps.tawzee.desc":   { ar: "تطبيق متخصص في إدارة التوزيع وسلاسل الإمداد، يربط المورّدين ونقاط البيع لضمان وصول المنتجات بكفاءة وموثوقية.", en: "An app specialized in managing distribution and supply chains, connecting suppliers and points of sale to deliver products efficiently and reliably." },
    "apps.tawzee.link":   { ar: "تعرّف على التطبيق", en: "Learn more" },
    "apps.feesaa.sector": { ar: "التوصيل السريع", en: "Fast Delivery" },
    "apps.feesaa.name":   { ar: "فيسع Feesaa", en: "Feesaa" },
    "apps.feesaa.desc":   { ar: "تطبيق توصيل سريع من تزويد يوصّل طلباتك واحتياجاتك اليومية إلى بابك بسرعة وموثوقية عبر شبكة مندوبين متكاملة.", en: "A fast‑delivery app by Tzweed that brings your orders and daily needs to your door quickly and reliably through an integrated courier network." },
    "apps.feesaa.link":   { ar: "تعرّف على التطبيق", en: "Learn more" },

    // ---- about ----
    "about.eyebrow": { ar: "من نحن", en: "About Us" },
    "about.title":   { ar: "شركة تزويد للتجارة الإلكترونية", en: "Tzweed E‑Commerce" },
    "about.p":       { ar: 'تعتمد الشركة على توظيف التكنولوجيا في تطوير سلسلة التوريد، من خلال توفير <strong>كتالوجات رقمية</strong> للمنتجات، وإدارة الطلبات والأسعار والكميات، ومتابعة المبيعات والعملاء، بما يساعد الشركات على تقليل الوقت والجهد وتحسين إدارة المشتريات والمخزون.', en: 'We use technology to develop the supply chain — providing <strong>digital product catalogs</strong>, managing orders, prices and quantities, and tracking sales and customers — helping companies save time and effort and improve procurement and inventory management.' },
    "about.vision.label": { ar: "رؤيتنا", en: "Our Vision" },
    "about.vision.text":  { ar: "تزويد منصة رائدة في مجال التجارة الإلكترونية B2B للقطاع الغذائي في ليبيا؛ نُنشئ منظومة تجارية رقمية تربط مختلف أطراف سلسلة الإمداد وتمنحهم تجربة شراء وبيع أكثر سهولة وشفافية.", en: "Tzweed is a leading B2B e‑commerce platform for the food sector in Libya; we build a digital commercial ecosystem that connects the parties of the supply chain and gives them an easier, more transparent buying and selling experience." },
    "about.cta1": { ar: "استكشف تطبيقاتنا", en: "Explore our apps" },
    "about.cta2": { ar: "تواصل معنا", en: "Contact us" },
    "about.stat": { ar: "أعوام من<br>النجاح والثقة", en: "Years of<br>success & trust" },

    // ---- stats ----
    "stat1": { ar: "منتج متنوّع", en: "Products" },
    "stat2": { ar: "تطبيقات رقمية", en: "Digital apps" },
    "stat3": { ar: "مدينة نغطّيها", en: "Cities covered" },
    "stat4": { ar: "رضا العملاء", en: "Customer satisfaction" },

    // ---- how ----
    "how.eyebrow": { ar: "كيف نعمل", en: "How It Works" },
    "how.title":   { ar: "تسوّق في أربع خطوات بسيطة", en: "Shop in four simple steps" },
    "how.sub":     { ar: "من تصفّح المنتجات حتى استلام طلبك — رحلة شراء واضحة وسريعة عبر تطبيق تزويد.", en: "From browsing products to receiving your order — a clear, fast journey through the Tzweed app." },
    "how.1t": { ar: "تصفّح واختر", en: "Browse & choose" },
    "how.1p": { ar: "استكشف آلاف المنتجات وقارن بينها بسهولة واختر ما يناسبك.", en: "Explore thousands of products, compare easily and pick what suits you." },
    "how.2t": { ar: "أضِف إلى السلة", en: "Add to cart" },
    "how.2p": { ar: "أضف منتجاتك إلى السلة وراجع طلبك قبل إتمام الشراء.", en: "Add products to your cart and review your order before checkout." },
    "how.3t": { ar: "ادفع بأمان", en: "Pay securely" },
    "how.3p": { ar: "أكمل الدفع عبر وسائل دفع آمنة ومعتمدة بكل ثقة.", en: "Complete payment through secure, certified methods with confidence." },
    "how.4t": { ar: "استلم طلبك", en: "Receive your order" },
    "how.4p": { ar: "نوصّل طلبك إلى باب منزلك ونتيح لك تتبّعه خطوة بخطوة.", en: "We deliver to your door and let you track it step by step." },

    // ---- categories ----
    "cat.eyebrow": { ar: "الأقسام", en: "Categories" },
    "cat.title":   { ar: "تسوّق حسب الفئة", en: "Shop by category" },
    "cat.sub":     { ar: "تشكيلة واسعة من الأقسام تلبي احتياجات كل فرد في العائلة.", en: "A wide range of categories to meet the needs of the whole family." },
    "cat.1": { ar: "إلكترونيات", en: "Electronics" },
    "cat.2": { ar: "أزياء", en: "Fashion" },
    "cat.3": { ar: "المنزل", en: "Home" },
    "cat.4": { ar: "الجمال", en: "Beauty" },
    "cat.5": { ar: "البقالة", en: "Grocery" },
    "cat.6": { ar: "المزيد", en: "More" },

    // ---- CTA ----
    "cta.title": { ar: "جاهز لتجربة رقمية أفضل؟", en: "Ready for a better digital experience?" },
    "cta.text":  { ar: "انضم إلى آلاف العملاء الذين يثقون في تزويد وتطبيقاتها لتلبية احتياجاتهم اليومية بأمان وسهولة.", en: "Join thousands of customers who trust Tzweed and its apps for their daily needs — safely and easily." },
    "cta.b1":    { ar: "أنشئ حسابك مجاناً", en: "Create a free account" },
    "cta.b2":    { ar: "استكشف تطبيقاتنا", en: "Explore our apps" },

    // ---- contact ----
    "contact.eyebrow": { ar: "تواصل معنا", en: "Contact Us" },
    "contact.title":   { ar: "نحن هنا لمساعدتك", en: "We're here to help" },
    "contact.sub":     { ar: "لأي استفسار أو شكوى أو اقتراح، فريقنا جاهز للرد عليك في أقرب وقت.", en: "For any question, complaint or suggestion, our team is ready to respond as soon as possible." },
    "contact.email":   { ar: "البريد الإلكتروني", en: "Email" },
    "contact.phone":   { ar: "رقم الهاتف", en: "Phone" },
    "contact.addr":    { ar: "العنوان", en: "Address" },
    "contact.addrv":   { ar: "جنزور ك م 6 — طرابلس، ليبيا", en: "Janzour KM 6 — Tripoli, Libya" },
    "contact.web":     { ar: "الموقع الإلكتروني", en: "Website" },
    "contact.f.name":  { ar: "الاسم الكامل", en: "Full name" },
    "contact.f.namep": { ar: "اكتب اسمك هنا", en: "Enter your name" },
    "contact.f.email": { ar: "البريد الإلكتروني", en: "Email" },
    "contact.f.msg":   { ar: "رسالتك", en: "Your message" },
    "contact.f.msgp":  { ar: "كيف يمكننا مساعدتك؟", en: "How can we help you?" },
    "contact.f.send":  { ar: "إرسال الرسالة", en: "Send message" },
    "contact.f.note":  { ar: 'بإرسالك هذا النموذج فإنك توافق على <a href="privacy.html" style="color:var(--green-700);font-weight:700">سياسة الخصوصية</a> الخاصة بنا.', en: 'By submitting this form you agree to our <a href="privacy.html" style="color:var(--green-700);font-weight:700">Privacy Policy</a>.' },

    // ---- footer ----
    "footer.about": { ar: "تزويد — شركة تجارة إلكترونية وبرمجيات، نُدير منصة تسوّق موثوقة ونطوّر تطبيقات رقمية متكاملة في جميع أنحاء ليبيا.", en: "Tzweed — an e‑commerce and software company running a trusted marketplace and building integrated digital apps across Libya." },
    "footer.links":  { ar: "روابط سريعة", en: "Quick Links" },
    "footer.apps":   { ar: "تطبيقاتنا", en: "Our Apps" },
    "footer.contact":{ ar: "معلومات التواصل", en: "Contact Info" },
    "footer.terms":  { ar: "الشروط والأحكام", en: "Terms & Conditions" },
    "footer.privacy":{ ar: "سياسة الخصوصية", en: "Privacy Policy" },
    "footer.rights": { ar: "شركة تزويد — جميع الحقوق محفوظة.", en: "Tzweed — All rights reserved." }
  };

  function apply(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (T[k] && T[k][lang] != null) el.innerHTML = T[k][lang];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const k = el.getAttribute("data-i18n-ph");
      if (T[k] && T[k][lang] != null) el.setAttribute("placeholder", T[k][lang]);
    });
    // page title
    if (T["meta.title"]) document.title = T["meta.title"][lang];
    // swap Tawzee logo (Arabic wordmark <-> English wordmark)
    document.querySelectorAll("[data-logo-tawzee]").forEach((img) => {
      img.src = lang === "en" ? "assets/companies/tawzee-en.png" : "assets/companies/tawzee.png";
    });
    // toggle button label shows the OTHER language
    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "ar" ? "EN" : "ع";

    try { localStorage.setItem("tzweed_lang", lang); } catch (e) {}
  }

  function init() {
    let lang = "ar";
    try { lang = localStorage.getItem("tzweed_lang") || "ar"; } catch (e) {}
    apply(lang);
    const btn = document.getElementById("langToggle");
    if (btn) btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("lang") || "ar";
      apply(cur === "ar" ? "en" : "ar");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
