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

export const argTypes = {
  label: {
    type: { name: 'string', required: true },
    description: 'Label to display above input. ',
    defaultValue: 'Label'
  },
  hideLabel: {
    type: { name: 'boolean', required: false },
    description: 'Whether to show/hide input field label',
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: { summary: 'false' }
    },
    defaultValue: false,
    control: { type: 'boolean' }
  },

  placeholder: {
    type: { name: 'string', required: false },
    description: 'Placeholder o display when no text.',
    defaultValue: ''
  },
  initialValue: {
    type: { name: 'string', required: false },
    description: 'Default value.',
    defaultValue: ''
  },
  togglePasswordAltIconText: {
    type: { name: 'string', required: false },
    description: 'Alternative text for toggle password/plain text icon button.',
    defaultValue: 'Mask or unmask password'
  },
  feedbackText: {
    type: { name: 'string', required: false },
    description: 'Feedback to display',
    defaultValue: ''
  },
  feedbackState: {
    type: { name: 'string', required: false },
    description: 'Feedback message state.',
    defaultValue: 'info',
    control: {
      type: 'select',
      options: ['info', 'success', 'danger', 'warning']
    }
  },
  leadingIcon: {
    type: { name: 'string', required: false },
    description: 'Icon to display on the left side',
    defaultValue: null,
    control: {
      type: 'select',
      options: ['', ...allIcons]
    }
  },
  hasError: {
    type: { name: 'boolean', required: false },
    description: 'Whether the Input has any validation error',
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: { summary: 'false' }
    },
    defaultValue: false,
    control: { type: 'boolean' }
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Whether the Input is disabled.',
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: { summary: 'false' }
    },
    defaultValue: false,
    control: { type: 'boolean' }
  },
  readOnly: {
    type: { name: 'boolean', required: false },
    description: 'Whether the Input is Read only.',
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: { summary: 'false' }
    },
    defaultValue: false,
    control: { type: 'boolean' }
  },
  showCharCounter: {
    type: { name: 'boolean', required: false },
    description: 'Whether the Input is Read only.',
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: { summary: 'false' }
    },
    defaultValue: false,
    control: { type: 'boolean' }
  },
  maxChars: {
    type: { name: 'number', required: false },
    description: 'Max',
    defaultValue: -1
  },
  recoverPasswordText: {
    type: { name: 'string', required: false },
    description: 'Label to display in recover password link.',
    defaultValue: ''
  },
  recoverPasswordSlug: {
    type: { name: 'string', required: false },
    description: 'Destination of Recover password form.',
    defaultValue: ''
  }
};