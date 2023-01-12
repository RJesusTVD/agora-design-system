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
        d="M2 10.5C2 5.25329 6.25329 1 11.5 1C16.7467 1 21 5.25329 21 10.5C21 15.7467 16.7467 20 11.5 20C6.25329 20 2 15.7467 2 10.5Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8904 18.3237L20.2949 21.7091C20.6865 22.0985 21.3197 22.0968 21.7091 21.7051C22.0985 21.3135 22.0968 20.6804 21.7051 20.2909L18.4125 17.0167C17.9532 17.5037 17.443 17.9422 16.8904 18.3237Z"
        fill="#034AD8"
      />
    </svg>
  );
};
