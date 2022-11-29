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
        d="M1 13C1 13 3 5 12 5C21 5 23 13 23 13C23 13 21 21 12 21C3 21 1 13 1 13Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.26157 3.32569C3.63398 2.91786 4.2665 2.88915 4.67433 3.26157L7.94157 6.24511L19.817 16.6361L22.6766 19.2637C23.0833 19.6373 23.11 20.2699 22.7364 20.6766C22.3627 21.0833 21.7301 21.11 21.3234 20.7364L18.4817 18.1253L15.2651 15.3108C14.5408 16.3328 13.3489 17 12 17C9.79087 17 8.00001 15.2091 8.00001 13C8.00001 11.8423 8.49164 10.8005 9.27646 10.0707L6.6086 7.73629L3.32569 4.73845C2.91786 4.36603 2.88915 3.73352 3.26157 3.32569Z"
        fill="#034AD8"
      />
    </svg>
  );
};
