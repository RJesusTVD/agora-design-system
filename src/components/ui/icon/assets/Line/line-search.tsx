import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M16.9775 17L21 21M20 10.5C20 15.1944 16.1944 19 11.5 19C6.80558 19 3 15.1944 3 10.5C3 5.80558 6.80558 2 11.5 2C16.1944 2 20 5.80558 20 10.5Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
