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
        d="M6.21914 9.37528C6.56415 8.94402 7.19344 8.8741 7.6247 9.21911L12 12.7194L16.3753 9.21911C16.8066 8.8741 17.4359 8.94402 17.7809 9.37528C18.1259 9.80654 18.056 10.4358 17.6247 10.7808L12.6247 14.7808C12.2595 15.073 11.7405 15.073 11.3753 14.7808L6.37531 10.7808C5.94405 10.4358 5.87413 9.80654 6.21914 9.37528Z"
        fill="#034AD8"
      />
    </svg>
  );
};
