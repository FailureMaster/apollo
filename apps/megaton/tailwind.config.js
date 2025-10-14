const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../libs/ui/src/lib/config/tailwind.config.js')],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    // Manual path addition - this was crucial!
    join(__dirname, '../../libs/ui/src/**/*.{ts,tsx}'),
  ],
  theme: {
    extend: {
      // Add any app-specific theme extensions here
    },
  },
  plugins: [
    // Add any app-specific plugins here
  ],
};