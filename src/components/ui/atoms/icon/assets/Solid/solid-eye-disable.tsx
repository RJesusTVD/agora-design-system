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
        d="M4.67433 2.26157C4.2665 1.88915 3.63398 1.91786 3.26157 2.32569C2.88915 2.73352 2.91786 3.36603 3.32569 3.73845L5.56688 5.78503C1.9643 8.14278 1 12 1 12C1 12 3 20 12 20C15.1726 20 17.4754 19.0059 19.1273 17.7185L21.3234 19.7364C21.7301 20.11 22.3627 20.0833 22.7364 19.6766C23.11 19.2699 23.0833 18.6373 22.6766 18.2637L20.5855 16.3422C15.2396 11.631 9.87507 7.01072 4.67433 2.26157ZM10.0342 9.73372C9.40065 10.2838 9 11.0951 9 12C9 13.6569 10.3431 15 12 15C13.0483 15 13.971 14.4623 14.5074 13.6477L10.0342 9.73372Z"
        fill="#034AD8"
      />
      <path
        d="M23 12C23 12 22.6925 13.23 21.7761 14.7253L10.9416 5.24511L9.77173 4.17685C10.462 4.06264 11.2036 4 12 4C21 4 23 12 23 12Z"
        fill="#034AD8"
      />
    </svg>
  );
};
