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
        d="M17.7809 9.37534C18.1259 9.8066 18.056 10.4359 17.6247 10.7809L12.6247 14.7809C12.1935 15.1259 11.5642 15.056 11.2192 14.6247C10.8742 14.1935 10.9441 13.5642 11.3753 13.2192L16.3753 9.21917C16.8066 8.87416 17.4359 8.94408 17.7809 9.37534Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.21917 9.37534C6.56418 8.94408 7.19347 8.87416 7.62473 9.21917L12.6247 13.2192C13.056 13.5642 13.1259 14.1935 12.7809 14.6247C12.4359 15.056 11.8066 15.1259 11.3753 14.7809L6.37534 10.7809C5.94408 10.4359 5.87416 9.8066 6.21917 9.37534Z"
        fill="#034AD8"
      />
    </svg>
  );
};
