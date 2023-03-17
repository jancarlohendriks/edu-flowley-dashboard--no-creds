/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // basePath: '/admin-one-react-tailwind',
  // env: {
  //   GOOGLE_APPLICATION_CREDENTIALS: 'flowley-test-880d49cc6785.json',
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/admin-one-react-tailwind',
  //       basePath: false,
  //       permanent: false,
  //     },
  //   ]
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig
