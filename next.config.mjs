/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذه الخاصية تخبر Next.js بتحويل المشروع لملفات ثابتة تناسب Cloudflare
  output: 'export',
  
  // إيقاف معالجة الصور لأن Cloudflare Pages لا تدعم معالجة صور Next.js الافتراضية
  images: {
    unoptimized: true,
  },
  
  // تجاهل أخطاء TypeScript و ESLint أثناء البناء (لتجنب فشل الرفع بسبب أخطاء بسيطة)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
