import { Zap, BrainCircuit, TrendingUp, Activity, BarChart3, Truck } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   Infographic Projects Data — 6 Arabic dummy items
   Includes specific chart data (bar heights) for visual variety
   ═══════════════════════════════════════════════════════ */
export const infographicProjects = [
  {
    id: "1",
    slug: "renewable-energy-dashboard",
    title: "مشاريع الطاقة المتجددة",
    category: "طاقة واستدامة",
    percentage: 80,
    chart_type: "circular_progress",
    icon: Zap,
    barHeights: [],
  },
  {
    id: "2",
    slug: "ai-solutions-visual",
    title: "حلول الذكاء الاصطناعي",
    category: "تقنية وبرمجيات",
    percentage: 65,
    chart_type: "bar_chart",
    icon: BrainCircuit,
    barHeights: [45, 70, 50, 90], // Used for bar chart rendering
  },
  {
    id: "3",
    slug: "ecommerce-growth",
    title: "نمو التجارة الإلكترونية",
    category: "تجارة إلكترونية",
    percentage: 92,
    chart_type: "circular_progress",
    icon: TrendingUp,
    barHeights: [],
  },
  {
    id: "4",
    slug: "healthcare-statistics",
    title: "إحصائيات الرعاية الصحية",
    category: "صحة وطب",
    percentage: 75,
    chart_type: "bar_chart",
    icon: Activity,
    barHeights: [60, 80, 40, 70],
  },
  {
    id: "5",
    slug: "financial-markets",
    title: "أسواق المال والاستثمار",
    category: "تمويل واستثمار",
    percentage: 88,
    chart_type: "circular_progress",
    icon: BarChart3,
    barHeights: [],
  },
  {
    id: "6",
    slug: "logistics-data",
    title: "بيانات النقل واللوجستيات",
    category: "نقل ولوجستيات",
    percentage: 70,
    chart_type: "bar_chart",
    icon: Truck,
    barHeights: [30, 55, 85, 65],
  },
];
