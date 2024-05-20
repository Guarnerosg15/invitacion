module.exports = {
    // Otras opciones de configuración de Babel
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@src': './src', // Alias para la carpeta src
          },
        },
      ],
    ],
  };
  