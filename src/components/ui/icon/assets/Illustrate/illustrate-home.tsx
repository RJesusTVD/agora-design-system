import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}

      <path
        d="M11.3753 1.21913C11.7406 0.926956 12.2595 0.926956 12.6247 1.21913C15.9581 3.88581 19.2914 6.55246 22.6247 9.21913C23.056 9.56414 23.1259 10.1934 22.7809 10.6247C22.4359 11.056 21.8066 11.1259 21.3753 10.7809L21 10.4806V20C21 21.6569 19.6569 23 18 23H6.00004C4.34318 23 3.00004 21.6569 3.00004 20V10.4806L2.62473 10.7809C2.19347 11.1259 1.56418 11.056 1.21917 10.6247C0.874158 10.1934 0.94408 9.56414 1.37534 9.21913C4.70867 6.55247 8.04201 3.8858 11.3753 1.21913Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.4707 13.8539C9.77857 13.4092 10.3029 13 11 13H13C13.6971 13 14.2214 13.4092 14.5293 13.8539C14.8399 14.3025 15 14.8679 15 15.4444V21H9V15.4444C9 14.8679 9.16012 14.3025 9.4707 13.8539Z"
        fill="#034AD8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.4707 13.8539C9.77881 13.4092 10.3027 13 11 13H13C13.6973 13 14.2212 13.4092 14.5293 13.8539C14.8398 14.3025 15 14.8679 15 15.4445V21H9V15.4445C9 14.8679 9.16016 14.3025 9.4707 13.8539Z"
        fill="#034AD8"
      />
    </svg>
  );
};
