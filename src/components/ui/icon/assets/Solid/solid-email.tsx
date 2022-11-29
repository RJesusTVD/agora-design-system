import * as React from 'react';

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
        d="M1.06888 5.35857L11.4857 11.5251C11.8017 11.7147 12.1963 11.7151 12.5126 11.5263L12.5147 11.5251L22.8966 5.21589C22.5519 3.93931 21.3857 3 20.0002 3H4.00015C2.56345 3 1.36263 4.00992 1.06888 5.35857ZM23.0002 7.49333L13.5437 13.2401C12.5945 13.8096 11.409 13.8101 10.4594 13.2417L1.00015 7.64206V18C1.00015 19.6569 2.3433 21 4.00015 21H20.0002C21.657 21 23.0002 19.6569 23.0002 18V7.49333Z"
        fill="#034AD8"
      />
    </svg>
  );
};
