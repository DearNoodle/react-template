import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  /*
  (eg. epository is at https://github.com/<USERNAME>/<REPO>),
  then set
  base: '/<REPO>/'
  */
});
