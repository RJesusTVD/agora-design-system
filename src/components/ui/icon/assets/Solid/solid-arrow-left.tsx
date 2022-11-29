import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M14.0037 6.29134C14.7965 5.61467 16 6.19209 16 7.24907L16 16.7509C16 17.8079 14.7965 18.3853 14.0037 17.7087L8.43793 12.9577C7.85402 12.4593 7.85402 11.5407 8.43793 11.0423L14.0037 6.29134Z"
        fill="#034AD8"
      />
    </svg>
  );
};
