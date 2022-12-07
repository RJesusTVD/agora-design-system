import { ComponentMeta, Story } from '@storybook/react';
import { Icon } from '../icon';
import { Accordion, AccordionItems, AccordionProps, AccordionTagsProps } from './accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

export const SingleAccordion: Story<AccordionProps & AccordionTagsProps & AccordionItems> = (args) => {
  return <Accordion {...args} />;
};

SingleAccordion.args = {
  accordionItems: [
    {
      headerTitle: (
        <>
          <Icon icon="agora-illustrate-file" ariaHidden />
          <span className="text-interaction-button-l ml-16">Title lorem ipsum</span>
        </>
      ),
      content:
        'Description egestas sit dictum elementum, turpis morbi amet mauris nunc vitae nisl sapien ut in sed etiam massa at eu neque tellus semper vel ultrices ipsum vel at semper dignissim vehicula.',
      headerTitleClassName: 'bg-white hover:bg-primary-100',
      contentClassName: 'text-text-m',
      accordionItemClassName: 'border-b border-neutral-300'
    }
  ] as AccordionItems[],
  headerTag: 'h3',
  type: 'single'
} as AccordionProps & AccordionTagsProps & AccordionItems;

SingleAccordion.storyName = 'Accordion Single';

export const AccordionGroup: Story<AccordionProps & AccordionTagsProps & AccordionItems> = (args) => {
  return <Accordion {...args} />;
};
AccordionGroup.args = {
  accordionItems: [
    {
      headerTitle: (
        <>
          <Icon icon="agora-illustrate-file" ariaHidden />
          <span className="text-interaction-button-l ml-16">Title lorem ipsum</span>
        </>
      ),
      content:
        'Description egestas sit dictum elementum, turpis morbi amet mauris nunc vitae nisl sapien ut in sed etiam massa at eu neque tellus semper vel ultrices ipsum vel at semper dignissim vehicula.',
      headerTitleClassName: 'bg-white hover:bg-primary-100',
      contentClassName: 'text-text-m',
      accordionItemClassName: 'border-b border-neutral-300'
    },
    {
      headerTitle: (
        <>
          <Icon icon="agora-illustrate-file" ariaHidden />
          <span className="text-interaction-button-l ml-16">Title lorem ipsum</span>
        </>
      ),
      content:
        'Description egestas sit dictum elementum, turpis morbi amet mauris nunc vitae nisl sapien ut in sed etiam massa at eu neque tellus semper vel ultrices ipsum vel at semper dignissim vehicula.',
      headerTitleClassName: 'bg-white hover:bg-primary-100',
      contentClassName: 'text-text-m',
      accordionItemClassName: 'border-b border-neutral-300'
    }
  ] as AccordionItems[],
  headerTag: 'h3',
  type: 'multiple'
} as AccordionProps & AccordionTagsProps & AccordionItems;

AccordionGroup.storyName = 'Accordion Group';
