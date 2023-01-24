import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputTextArea } from './input_textarea';
import { argTypes } from './input_textarea.csf';

export default {
  title: 'Components/Atoms/Input Text Area',
  component: InputTextArea,
  argTypes: {
    ...argTypes
  }
} as ComponentMeta<typeof InputTextArea>;

export const InputTextComp: Story<any> = (args) => <InputTextArea {...args} id="input-text" />;
InputTextComp.storyName = 'Input Text Area';
InputTextComp.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackInfo: Story<any> = (args) => <InputTextArea {...args} id="input-text" feedbackText="Some info feedback" />;
InputTextFeedbackInfo.storyName = 'Input Text Area Feedback Info';
InputTextFeedbackInfo.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackSuccess: Story<any> = (args) => (
  <InputTextArea {...args} id="input-text" feedbackText="Some success feedback" feedbackState="success" />
);
InputTextFeedbackSuccess.storyName = 'Input Text Area Feedback Success';
InputTextFeedbackSuccess.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackWarning: Story<any> = (args) => (
  <InputTextArea {...args} id="input-text" feedbackText="Some warning feedback" feedbackState="warning" />
);
InputTextFeedbackWarning.storyName = 'Input Text Area Feedback Warning';
InputTextFeedbackWarning.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackDanger: Story<any> = (args) => (
  <InputTextArea {...args} id="input-text" feedbackText="Some danger feedback" feedbackState="danger" />
);
InputTextFeedbackDanger.storyName = 'Input Text Area Feedback Danger';
InputTextFeedbackDanger.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasReadOnly: Story<any> = (args) => <InputTextArea {...args} id="input-text" />;
InputTextCompHasReadOnly.storyName = 'Input Text Area Read Only';
InputTextCompHasReadOnly.args = {
  readOnly: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompDisabled: Story<any> = (args) => <InputTextArea {...args} id="input-text" />;
InputTextCompDisabled.storyName = 'Input Text Area Disabled';
InputTextCompDisabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasError: Story<any> = (args) => <InputTextArea {...args} id="input-text" />;
InputTextCompHasError.storyName = 'Input Text Area Error';
InputTextCompHasError.args = {
  hasError: true,
  label: 'Label',
  placeholder: 'Placeholder'
};
