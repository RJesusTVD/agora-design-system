import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M9.99627 6.29134C9.20353 5.61467 8 6.19209 8 7.24907L8 16.7509C8 17.8079 9.20354 18.3853 9.99627 17.7087L15.5621 12.9577C16.146 12.4593 16.146 11.5407 15.5621 11.0423L9.99627 6.29134Z"
        fill="#BBD1FD"
      />
    </svg>
  );
};
