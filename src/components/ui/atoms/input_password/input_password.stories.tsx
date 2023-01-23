import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputPassword } from './input_password';
import { argTypes } from './input_password.csf';

export default {
  title: 'Components/Atoms/Input Password',
  component: InputPassword,
  argTypes: {
    ...argTypes
  }
} as ComponentMeta<typeof InputPassword>;

export const InputTextComp: Story<any> = (args) => <InputPassword {...args} id="input-password" />;
InputTextComp.storyName = 'Input Password';

export const InputPasswordFeedbackInfo: Story<any> = (args) => (
  <InputPassword {...args} id="input-password" feedbackText="Some info feedback" />
);
InputPasswordFeedbackInfo.storyName = 'Input Password Feedback Info';
InputPasswordFeedbackInfo.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackSuccess: Story<any> = (args) => (
  <InputPassword {...args} id="input-password" feedbackText="Some success feedback" feedbackState="success" />
);
InputPasswordFeedbackSuccess.storyName = 'Input Password Feedback Success';
InputPasswordFeedbackSuccess.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackWarning: Story<any> = (args) => (
  <InputPassword {...args} id="input-password" feedbackText="Some warning feedback" feedbackState="warning" />
);
InputPasswordFeedbackWarning.storyName = 'Input Password Feedback Warning';
InputPasswordFeedbackWarning.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputPasswordFeedbackDanger: Story<any> = (args) => (
  <InputPassword {...args} id="input-password" feedbackText="Some danger feedback" feedbackState="danger" />
);
InputPasswordFeedbackDanger.storyName = 'Input Password Feedback Danger';
InputPasswordFeedbackDanger.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasError: Story<any> = (args) => <InputPassword {...args} id="input-password" />;
InputTextCompHasError.storyName = 'Input Password Error';
InputTextCompHasError.args = {
  hasError: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompDisabled: Story<any> = (args) => <InputPassword {...args} id="input-password" />;
InputTextCompDisabled.storyName = 'Input Password Disabled';
InputTextCompDisabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasReadOnly: Story<any> = (args) => <InputPassword {...args} id="input-password" />;
InputTextCompHasReadOnly.storyName = 'Input Password Read Only';
InputTextCompHasReadOnly.args = {
  readOnly: true,
  label: 'Label',
  placeholder: 'Placeholder'
};
