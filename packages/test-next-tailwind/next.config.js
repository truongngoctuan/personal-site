const debug = process.env.NODE_ENV !== "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	basePath: '/personal-site',
  //assetPrefix: '',
  assetPrefix: !debug ? '/personal-site/' : '',
}

module.exports = nextConfig