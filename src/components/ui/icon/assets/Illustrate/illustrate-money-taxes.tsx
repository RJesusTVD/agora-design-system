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
        d="M11.3753 1.21913C11.7405 0.926956 12.2595 0.926956 12.6247 1.21913L22.6247 9.21913C22.9563 9.48443 23.0842 9.93026 22.9436 10.331C22.803 10.7318 22.4247 11 22 11H21V21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44771 23 0.999995 22.5523 0.999995 22C0.999995 21.4477 1.44771 21 2 21H3V11H2C1.57531 11 1.19694 10.7318 1.05637 10.331C0.915792 9.93026 1.04367 9.48443 1.3753 9.21913L11.3753 1.21913Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 21V11H7V21H5ZM9 21V11H11V21H9ZM13 21V11H15V21H13ZM17 21V11H19V21H17Z"
        fill="#034AD8"
      />
    </svg>
  );
};
