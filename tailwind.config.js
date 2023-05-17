/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#241D4A",
        p: "#C4BAD3",
        background: "#0C0B13",
      },
      backgroundImage: {
        primary: "linear-gradient(180deg, #3E229F 11.42%, #060310 178%)",
        secondary: "linear-gradient(74.76deg, #1A1725 -3.52%, #100D17 130.83%)",
        text_shadow:
          "linear-gradient(95.98deg, #3B268B -11.21%, rgba(0, 0, 0, 0) 58.33%), linear-gradient(89.77deg, #4027A4 1.4%, rgba(18, 18, 18, 0) 85.2%)",
        opinion:
          "linear-gradient(180deg, #151225 0%, #1E1A32 100%), linear-gradient(68.06deg, #0B0814 55.44%, #1E1A32 106.22%)",
        star: "linear-gradient(270.23deg, rgba(10, 8, 19, 0) 0.4%, #46386D 51.76%, rgba(10, 8, 19, 0) 100%)",
      },
      boxShadow: {
        primary_button:
          "inset 0px 4px 28px rgba(99, 114, 255, 0.15), inset 1px -6px 9px rgba(58, 13, 132, 0.7)",
        secondary_button:
          "inset 0px 4px 28px rgba(34, 42, 117, 0.15), inset 7px -6px 12px rgba(46, 30, 103, 0.25)",
      },
    },
  },
  plugins: [],
};
