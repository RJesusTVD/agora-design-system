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
        d="M2.87868 2.87868C3.42048 2.33688 4.17185 2 5 2H19C19.8281 2 20.5795 2.33688 21.1213 2.87868C21.6631 3.42048 22 4.17185 22 5V19C22 19.8282 21.6631 20.5795 21.1213 21.1213C20.5795 21.6631 19.8282 22 19 22H5C4.17185 22 3.42048 21.6631 2.87868 21.1213C2.33688 20.5795 2 19.8282 2 19V5C2 4.17185 2.33688 3.42048 2.87868 2.87868Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.5858L5.41421 4H18.5858L12 10.5858ZM13.4142 12L20 5.41421V18.5858L13.4142 12ZM12 13.4142L18.5858 20H5.41421L12 13.4142ZM10.5858 12L4 18.5858V5.41421L10.5858 12Z"
        fill="#034AD8"
      />
    </svg>
  );
};
