import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.67433 3.26157C4.2665 2.88915 3.63398 2.91786 3.26157 3.32569C2.88915 3.73352 2.91786 4.36603 3.32569 4.73845L5.56688 6.78503C1.9643 9.14278 1 13 1 13C1 13 3 21 12 21C15.1726 21 17.4754 20.0059 19.1273 18.7185L21.3234 20.7364C21.7301 21.11 22.3627 21.0833 22.7364 20.6766C23.11 20.2699 23.0833 19.6373 22.6766 19.2637L20.5855 17.3422C15.2396 12.631 9.87507 8.01072 4.67433 3.26157ZM10.0342 10.7337C9.40065 11.2838 9 12.0951 9 13C9 14.6569 10.3431 16 12 16C13.0483 16 13.971 15.4623 14.5074 14.6477L10.0342 10.7337Z"
        fill="#034AD8"
      />
      <path
        d="M23 13C23 13 22.6925 14.23 21.7761 15.7253L10.9416 6.24511L9.77173 5.17685C10.462 5.06264 11.2036 5 12 5C21 5 23 13 23 13Z"
        fill="#034AD8"
      />
    </svg>
  );
};
