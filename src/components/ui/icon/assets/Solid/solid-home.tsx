import * as React from 'react';

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
        d="M12.6247 1.21913C12.2595 0.926956 11.7406 0.926956 11.3753 1.21913L1.37534 9.21913C0.94408 9.56414 0.874158 10.1934 1.21917 10.6247C1.56418 11.056 2.19347 11.1259 2.62473 10.7809L3.00004 10.4806V20C3.00004 21.6569 4.34318 23 6.00004 23H18C19.6569 23 21 21.6569 21 20V10.4806L21.3753 10.7809C21.8066 11.1259 22.4359 11.056 22.7809 10.6247C23.1259 10.1934 23.056 9.56414 22.6247 9.21913L12.6247 1.21913ZM11 13C10.3029 13 9.77857 13.4092 9.4707 13.8539C9.16012 14.3025 9 14.8679 9 15.4444V21H15V15.4444C15 14.8679 14.8399 14.3025 14.5293 13.8539C14.2214 13.4092 13.6971 13 13 13H11Z"
        fill="#034AD8"
      />
    </svg>
  );
};
