/* @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
	  remotePatterns: [
		{
		  protocol: "https",
		  hostname: "https://restaurantapp-jqhf.onrender.com",
		  port: "",
		  pathname: "/uploads/**",
		},
	  ],
	},
  };
  
  module.exports = nextConfig;
