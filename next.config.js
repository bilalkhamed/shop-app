/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                pathname: '/mikeyarce.com/wp-content/uploads/2021/09/**',
            },
        ],

    }
};

module.exports = nextConfig;
