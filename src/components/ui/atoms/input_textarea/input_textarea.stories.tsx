import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputTextArea, InputTextAreaProps } from './input_textarea';
import { argTypes } from './input_textarea.csf';

export default {
  title: 'Components/Atoms/Input Text Area',
  component: InputTextArea,
  argTypes: {
    ...argTypes
  }
} as ComponentMeta<typeof InputTextArea>;

export const InputTextComp: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" />
  </div>
);
InputTextComp.storyName = 'Input Text Area';
InputTextComp.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackInfo: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" feedbackText="Some info feedback" />
  </div>
);
InputTextFeedbackInfo.storyName = 'Input Text Area Feedback Info';
InputTextFeedbackInfo.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackSuccess: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" feedbackText="Some success feedback" feedbackState="success" />
  </div>
);
InputTextFeedbackSuccess.storyName = 'Input Text Area Feedback Success';
InputTextFeedbackSuccess.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackWarning: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" feedbackText="Some warning feedback" feedbackState="warning" />
  </div>
);
InputTextFeedbackWarning.storyName = 'Input Text Area Feedback Warning';
InputTextFeedbackWarning.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackDanger: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" feedbackText="Some danger feedback" feedbackState="danger" />
  </div>
);
InputTextFeedbackDanger.storyName = 'Input Text Area Feedback Danger';
InputTextFeedbackDanger.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasReadOnly: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" />
  </div>
);
InputTextCompHasReadOnly.storyName = 'Input Text Area Read Only';
InputTextCompHasReadOnly.args = {
  readOnly: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompDisabled: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" />
  </div>
);
InputTextCompDisabled.storyName = 'Input Text Area Disabled';
InputTextCompDisabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasError: Story<any> = (args: InputTextAreaProps) => (
  <div className="p-8">
    <InputTextArea {...args} id="input-text" />
  </div>
);
InputTextCompHasError.storyName = 'Input Text Area Error';
InputTextCompHasError.args = {
  hasError: true,
  label: 'Label',
  placeholder: 'Placeholder'
};
