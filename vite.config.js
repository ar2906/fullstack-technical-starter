import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';

const port = 5173;
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`;
export default defineConfig({
    server: {
        // respond to all network requests:
        host: '0.0.0.0',
        port: port,
        strictPort: true,
        // Defines the origin of the generated asset URLs during development
        origin: origin
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        svgr()
    ],
});
