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
        d="M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C8.51688 13 15.4831 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C15.4831 11 8.51688 11 18 11Z"
        fill="#034AD8"
      />
    </svg>
  );
};
