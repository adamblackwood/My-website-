import { Cairo } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

/* ─── Font Configuration: Cairo with Arabic + Latin subsets ─── */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

/* ─── SEO Metadata ─── */
export const metadata = {
  title: "Abdullah Nabil | مصمم جرافيك",
  description:
    "معرض أعمال عبدالله نبيل — مصمم جرافيك محترف، تصاميم إبداعية احترافية للعملاء المميزين",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-main text-white antialiased">
        {/*
          Global Layout Structure:
          - Flex container fills the viewport
          - Sidebar is FIXED on the LEFT (physical left, regardless of RTL)
          - Main content scrolls independently on the right
        */}
        <div className="flex h-screen overflow-hidden">
          {/* Fixed Sidebar — Always on the LEFT */}
          <Sidebar />

          {/* Scrollable Main Content Area */}
          <main className="ml-64 flex-1 h-screen overflow-y-auto p-10 bg-main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
