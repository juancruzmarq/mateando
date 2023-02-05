/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "m.media-amazon.com",
      "d3ugyf2ht6aenh.cloudfront.net",
      "encrypted-tbn0.gstatic.com",
      "d2r9epyceweg5n.cloudfront.net",
      "d3ugyf2ht6aenh.cloudfront.net",
      "www.matehierba.cl",
      "i.etsystatic.com",
      "www.regionalesdelabasto.com",
      "www.manos.com.uy",
    ],
  },
};

module.exports = nextConfig;
