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
        d="M1 12C1 12 3 4 12 4C21 4 23 12 23 12C23 12 21 20 12 20C3 20 1 12 1 12Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12C15 13.6569 13.6567 15 12 15C10.3433 15 9 13.6569 9 12C9 10.3431 10.3433 9 12 9C13.6567 9 15 10.3431 15 12Z"
        fill="#034AD8"
      />
    </svg>
  );
};
