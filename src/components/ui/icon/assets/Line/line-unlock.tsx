import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 13V16M15 8V6C15 4.34315 13.6569 3 12 3C11.2316 3 10.5308 3.28885 10 3.76389M9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V12.8C19 11.1198 19 10.2798 18.673 9.63803C18.3854 9.07354 17.9265 8.6146 17.362 8.32698C16.7202 8 15.8802 8 14.2 8H9.8C8.11984 8 7.27976 8 6.63803 8.32698C6.07354 8.6146 5.6146 9.07354 5.32698 9.63803C5 10.2798 5 11.1198 5 12.8V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
