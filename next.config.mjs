/** @type {import('next').NextConfig} */

const nextConfig = {};

//The 'incremental' value allows you to adopt PPR for specific routes.
//Next, add the experimental_ppr segment config option to your dashboard layout:
///app/dashboard/layout.tsx : export const experimental_ppr = true;
/* const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
}; */

export default nextConfig;
