/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
      const __dirname = path.dirname(__filename); // get the name of the directory
      // Ensure that all imports of 'yjs' resolve to the same instance
      config.resolve.alias["yjs"] = path.resolve(__dirname, "node_modules/yjs");
    }
    return config;
  },
};

export default nextConfig;
