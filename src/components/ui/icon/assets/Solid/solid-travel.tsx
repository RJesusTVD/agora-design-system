import React from 'react';

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
        d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V6H20C21.6569 6 23 7.34315 23 9V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V9C1 7.34315 2.34315 6 4 6H7V5ZM9 6H15V5C15 4.44772 14.5523 4 14 4H10C9.44772 4 9 4.44772 9 5V6ZM7 8H9V20H7V8ZM15 8H17V20H15V8Z"
        fill="#034AD8"
      />
    </svg>
  );
};
