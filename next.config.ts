import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `@import "@/assets/scss/variables.scss";`
  }
};

export default nextConfig;
