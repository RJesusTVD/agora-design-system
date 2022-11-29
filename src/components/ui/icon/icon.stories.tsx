import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { allIcons } from './assets';
import { Icon, IconProps } from './icon';

export default {
  title: 'Components/Icon'
} as ComponentMeta<typeof Icon>;

export const Size: Story<IconProps> = ({ icon }: IconProps) => {
  const dimensions = ['xs', 'sm', 'default', 'md', 'lg', 'xl'] as const;

  return (
    <div style={{ backgroundColor: '#ebebeb' }}>
      {dimensions.map((size) => (
        <Icon className="p-1" key={size} size={size} icon={icon || 'agora-line-user'} ariaHidden />
      ))}
    </div>
  );
};
Size.storyName = 'Size';
Size.argTypes = {
  icon: {
    description: 'Icon name or external image url',
    control: {
      type: 'select',
      options: allIcons
    }
  }
};

export const ExternalImage: Story<IconProps> = ({ icon, size }: IconProps) => {
  return <Icon icon={icon || 'https://picsum.photos/50'} size={size || 'md'} ariaHidden />;
};
ExternalImage.storyName = 'External Image';
ExternalImage.argTypes = {
  icon: {
    description: 'Icon name or external image url',
    control: 'text'
  },
  size: {
    description: 'Icon size to be used',
    control: {
      type: 'inline-radio',
      options: ['default', 'xl', 'lg', 'md', 'sm', 'xs']
    }
  }
};

export const IconList: Story<IconProps> = ({ size }: IconProps) => {
  return (
    <div style={{ backgroundColor: '#ebebeb' }} className="grid md:grid-cols-3">
      {allIcons.map((icon) => (
        <div className="flex items-center" key={icon}>
          <Icon icon={icon} size={size || 'md'} ariaHidden />
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
    control: {
      type: 'inline-radio',
      options: ['default', 'xl', 'lg', 'md', 'sm', 'xs']
    }
  }
};
