import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Radio } from './radio';
import { argTypes } from './radio.csf';

export default {
  title: 'Components/Atoms/Radio',
  argTypes: {
    ...argTypes
  },
  component: Radio
} as ComponentMeta<typeof Radio>;

export const RadioDefault = (args) => {
  return (
    <div className="p-16 flex flex-col">
      <Radio {...args} id="form-radio" name="input-name" />
    </div>
  );
};
RadioDefault.storyName = 'Radio';

const RadioChildrenNode = () => {
  return (
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
  );
};

export const RadioChildren = (args) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name">
        <RadioChildrenNode />
      </Radio>
    </div>
  );
};
RadioChildren.storyName = 'Radio React Children';

export const RadioNoLabel = (args) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" hideLabel />
    </div>
  );
};
RadioNoLabel.storyName = 'Radio No Label';

export const RadioDisabled = (args) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" disabled isChecked />
    </div>
  );
};
RadioDisabled.storyName = 'Radio Disabled';

export const RadioHasError = (args) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" hasError />
    </div>
  );
};
RadioHasError.storyName = 'Radio Has Error';
