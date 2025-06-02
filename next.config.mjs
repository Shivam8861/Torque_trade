/** @type {import('next').NextConfig} */
const nextConfig = {

   experimental:{
    serverComponentsHmrCache:false,
   },

   images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"xhzwyxtrkhcehbiuvefj.supabase.co",
      },
    ],
   },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
