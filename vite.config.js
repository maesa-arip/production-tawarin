import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
        }),
        react(),
    ],
    server: {
        // origin : 'http://127.0.0.1:8080',
        // host: '0.0.0.0'
        // watch: {
        //     usePolling: true,
        // },
      },
});
