import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from './button';
import { argTypes, parameters } from './button.csf';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Button',
      control: {
        type: 'text'
      }
    }
  },
  parameters
} as ComponentMeta<typeof Button>;

/**
 * Button Solid
 * @param args
 * @returns
 */
export const ButtonSolid = (args) => {
  const btnVariantOptions = ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral', 'white'];
  return (
    <div className="flex justify-between p-16">
      {btnVariantOptions.map((variant, index) => (
        <Button key={index} {...args} variant={variant} />
      ))}
    </div>
  );
};
ButtonSolid.storyName = 'Button Solid';

/**
 * Button Outline
 * @param args
 * @returns
 */
export const ButtonOutline = (args) => {
  const btnVariantOptions = ['primary', 'danger', 'success', 'warning', 'neutral', 'white'];
  return (
    <div className="flex justify-between items-center  p-16">
      {btnVariantOptions.map((variant, index) => (
        <div key={index} className={variant === 'white' ? 'bg-primary-900 p-16 rounded-4' : ''}>
          <Button {...args} variant={variant} appearence="outline" />
        </div>
      ))}
    </div>
  );
};
ButtonOutline.storyName = 'Button Outline';

/**
 * Button Link
 * @param args B
 * @returns
 */
export const ButtonLink = (args) => {
  const btnVariantOptions = ['primary', 'danger', 'success', 'warning', 'neutral', 'white'];
  return (
    <div className="flex justify-between items-center  p-16">
      {btnVariantOptions.map((variant, index) => (
        <div key={index} className={variant === 'white' ? 'bg-primary-900 p-16 rounded-4' : ''}>
          <Button {...args} variant={variant} appearence="link" />
        </div>
      ))}
    </div>
  );
};
ButtonLink.storyName = 'Button Link';

/**
 * Button Solid Disabled
 * @param args B
 * @returns
 */
export const ButtonDisabled = (args) => {
  const btnVariantOptions = ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral', 'white'];
  return (
    <div className="flex justify-between  p-16">
      {btnVariantOptions.map((variant, index) => (
        <Button key={index} {...args} variant={variant} appearence="solid" disabled />
      ))}
    </div>
  );
};
ButtonDisabled.storyName = 'Button Disabled';

/**
 * Button Solid Full Width
 * @param args B
 * @returns
 */
export const ButtonFullwidth = (args) => {
  const btnVariantOptions = ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral', 'white'];
  return btnVariantOptions.map((variant, index) => (
    <div key={index} className="p-16">
      <Button {...args} variant={variant} appearence="solid" fullWidth />
    </div>
  ));
};
ButtonFullwidth.storyName = 'Button Full Width';

/**
 * Button Solid Icon Only
 * @param args B
 * @returns
 */
export const ButtonFullIconOnly = (args) => {
  const btnVariantOptions = ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral', 'white'];
  return (
    <div className="flex justify-between  p-16">
      {btnVariantOptions.map((variant, index) => (
        <Button key={index} {...args} variant={variant} appearence="solid" iconOnly />
      ))}
    </div>
  );
};
ButtonFullIconOnly.storyName = 'Button Icon Only';
