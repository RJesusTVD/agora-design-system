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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 0.999999 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H11.99C11.4377 15 10.99 15.4477 10.99 16C10.99 16.5523 11.4377 17 11.99 17H12ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8C13 7.44771 12.5523 7 12 7C11.4477 7 11 7.44771 11 8V12Z"
        fill="#034AD8"
      />
    </svg>
  );
};
