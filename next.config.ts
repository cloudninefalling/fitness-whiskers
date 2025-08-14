import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    sassOptions: {
        prependData: `@import "@/assets/scss/variables.scss";
        @import "@/assets/scss/mixins.scss";`,
    },
};

export default nextConfig;
