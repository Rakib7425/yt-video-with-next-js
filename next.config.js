/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://yt-video-with-next-js.vercel.app/:path*',
            },
        ]
    },
};