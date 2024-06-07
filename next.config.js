/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [{ source: "/re", destination: "/direct", permanent: true }];
  },
};
