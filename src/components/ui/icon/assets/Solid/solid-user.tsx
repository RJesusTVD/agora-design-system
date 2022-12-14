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
        d="M12 1C9.23858 1 7 3.23858 7 6C7 8.76142 9.23858 11 12 11C14.7614 11 17 8.76142 17 6C17 3.23858 14.7614 1 12 1ZM4 18C4 15.2386 6.23858 13 9 13H12H15C15.1726 13 15.3431 13.0087 15.5112 13.0258C18.0325 13.2819 20 15.4112 20 18L20 21C20 22.1046 19.1046 23 18 23H15.5H12H6C4.89543 23 4 22.1046 4 21V18Z"
        fill="#034AD8"
      />
    </svg>
  );
};
