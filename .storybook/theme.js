import { create } from '@storybook/theming';
import logo from '../src/assets/logo_ticapp.png';

export default create({
  base: 'light',
  brandTitle: 'Ágora Design System',
  brandUrl: 'https://github.com/ticapp',
  brandImage: logo,
  brandTarget: '_self',
  fontBase: '"Noto Sans", sans-serif'
});
