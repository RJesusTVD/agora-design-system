export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout']
  },
  design: {
    type: 'zeroheight',
    url: 'https://zeroheight.com/1be481dc2/p/489b41-buttons/b/026ea1'
  }
};

export const argTypes = {
  label: {
    type: { name: 'string', required: true },
    description: 'Radio descriptive label',
    defaultValue: 'Lorem ipsum dolor sit amet',
    control: {
      type: 'text'
    }
  },
  ariaLabel: {
    type: { name: 'string', required: false },
    description: 'Descritive attribute that labels the checkbox in terms of accessibility',
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Indicate if this field is able to be selected',
    defaultValue: null
  },
  hasError: {
    type: { name: 'boolean', required: false },
    description: 'Indicate that this field has error',
    defaultValue: false
  },
  hideLabel: {
    type: { name: 'boolean', required: false },
    description: 'Should display/hide label',
    defaultValue: false
  },
  isChecked: {
    type: { name: 'boolean', required: false },
    description: 'Should this field must start checked',
    defaultValue: false
  },
  isOptional: {
    type: { name: 'boolean', required: false },
    description: 'Decides if this field could be optional',
    defaultValue: false
  }
};
