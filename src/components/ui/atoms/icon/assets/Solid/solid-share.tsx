import React from 'react';

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
        d="M15.1581 7.81485C15.883 8.54668 16.8885 9 18 9C20.2091 9 22 7.20914 22 5C22 2.79086 20.2091 1 18 1C15.7909 1 14 2.79086 14 5C14 5.37702 14.0522 5.74185 14.1497 6.08768L8.84194 9.18515C8.11704 8.45332 7.11146 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.11167 16 8.11741 15.5465 8.84234 14.8144L14.1509 17.9079C14.0526 18.255 14 18.6214 14 19C14 21.2091 15.7909 23 18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C16.8902 15 15.886 15.452 15.1613 16.1819L9.8505 13.0871C9.9479 12.7415 10 12.3768 10 12C10 11.623 9.94784 11.2581 9.85034 10.9123L15.1581 7.81485Z"
        fill="#034AD8"
      />
    </svg>
  );
};
