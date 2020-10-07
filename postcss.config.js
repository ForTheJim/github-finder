const tailwindcss = require("tailwindcss");
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
