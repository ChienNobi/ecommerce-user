import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import {fileURLToPath, URL} from 'url';
import {presetAttributify, presetUno} from "unocss";
import Unocss from 'unocss/vite'

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [ElementPlusResolver({importStyle: 'css'})],
        }),
        Unocss({
            presets: [presetAttributify(), presetUno()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    }
});
