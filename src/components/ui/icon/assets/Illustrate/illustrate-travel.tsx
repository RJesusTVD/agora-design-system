import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C2.34315 6 1 7.34315 1 9V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V9C23 7.34315 21.6569 6 20 6H17H15H9H7H4ZM9 8H7V20H9V8ZM17 8H15V20H17V8Z"
        fill="#BBD1FD"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 8H9V20H7V8ZM15 8H17V20H15V8Z" fill="#034AD8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V6H15V5C15 4.44772 14.5523 4 14 4H10C9.44772 4 9 4.44772 9 5V6H7V5Z"
        fill="#034AD8"
      />
    </svg>
  );
};
