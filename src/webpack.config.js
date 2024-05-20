const path = require('path');

module.exports = {
  // Otras opciones de configuración de webpack
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'), // Alias para la carpeta src
    },
  },
};
