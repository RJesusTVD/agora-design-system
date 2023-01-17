import { allIcons } from '../icon';

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout']
  },
  design: {
    type: 'zeroheight',
    url: 'https://zeroheight.com/1be481dc2/p/489b41-buttons/b/026ea1'
  }
};

export const btnVariantOptions = ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral', 'white'];

export const btnKindsOptions = ['solid', 'outline', 'link'];

export const argTypes = {
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the button.',
    defaultValue: 'default',
    control: {
      type: 'select',
      options: ['default', 'small']
    }
  },
  hasIcon: {
    type: { name: 'boolean', required: false },
    description: 'Prepare the Button for containing Icon',
    defaultValue: null
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'The icon to display on the left/right hand side of button.',
    defaultValue: null,
    control: {
      type: 'select',
      options: [...allIcons.filter((i) => i.indexOf('agora-line') === 0)]
    }
  },
  iconHover: {
    type: { name: 'string', required: false },
    description: 'The icon to display on the left/right hand side of button when mouse over',
    defaultValue: null,
    control: {
      type: 'select',
      options: [...allIcons.filter((i) => i.indexOf('agora-solid') === 0)]
    }
  },
  iconPosition: {
    type: { name: 'string', required: false },
    description: 'The position of icon to display',
    defaultValue: 'leading',
    control: {
      type: 'select',
      options: ['leading', 'trailing']
    }
  },
  iconAltText: {
    type: { name: 'string', required: false },
    description: 'Alternative text recommended for icon with role="img"',
    defaultValue: 'Alternative Text',
    control: {
      type: 'text'
    }
  }
};
