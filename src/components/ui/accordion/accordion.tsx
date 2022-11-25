import * as AccordionRadixUi from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './accordion.scss';

export const Accordion = () => {
  return (
    <AccordionRadixUi.Root className="border-b border-neutral-300 flex" type="single" collapsible>
      <AccordionRadixUi.Item value="item-1">
        <AccordionRadixUi.Header>
          <AccordionRadixUi.Trigger className="AccordionTrigger flex">
            <span>Trigger text</span>
            <ChevronDownIcon className="AccordionChevron ml-16" aria-hidden />
          </AccordionRadixUi.Trigger>
        </AccordionRadixUi.Header>
        <AccordionRadixUi.Content>…</AccordionRadixUi.Content>
      </AccordionRadixUi.Item>
    </AccordionRadixUi.Root>
  );
};
