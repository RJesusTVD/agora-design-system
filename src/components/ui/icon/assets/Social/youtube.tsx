import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M19.3891 4H4.89714C2.12488 4 1 6.34147 1 9.23274V14.7673C1 17.6585 2.24302 20 5.01694 20H19.2809C22.0515 20 23 17.6585 23 14.7673V9.23447C22.9917 6.34146 22.163 4 19.3891 4ZM9.78769 15.3916V8.87024L15.7782 12.1292L9.78769 15.3916Z"
        fill="white"
      />
    </svg>
  );
};
