import { create } from '@storybook/theming';

export default create({

  base: 'light',

  // UI
  appBg: 'white',

  // Typography
  fontBase: '"Rota", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',

  // Toolbar default and active colors
  barTextColor: '#04101b',
  barSelectedColor: 'black',
  barBg: 'linear-gradient(to right,#05ffd1,#3b74ff)',

  // Form colors
  inputBg: 'white',
  inputBorder: '#04101b',
  inputTextColor: 'black',
  inputBorderRadius: 4,
  
  brandTitle: 'My custom storybook',
  brandUrl: 'https://mariogyd.com',
  brandImage: 'https://mariogyd.com/static/favicon.svg',
});