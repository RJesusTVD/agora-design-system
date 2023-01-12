import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M14.8295 20C14.4177 21.1652 13.3064 22 12.0002 22C10.694 22 9.58273 21.1652 9.1709 20M18.1792 8C18.1792 6.4087 17.5282 4.88258 16.3693 3.75736C15.2105 2.63214 13.6388 2 12 2C10.3612 2 8.78948 2.63214 7.63066 3.75736C6.47184 4.88258 5.82083 6.4087 5.82083 8C5.82083 11.0902 5.01802 13.206 4.12121 14.6054C3.36474 15.7859 2.9865 16.3761 3.00037 16.5408C3.01572 16.7231 3.0555 16.7926 3.2068 16.9016C3.34345 17 3.95944 17 5.19143 17H18.8086C20.0406 17 20.6566 17 20.7932 16.9016C20.9445 16.7926 20.9843 16.7231 20.9996 16.5408C21.0135 16.3761 20.6353 15.7859 19.8788 14.6054C18.982 13.206 18.1792 11.0902 18.1792 8Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
