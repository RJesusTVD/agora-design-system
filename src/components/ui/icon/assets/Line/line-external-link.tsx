import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2V4ZM22 16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16H22ZM14 2C13.4477 2 13 2.44772 13 3C13 3.55228 13.4477 4 14 4V2ZM21 3H22C22 2.44772 21.5523 2 21 2V3ZM20 10C20 10.5523 20.4477 11 21 11C21.5523 11 22 10.5523 22 10H20ZM12.2929 10.2929C11.9024 10.6834 11.9024 11.3166 12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L12.2929 10.2929ZM8 2H7V4H8V2ZM2 7V17H4V7H2ZM7 22H17V20H7V22ZM22 17V16H20V17H22ZM17 22C19.7614 22 22 19.7614 22 17H20C20 18.6569 18.6569 20 17 20V22ZM2 17C2 19.7614 4.23858 22 7 22V20C5.34315 20 4 18.6569 4 17H2ZM7 2C4.23858 2 2 4.23858 2 7H4C4 5.34315 5.34315 4 7 4V2ZM14 4H21V2H14V4ZM20 3V10H22V3H20ZM13.7071 11.7071L21.7071 3.70711L20.2929 2.29289L12.2929 10.2929L13.7071 11.7071Z"
        fill="#034AD8"
      />
    </svg>
  );
};
