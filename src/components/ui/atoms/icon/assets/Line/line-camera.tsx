import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M2 18.3333V8C2 6.34315 3.34315 5 5 5H6.5C7.32843 5 8 4.32843 8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5C16 4.32843 16.6716 5 17.5 5H19C20.6569 5 22 6.34315 22 8V18.3333C22 18.9533 22 19.2633 21.9319 19.5176C21.7469 20.2078 21.2078 20.7469 20.5176 20.9319C20.2633 21 19.9533 21 19.3333 21H4.66667C4.04669 21 3.7367 21 3.48236 20.9319C2.79218 20.7469 2.25308 20.2078 2.06815 19.5176C2 19.2633 2 18.9533 2 18.3333Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
