import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M16 22V18C16 15.7909 14.2091 14 12 14H6C3.79086 14 2 15.7909 2 18V22M22 22V18C22 16.1362 20.7252 14.5701 19 14.126M16 9.87398C16.3548 9.78267 16.6905 9.64391 17 9.46487C18.1956 8.77325 19 7.48057 19 6C19 4.51944 18.1956 3.22675 17 2.53513C16.6905 2.35609 16.3548 2.21733 16 2.12602M13 6C13 8.20914 11.2091 10 9 10C6.79086 10 5 8.20914 5 6C5 3.79086 6.79086 2 9 2C11.2091 2 13 3.79086 13 6Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
