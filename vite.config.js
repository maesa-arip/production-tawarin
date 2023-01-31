import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        viteCompression(),
    ],
    // server: {
    //     host: true
    // },
    // server: {
    //     host: '192.168.1.9',  // Add this to force IPv4 only
    // },
});
