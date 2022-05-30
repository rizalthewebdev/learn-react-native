import {plugin} from 'twrnc';

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        container:
          'bg-white dark:bg-zinc-800 dark:text-zinc-300 flex-1 items-center justify-center',
      });
    }),
  ],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {},
  },
};
