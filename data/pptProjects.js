/* ═══════════════════════════════════════════════════════
   PPT Projects Data — Updated with `slides` array
   Each project now includes 4 slides simulating a pitch deck
   ═══════════════════════════════════════════════════════ */
export const pptProjects = [
  {
    id: "1",
    slug: "finance-pitch-deck",
    title: "عرض تقديمي للتمويل",
    category: "التمويل",
    gradient: "from-[#0d1f15] to-[#0a0f0c]",
    problem_solved:
      "كان العميل يعاني من تقديم بيانات مالية معقدة بأسلوب مبعثر، مما كان يقلل من فرصه في الحصول على استثمار.",
    what_delivered:
      "تصميم عرض تقديمي احترافي يركز على تسلسل البيانات المالية بصراحة، مع استخدام رسوم بيانية واضحة وهوية بصرية تعكس الجدية والثقة.",
    slides: [
      { slide_title: "من نحن", gradient: "from-[#0d1f15] to-[#0a0f0c]", highlight_data: null },
      { slide_title: "نمو الإيرادات", gradient: "from-[#0f1a15] to-[#0a0f0c]", highlight_data: "+120% نمو" },
      { slide_title: "توزيع المحافظ", gradient: "from-[#0d1f18] to-[#0a0f0c]", highlight_data: "85K عميل" },
      { slide_title: "خدماتنا عالمياً", gradient: "from-[#0d1f12] to-[#0a0f0c]", highlight_data: null },
    ],
  },
  {
    id: "2",
    slug: "healthcare-innovation",
    title: "ابتكار solutions صحية",
    category: "الصحة",
    gradient: "from-[#0d1a1f] to-[#0a0c0f]",
    problem_solved:
      "حاجة شركة رعاية صحية لعرض منتجها الطبي الجديد للمستثمرين بطريقة مبسطة تخلو من المصطلحات المعقدة.",
    what_delivered:
      "عرض تقديمي يعتمد على الإبهار البصري والمخططات التفاعلية لشرح التكنولوجيا الطبية بأسلوب سهل وواضح.",
    slides: [
      { slide_title: "الرؤية الصحية", gradient: "from-[#0d1a1f] to-[#0a0c0f]", highlight_data: null },
      { slide_title: "تأثير المنتج", gradient: "from-[#0f1a1d] to-[#0a0c0f]", highlight_data: "98% دقة" },
      { slide_title: "وصول المرضى", gradient: "from-[#0d1d1a] to-[#0a0c0f]", highlight_data: "45K+ مستفيد" },
      { slide_title: "خطة الطوارئ", gradient: "from-[#0d1a1f] to-[#0a0c0f]", highlight_data: null },
    ],
  },
  {
    id: "3",
    slug: "saas-product-launch",
    title: "إطلاق منتج SaaS",
    category: "التقنية",
    gradient: "from-[#12131f] to-[#0a0b10]",
    problem_solved:
      "شركة تقنية ناشئة تمتلك منتجاً قوياً ولكنها تفتقر لقصة بصرية مقنعة عند عرضه على الشراكات المحتملة.",
    what_delivered:
      "سرد بصري متكامل يمر بمراحل المشكلة والحل والسوق، مصمم بنظام ألوان عصري يبرز الابتكار.",
    slides: [
      { slide_title: "المشكلة", gradient: "from-[#12131f] to-[#0a0b10]", highlight_data: null },
      { slide_title: "الحل التقني", gradient: "from-[#14151f] to-[#0a0b10]", highlight_data: "3X أسرع" },
      { slide_title: "حجم السوق", gradient: "from-[#12131f] to-[#0c0b10]", highlight_data: "$5B سوق" },
      { slide_title: "الميزة التنافسية", gradient: "from-[#12131f] to-[#0a0b10]", highlight_data: null },
    ],
  },
  {
    id: "4",
    slug: "marketing-campaign",
    title: "حملة تسويقية متكاملة",
    category: "التسويق",
    gradient: "from-[#1f180d] to-[#0f0d0a]",
    problem_solved:
      "فريق تسويق يحتاج لعرض استراتيجيته السنوية للإدارة العليا بطريقة تعكس الحيوية والإنجاز.",
    what_delivered:
      "عرض ديناميكي يدمج مؤشرات الأداء مع الرسوم التوضيحية، مما ساعد الإدارة على اتخاذ القرار بسرعة.",
    slides: [
      { slide_title: "أهداف الحملة", gradient: "from-[#1f180d] to-[#0f0d0a]", highlight_data: null },
      { slide_title: "العائد على الاستثمار", gradient: "from-[#1f1a0d] to-[#0f0d0a]", highlight_data: "+250% ROI" },
      { slide_title: "الوصول", gradient: "from-[#1f180d] to-[#0f0d0a]", highlight_data: "1.2M مشاهدة" },
      { slide_title: "الخطة القادمة", gradient: "from-[#1f180d] to-[#0f0d0a]", highlight_data: null },
    ],
  },
  {
    id: "5",
    slug: "edtech-platform",
    title: "منصة تعليمية رقمية",
    category: "التعليم",
    gradient: "from-[#16120d] to-[#0d0b09]",
    problem_solved:
      "صعوبة إقناع الجهات المانحة بتمويل مشروع تعليمي بسبب العروض التقديمية المملة والمكتظة بالنصوص.",
    what_delivered:
      "تصميم نظيف ومنظم يركز على الصور والإنفوجرافيك لسرد قصة التأثير المجتمعي للمشروع.",
    slides: [
      { slide_title: "الرسالة التعليمية", gradient: "from-[#16120d] to-[#0d0b09]", highlight_data: null },
      { slide_title: "الأثر", gradient: "from-[#18140d] to-[#0d0b09]", highlight_data: "10K+ طالب" },
      { slide_title: "نسبة التخرج", gradient: "from-[#16120d] to-[#0d0b09]", highlight_data: "94% نجاح" },
      { slide_title: "التوسع المستقبلي", gradient: "from-[#16120d] to-[#0d0b09]", highlight_data: null },
    ],
  },
  {
    id: "6",
    slug: "brand-strategy",
    title: "استراتيجية العلامة التجارية",
    category: "التسويق",
    gradient: "from-[#1a0d1f] to-[#0e090f]",
    problem_solved:
      "وكالة تحتاج لقالب عرض تقديمي موحد واحترافي تستخدمه في جميع عروضها للعملاء الجدد.",
    what_delivered:
      "نظام شرائح مرن وقابل للتوسع يسمح للفريق بتعديل المحتوى بسهولة مع الحفاظ على الهوية البصرية المميزة.",
    slides: [
      { slide_title: "تحليل السوق", gradient: "from-[#1a0d1f] to-[#0e090f]", highlight_data: null },
      { slide_title: "شريحة العملاء", gradient: "from-[#1c0f1f] to-[#0e090f]", highlight_data: "65% عائد" },
      { slide_title: "قنوات التوزيع", gradient: "from-[#1a0d1f] to-[#0e090f]", highlight_data: "8 قنوات" },
      { slide_title: "النتائج المتوقعة", gradient: "from-[#1a0d1f] to-[#0e090f]", highlight_data: null },
    ],
  },
];

export const pptCategories = [
  "الكل",
  "التمويل",
  "الصحة",
  "التقنية",
  "التسويق",
  "التعليم",
];
