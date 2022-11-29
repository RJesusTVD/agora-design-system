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
        d="M17.7809 14.6247C17.4359 15.056 16.8066 15.1259 16.3753 14.7809L12 11.2806L7.62473 14.7809C7.19347 15.1259 6.56418 15.056 6.21917 14.6247C5.87416 14.1934 5.94408 13.5641 6.37534 13.2191L11.3753 9.21913C11.7406 8.92696 12.2595 8.92696 12.6247 9.21913L17.6247 13.2191C18.056 13.5641 18.1259 14.1934 17.7809 14.6247Z"
        fill="#034AD8"
      />
    </svg>
  );
};
