//import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [react()],
//     server: {
//         hmr: {
//             overlay: false,
//         },
//     },
//     root: 'public',
// });







import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        hmr: {
            overlay: false,
        },
    },
});


