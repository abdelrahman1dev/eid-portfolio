// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // Point to existing file

const nextConfig: NextConfig = {
  images: {
    domains: ["image.mux.com", "scontent.fcai30-1.fna.fbcdn.net"],
  },
};

export default withNextIntl(nextConfig);