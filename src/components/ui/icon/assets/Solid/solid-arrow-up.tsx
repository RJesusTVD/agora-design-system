import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M17.7087 14.0037C18.3853 14.7965 17.8079 16 16.7509 16L7.24907 16C6.19209 16 5.61467 14.7965 6.29134 14.0037L11.0423 8.43793C11.5407 7.85402 12.4593 7.85402 12.9577 8.43793L17.7087 14.0037Z"
        fill="#034AD8"
      />
    </svg>
  );
};
