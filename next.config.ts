import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    domains: ["image.mux.com" , "scontent.fcai30-1.fna.fbcdn.net"],
  },
  
};

export default withNextIntl(nextConfig);
 