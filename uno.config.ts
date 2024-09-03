// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },

    colors: {
      mct: {
        0: 'hsl(195 90% 97.5%)',
        100: 'hsl(195 90% 95%)',
        200: 'hsl(195 90% 90%)',
        300: 'hsl(195 90% 80%)',
        400: 'hsl(195 90% 70%)',
        500: 'hsl(195 90% 60%)',
        600: 'hsl(195 90% 50%)',
        700: 'hsl(195 90% 40%)',
        800: 'hsl(195 90% 30%)',
        900: 'hsl(195 90% 20%)',
        1000: 'hsl(195 90% 10%)',
      },
    },
  },

  safelist: [
    // Modules can be up to 36 study credits (and we don't know it in advance)
    ...Array.from({ length: 30 }, (_, i) => `row-span-${i + 1}`),
    // Modules can start at any of the 6 semesters
    ...Array.from({ length: 6 }, (_, i) => `col-start-${i + 1}`),
  ],
})
