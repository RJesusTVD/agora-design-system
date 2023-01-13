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
        d="M4.33369 5.1094C3.46508 3.78451 4.39154 2 5.96742 2H18.0324C19.6079 2 20.5351 3.78423 19.6663 5.1094L15 12V17C15 17.2652 14.8964 17.5196 14.712 17.7071L10.6788 21.7071C10.3975 21.9931 9.97456 22.0786 9.60708 21.9239C9.2396 21.7691 9 21.4044 9 21V12L4.33369 5.1094Z"
        fill="#034AD8"
      />
    </svg>
  );
};
