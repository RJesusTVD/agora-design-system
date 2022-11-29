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
        d="M2 8C2 7.44772 2.44772 7 3 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9L3 9C2.44772 9 2 8.55228 2 8ZM8 16C8 15.4477 8.44772 15 9 15L21 15C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L9 17C8.44772 17 8 16.5523 8 16Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 13.7908 3.79102 12 6 12C8.20898 12 10 13.7908 10 16C10 18.2092 8.20898 20 6 20C3.79102 20 2 18.2092 2 16Z"
        fill="#034AD8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8C14 5.79077 15.791 4 18 4C20.209 4 22 5.79077 22 8C22 10.2092 20.209 12 18 12C15.791 12 14 10.2092 14 8Z"
        fill="#034AD8"
      />
    </svg>
  );
};
