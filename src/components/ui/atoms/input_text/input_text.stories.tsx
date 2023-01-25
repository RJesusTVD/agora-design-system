import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputText } from './input_text';
import { argTypes } from './input_text.csf';

export default {
  title: 'Components/Atoms/Input Text',
  component: InputText,
  argTypes: {
    ...argTypes
  }
} as ComponentMeta<typeof InputText>;

export const InputTextComp: Story<any> = (args) => <InputText {...args} id="input-text" />;
InputTextComp.storyName = 'Input Text';
InputTextComp.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackInfo: Story<any> = (args) => <InputText {...args} id="input-text" feedbackText="Some info feedback" />;
InputTextFeedbackInfo.storyName = 'Input Text Feedback Info';
InputTextFeedbackInfo.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackSuccess: Story<any> = (args) => (
  <InputText {...args} id="input-text" feedbackText="Some success feedback" feedbackState="success" />
);
InputTextFeedbackSuccess.storyName = 'Input Text Feedback Success';
InputTextFeedbackSuccess.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackWarning: Story<any> = (args) => (
  <InputText {...args} id="input-text" feedbackText="Some warning feedback" feedbackState="warning" />
);
InputTextFeedbackWarning.storyName = 'Input Text Feedback Warning';
InputTextFeedbackWarning.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextFeedbackDanger: Story<any> = (args) => (
  <InputText {...args} id="input-text" feedbackText="Some danger feedback" feedbackState="danger" />
);
InputTextFeedbackDanger.storyName = 'Input Text Feedback Danger';
InputTextFeedbackDanger.args = {
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasReadOnly: Story<any> = (args) => <InputText {...args} id="input-text" />;
InputTextCompHasReadOnly.storyName = 'Input Text Read Only';
InputTextCompHasReadOnly.args = {
  readOnly: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompDisabled: Story<any> = (args) => <InputText {...args} id="input-text" />;
InputTextCompDisabled.storyName = 'Input Text Disabled';
InputTextCompDisabled.args = {
  disabled: true,
  label: 'Label',
  placeholder: 'Placeholder'
};

export const InputTextCompHasError: Story<any> = (args) => <InputText {...args} id="input-text" />;
InputTextCompHasError.storyName = 'Input Text Error';
InputTextCompHasError.args = {
  hasError: true,
  label: 'Label',
  placeholder: 'Placeholder'
};
