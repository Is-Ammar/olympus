import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        accent: "var(--accent)",
        sky: "var(--sky)",
        frost: "var(--frost)",
        ink: "var(--ink)",
        slate: "var(--slate)",
        dark: "var(--dark)",
      },
      fontFamily: {
        display: ["var(--font-serif)", "serif"],
        body: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        'hero': 'var(--text-hero)',
        'display': 'var(--text-display)',
        'heading': 'var(--text-heading)',
        'title': 'var(--text-title)',
        'lead': 'var(--text-lead)',
        'body': 'var(--text-body)',
        'small': 'var(--text-small)',
        'mono': 'var(--text-mono)',
        'label': 'var(--text-label)',
      },
    },
  },
  plugins: [],
};
export default config;
