import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import netlify from '@netlify/vite-plugin';

export default defineConfig(() => {
    return {
        server: {
            port: 3000,
            open: true,
        },
        build: {
            outDir: 'build',
        },
        plugins: [react(),netlify()],
        build: {
            chunkSizeWarningLimit: 1000, // raises limit to 1MB
        },
        define: { 
            'process.env': {}, // to workaround the process.env error but not a 
                            //permanent fix  
        },
    };
});