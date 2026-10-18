/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // Para export 100% estático (sem Vercel): adicione `output: "export"` e `images: { unoptimized: true }`.
};
export default nextConfig;
