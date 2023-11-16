import type { Config } from 'tailwindcss';
const { nextui } = require( "@nextui-org/react" );


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background-color': '#f7feff',
        'container-color': '#FFFFFF',
        'primary-100': '#E7F1F3',
        'primary-200': '#2B2C2D',
        'accent-primary': '#E7F1F3',
        'accent-secondary': '#CBDDE0',
        'secondary-100': '#CBDDE0',
        'dark-background-color': '#000000',
        'dark-container-color': '#18181B',
        'dark-primary-100': '#EDFDFF',
        'dark-primary-200': '#EDF9FB',
        'dark-secondary-100': '#E9F7F9',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui( {
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          'background-color': '#E0F7FA',
          'container-color': '#EDFDFF',
          'primary-100': '#1E1E1E',
          'primary-200': '#2B2C2D',
          'secondary-100': '#4E5051',

          // 'background-color': '#E0F7FA',
          // 'container-color': '#EDFDFF',
          // 'primary-100': '#1E1E1E',
          // 'primary-200': '#2B2C2D',
          // 'secondary-100': '#4E5051',
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          'background-color': '#000000',
          'container-color': '#18181B',
          'primary-100': '#EDFDFF',
          'primary-200': '#EDF9FB',
          'secondary-100': '#E9F7F9',

          // 'background-color': '#232828',
          // 'container-color': '#2E3435',
          // 'primary-100': '#EDFDFF',
          // 'primary-200': '#EDF9FB',
          // 'secondary-100': '#E9F7F9',
        }, // dark theme colors
      },
      // ... custom themes
    },
  } ),]
}
export default config
