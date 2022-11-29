import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M7 2V7M7 7V12M7 7H2M7 12V17M7 12H2M7 12H17M7 17V22M7 17H2M17 2V7M17 7V12M17 7H22M17 12V17M17 12H22M17 17V22M17 17H22M4.18 2H19.82C21.024 2 22 2.97602 22 4.18V19.82C22 21.024 21.024 22 19.82 22H4.18C2.97602 22 2 21.024 2 19.82V4.18C2 2.97602 2.97602 2 4.18 2Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
