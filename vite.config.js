import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    },
  proxy: {
      '/query': {
        target: 'https://replit.com/@ecs162-s22/WaterLevel-Backend-ecs162-s22-116#index.js',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
}
