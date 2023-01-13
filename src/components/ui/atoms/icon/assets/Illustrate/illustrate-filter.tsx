import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M5.96742 2C4.39154 2 3.46508 3.78451 4.33369 5.1094L9 12V19L15 13.5V12L19.6663 5.1094C20.5351 3.78423 19.6079 2 18.0324 2H5.96742Z"
        fill="#BBD1FD"
      />
      <path
        d="M15 13.5V17C15 17.2652 14.8964 17.5196 14.712 17.7071L10.6788 21.7071C10.3975 21.9931 9.97456 22.0786 9.60708 21.9239C9.2396 21.7691 9 21.4044 9 21V19L15 13.5Z"
        fill="#034AD8"
      />
    </svg>
  );
};
