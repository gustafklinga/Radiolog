import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'prod-images-static.radiopaedia.org',
          port: '',
          pathname: '/images/**',
          search: '',
        },
      ],
    },
  
};



export default withMDX(config);
