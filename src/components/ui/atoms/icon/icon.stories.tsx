import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { allIcons } from './assets';
import { Icon, IconProps } from './icon';

export default {
  title: 'Components/Atoms/Icon'
} as ComponentMeta<typeof Icon>;

const dimensions = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] as const;

export const Size: Story<IconProps> = ({ icon }: IconProps) => {
  return (
    <div className="bg-neutral-100">
      {dimensions.map((size) => (
        <Icon className="p-1" key={size} size={size} icon={icon} ariaHidden />
      ))}
    </div>
  );
};
Size.storyName = 'Size';
Size.argTypes = {
  icon: {
    description: 'Icon name or external image url',
    defaultValue: 'no-icon',
    control: {
      type: 'select',
      options: ['no-icon', ...allIcons]
    }
  }
};

export const ExternalImage: Story<IconProps> = ({ icon, size }: IconProps) => {
  return <Icon icon={icon || 'https://picsum.photos/50'} size={size || 'm'} ariaHidden />;
};
ExternalImage.storyName = 'External Image';
ExternalImage.argTypes = {
  icon: {
    description: 'Icon name or external image url',
    control: 'text'
  },
  size: {
    description: 'Icon size to be used',
    defaultValue: 'm',
    control: {
      type: 'select',
      options: dimensions.map((i: string) => i.toUpperCase())
    }
  }
};

export const IconList: Story<IconProps> = ({ size }: IconProps) => {
  return (
    <div className="grid md:grid-cols-3 bg-neutral-100">
      {allIcons.map((icon) => (
        <div className="flex items-center" key={icon}>
          <Icon icon={icon} size={size || 'm'} ariaHidden />
          <span className="pl-8">{icon}</span>
        </div>
      ))}
    </div>
  );
};
IconList.storyName = 'List';
IconList.argTypes = {
  size: {
    description: 'Icon size to be used',
    defaultValue: 'm',
    control: {
      type: 'select',
      options: dimensions.map((i: string) => i.toUpperCase())
    }
  }
};
