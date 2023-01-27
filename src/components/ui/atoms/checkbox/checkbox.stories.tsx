import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxProps } from './checkbox';
import { argTypes } from './checkbox.csf';

export default {
  title: 'Components/Atoms/Checkbox',
  argTypes: {
    ...argTypes
  },
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

export const CheckboxDefault = (args: CheckboxProps) => {
  return (
    <div className="p-16">
      <Checkbox {...args} id="form-checkbox" name="input-name" />
    </div>
  );
};
CheckboxDefault.storyName = 'Checkbox';

export const CheckboxChildren = (args: CheckboxProps) => {
  return (
    <div className="p-16">
      <Checkbox {...args} id="form-checkbox" name="input-name">
        <div>
          <p>
            I declare that I read and accept uncondicionally{' '}
            <a target="_blank" className="underline text-primary-600" href="http://google.com" rel="noreferrer">
              Terms
            </a>{' '}
            and{' '}
            <a target="_blank" className="underline text-primary-600" href="http://google.com" rel="noreferrer">
              Conditions
            </a>{' '}
            of Agora Design System.
          </p>
        </div>
      </Checkbox>
    </div>
  );
};
CheckboxChildren.storyName = 'Checkbox Custom Children';

export const CheckboxNoLabel = (args: CheckboxProps) => {
  return (
    <div className="p-16">
      <Checkbox {...args} id="form-checkbox" name="input-name" hideLabel />
    </div>
  );
};
CheckboxNoLabel.storyName = 'Checkbox No Label';

export const CheckboxDisabled = (args: CheckboxProps) => {
  return (
    <div className="p-16">
      <Checkbox {...args} id="form-checkbox" name="input-name" disabled />
    </div>
  );
};
CheckboxDisabled.storyName = 'Checkbox Disabled';

export const CheckboxDisabledSelected = (args: CheckboxProps) => {
  return (
    <div className="p-16">
      <Checkbox {...args} id="form-checkbox" name="input-name" disabled isChecked />
    </div>
  );
};
CheckboxDisabledSelected.storyName = 'Checkbox Disabled Selected';

export const CheckboxHasError = (args: CheckboxProps) => {
  return (
    <div className="p-16">
      <Checkbox {...args} id="form-checkbox" name="input-name" hasError />
    </div>
  );
};
CheckboxHasError.storyName = 'Checkbox Has Error';
