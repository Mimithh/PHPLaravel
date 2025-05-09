import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import * as glob from 'glob'; 

const css = glob.sync('resources/css/*.css')
const js = glob.sync('resources/js/*.js')

export default defineConfig({
    plugins: [
        laravel({
            input: [...css, ...js],
            refresh: true,
        }),
        tailwindcss(),
    ],
});
