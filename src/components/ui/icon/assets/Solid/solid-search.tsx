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
        d="M18.4125 17.0167C20.0167 15.3157 21 13.0227 21 10.5C21 5.25329 16.7467 1 11.5 1C6.25329 1 2 5.25329 2 10.5C2 15.7467 6.25329 20 11.5 20C13.5018 20 15.3589 19.3809 16.8904 18.3237L20.2949 21.7091C20.6865 22.0985 21.3197 22.0967 21.7091 21.7051C22.0985 21.3135 22.0967 20.6803 21.7051 20.2909L18.4125 17.0167Z"
        fill="#034AD8"
      />
    </svg>
  );
};
