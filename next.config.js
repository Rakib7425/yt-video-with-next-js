/** @type {import('next').NextConfig} */

module.exports = {
    runtime: 'edge', // for Edge API Routes only
    unstable_allowDynamic: [
        '/api/**.js',
        // use a glob to allow anything in the function-bind 3rd party module
        '/node_modules/function-bind/**',
    ],
}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/:path*',
            },
            {
                source: "/api/(.*)",
                destination: "/api"
            }
        ]
    }
};

module.exports = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
}