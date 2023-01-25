import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Radio, RadioProps } from './radio';
import { argTypes } from './radio.csf';

export default {
  title: 'Components/Atoms/Radio',
  argTypes: {
    ...argTypes
  },
  component: Radio
} as ComponentMeta<typeof Radio>;

export const RadioDefault = (args: RadioProps) => {
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
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  );
};

export const RadioChildren = (args: RadioProps) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" child={<RadioChildrenNode />} />
    </div>
  );
};
RadioChildren.storyName = 'Radio Custom Children';

export const RadioNoLabel = (args: RadioProps) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" hideLabel />
    </div>
  );
};
RadioNoLabel.storyName = 'Radio No Label';

export const RadioDisabled = (args: RadioProps) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" disabled isChecked />
    </div>
  );
};
RadioDisabled.storyName = 'Radio Disabled';

export const RadioHasError = (args: RadioProps) => {
  return (
    <div className="p-16">
      <Radio {...args} id="form-radio" name="input-name" hasError />
    </div>
  );
};
RadioHasError.storyName = 'Radio Has Error';
