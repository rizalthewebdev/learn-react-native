import {plugin} from 'twrnc';

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({container: 'bg-white flex-1 items-center justify-center'});
    }),
  ],
};
