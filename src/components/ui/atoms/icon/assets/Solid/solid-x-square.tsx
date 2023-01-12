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
        d="M5 2C4.17185 2 3.42048 2.33688 2.87868 2.87868C2.33688 3.42048 2 4.17185 2 5V19C2 19.8282 2.33688 20.5795 2.87868 21.1213C3.42048 21.6631 4.17185 22 5 22H19C19.8282 22 20.5795 21.6631 21.1213 21.1213C21.6631 20.5795 22 19.8282 22 19V5C22 4.17185 21.6631 3.42048 21.1213 2.87868C20.5795 2.33688 19.8281 2 19 2H5ZM5.41421 4L12 10.5858L18.5858 4H5.41421ZM20 5.41421L13.4142 12L20 18.5858V5.41421ZM18.5858 20L12 13.4142L5.41421 20H18.5858ZM4 18.5858L10.5858 12L4 5.41421V18.5858Z"
        fill="#034AD8"
      />
    </svg>
  );
};
