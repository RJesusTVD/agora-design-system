import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputNumber, InputNumberProps } from './input_number';
import { argTypes } from './input_number.csf';

export default {
  title: 'Components/Atoms/Input Number',
  component: InputNumber,
  argTypes: {
    ...argTypes
  }
} as ComponentMeta<typeof InputNumber>;

export const InputTextComp: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    <InputNumber {...args} id="input-number" increaseButtonAltText="Increase value" decreaseButtonAltText="Decrease value" />
  </div>
);
InputTextComp.storyName = 'Input Number';
InputTextComp.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackInfo: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    {' '}
    <InputNumber
      {...args}
      id="input-number"
      feedbackText="Some info feedback"
      increaseButtonAltText="Increase value"
      decreaseButtonAltText="Decrease value"
    />
  </div>
);
InputTextFeedbackInfo.storyName = 'Input Number Feedback Info';
InputTextFeedbackInfo.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackSuccess: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    {' '}
    <InputNumber
      {...args}
      id="input-number"
      feedbackText="Some success feedback"
      feedbackState="success"
      increaseButtonAltText="Increase value"
      decreaseButtonAltText="Decrease value"
    />
  </div>
);
InputTextFeedbackSuccess.storyName = 'Input Number Feedback Success';
InputTextFeedbackSuccess.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackWarning: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    <InputNumber
      {...args}
      id="input-number"
      feedbackText="Some warning feedback"
      feedbackState="warning"
      increaseButtonAltText="Increase value"
      decreaseButtonAltText="Decrease value"
    />
  </div>
);
InputTextFeedbackWarning.storyName = 'Input Number Feedback Warning';
InputTextFeedbackWarning.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackDanger: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    <InputNumber
      {...args}
      id="input-number"
      feedbackText="Some danger feedback"
      feedbackState="danger"
      increaseButtonAltText="Increase value"
      decreaseButtonAltText="Decrease value"
    />
  </div>
);
InputTextFeedbackDanger.storyName = 'Input Number Feedback Danger';
InputTextFeedbackDanger.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasReadOnly: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    <InputNumber {...args} id="input-number" increaseButtonAltText="Increase value" decreaseButtonAltText="Decrease value" />
  </div>
);
InputTextCompHasReadOnly.storyName = 'Input Number Read Only';
InputTextCompHasReadOnly.args = {
  readOnly: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompDisabled: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    <InputNumber {...args} id="input-number" increaseButtonAltText="Increase value" decreaseButtonAltText="Decrease value" />
  </div>
);
InputTextCompDisabled.storyName = 'Input Number Disabled';
InputTextCompDisabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasError: Story<InputNumberProps> = (args) => (
  <div className="p-8">
    <InputNumber {...args} id="input-number" increaseButtonAltText="Increase value" decreaseButtonAltText="Decrease value" />
  </div>
);
InputTextCompHasError.storyName = 'Input Number Error';
InputTextCompHasError.args = {
  hasError: true,
  label: 'Label',
  placeholder: 'Placeholder'
};
