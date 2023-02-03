import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputPassword, InputPasswordProps } from './input_password';
import { argTypes } from './input_password.csf';

export default {
  title: 'Components/Atoms/Input Password',
  component: InputPassword,
  argTypes: {
    ...argTypes
  }
} as ComponentMeta<typeof InputPassword>;

export const InputPasswordComp: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" />
  </div>
);
InputPasswordComp.storyName = 'Input Password';
InputPasswordComp.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackInfo: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" feedbackText="Some info feedback" />
  </div>
);
InputPasswordFeedbackInfo.storyName = 'Input Password Feedback Info';
InputPasswordFeedbackInfo.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackSuccess: Story<any> = (args: InputPasswordProps) => (
  <div className="p8">
    <InputPassword {...args} id="input-password" feedbackText="Some success feedback" feedbackState="success" />
  </div>
);
InputPasswordFeedbackSuccess.storyName = 'Input Password Feedback Success';
InputPasswordFeedbackSuccess.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackWarning: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" feedbackText="Some warning feedback" feedbackState="warning" />
  </div>
);
InputPasswordFeedbackWarning.storyName = 'Input Password Feedback Warning';
InputPasswordFeedbackWarning.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackDanger: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" feedbackText="Some danger feedback" feedbackState="danger" />
  </div>
);
InputPasswordFeedbackDanger.storyName = 'Input Password Feedback Danger';
InputPasswordFeedbackDanger.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasError: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" />
  </div>
);
InputTextCompHasError.storyName = 'Input Password Error';
InputTextCompHasError.args = {
  hasError: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompDisabled: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" />
  </div>
);
InputTextCompDisabled.storyName = 'Input Password Disabled';
InputTextCompDisabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasReadOnly: Story<any> = (args: InputPasswordProps) => (
  <div className="p-8">
    <InputPassword {...args} id="input-password" />
  </div>
);
InputTextCompHasReadOnly.storyName = 'Input Password Read Only';
InputTextCompHasReadOnly.args = {
  readOnly: true,
  label: 'Label',
  placeholder: 'Placeholder'
};
