/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Dev only: without this, opening the site on the printed "Network" URL
  // makes Next reject its own /_next/* assets, so no JavaScript loads.
  allowedDevOrigins: ['192.168.56.1'],
};

export default nextConfig;