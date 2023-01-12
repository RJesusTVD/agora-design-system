import React from 'react';

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
        d="M6.21911 14.6247C5.8741 14.1934 5.94402 13.5641 6.37528 13.2191L11.3753 9.21911C11.8065 8.8741 12.4358 8.94402 12.7808 9.37528C13.1259 9.80654 13.0559 10.4358 12.6247 10.7808L7.62467 14.7808C7.19341 15.1259 6.56412 15.0559 6.21911 14.6247Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7808 14.6247C17.4358 15.0559 16.8065 15.1259 16.3753 14.7808L11.3753 10.7808C10.944 10.4358 10.8741 9.80654 11.2191 9.37528C11.5641 8.94402 12.1934 8.8741 12.6247 9.21911L17.6247 13.2191C18.0559 13.5641 18.1259 14.1934 17.7808 14.6247Z"
        fill="#034AD8"
      />
    </svg>
  );
};
