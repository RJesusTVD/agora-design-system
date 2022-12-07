import * as AccordionRadixUi from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { Icon } from '../icon';
import './accordion.scss';

export interface AccordionItems {
  /** Accordion Header Title */
  headerTitle: string | React.ReactNode;
  /** Accordion Content */
  content: string | React.ReactNode;
  /** ClassName to Header title */
  headerTitleClassName?: string;
  /** Chevron Icon Name */
  chevronName?: string;
  /** ClassName to Content */
  contentClassName?: string;
  /** ClassName to Accordion Item */
  accordionItemClassName?: string;
}
export interface AccordionProps {
  /** Accordion Items */
  accordionItems: AccordionItems[];
  /** Accordion Type (Single = close previous)(Multiple = open multiples) */
  type: 'single' | 'multiple';
  /** ClassName to Root Accordion */
  rootAccordionClassName?: string;
}

export type AccordionTagsProps = React.PropsWithChildren<{
  headerTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const Accordion = ({
  accordionItems,
  headerTag: Component = 'h3',
  type = 'single',
  rootAccordionClassName,
  headerTitleClassName = 'bg-white hover:bg-primary-100',
  contentClassName = 'text-text-m',
  chevronName = 'agora-solid-chevron-down',
  accordionItemClassName = 'border-b border-neutral-300'
}: AccordionProps & AccordionTagsProps & AccordionItems) => {
  const rootAccordionCss = classNames('agora-accordion flex flex-wrap', rootAccordionClassName);

  const renderAccordionItem = (items: AccordionItems[]) => {
    return items?.map((item, index) => {
      const headerAccordionCss = classNames(
        'accordion-trigger flex p-32 w-full justify-between',
        item.headerTitleClassName ?? headerTitleClassName
      );
      const contentAccordionCss = classNames('px-32 pb-32', item.contentClassName ?? contentClassName);
      const itemAccordionCss = classNames('w-full', item.accordionItemClassName ?? accordionItemClassName);
      return (
        <AccordionRadixUi.Item value={`item-${index}`} key={`item-${index}`} className={itemAccordionCss}>
          <AccordionRadixUi.Trigger className={headerAccordionCss}>
            <Component className="flex">{item.headerTitle}</Component>
            <Icon icon={item.chevronName ?? chevronName} className="accordion-chevron ml-16" aria-hidden />
          </AccordionRadixUi.Trigger>
          <AccordionRadixUi.Content className={contentAccordionCss}>{item.content}</AccordionRadixUi.Content>
        </AccordionRadixUi.Item>
      );
    });
  };

  return (
    <AccordionRadixUi.Root className={rootAccordionCss} type={type} {...(type === 'single' && { collapsible: true })}>
      {renderAccordionItem(accordionItems)}
    </AccordionRadixUi.Root>
  );
};
