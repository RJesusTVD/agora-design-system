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
        d="M1 12C1 12 3 4 12 4C21 4 23 12 23 12C23 12 21 20 12 20C3 20 1 12 1 12Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.26157 2.32569C3.63398 1.91786 4.2665 1.88915 4.67433 2.26157L7.94157 5.24511L19.817 15.6361L22.6766 18.2637C23.0833 18.6373 23.11 19.2699 22.7364 19.6766C22.3627 20.0833 21.7301 20.11 21.3234 19.7364L18.4817 17.1253L15.2651 14.3108C14.5408 15.3328 13.3489 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 10.8423 8.49164 9.80054 9.27646 9.07067L6.6086 6.73629L3.32569 3.73845C2.91786 3.36603 2.88915 2.73352 3.26157 2.32569Z"
        fill="#034AD8"
      />
    </svg>
  );
};
