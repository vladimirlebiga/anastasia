import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,


    env: {
      SERVICE_ID: 'service_p19le0o',
      TEMPLATE_ID: 'template_qxf78cf',
      PUBLIC_KEY: '2qkB1_RJqmZYfshAG',
    },
  

  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return [
      {
        source: '/:locale/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
