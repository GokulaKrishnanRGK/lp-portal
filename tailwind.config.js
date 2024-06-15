module.exports = {
  /*corePlugins: {
    container: false,
  },*/
  future: {},
  content: [
    './src/**/*.html', './src/**/*.ts'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
    },
    /*container: (theme) => ({
      center: true,
      padding: theme('spacing.2'),
    }),*/
    /*container: {},*/
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    ({
      addComponents,
      theme,
    }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.2'),
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1580px',
          },
        },
      });
    }],
  important: true,
};
