import { ComponentMeta, Story } from '@storybook/react';
import { Accordion } from './accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

export const BasicAccordion: Story<any> = () => {
  return <Accordion />;
};
BasicAccordion.storyName = 'Basic Accordion';
