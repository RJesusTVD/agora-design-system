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
        d="M12 5.59837L11.1437 4.74152C8.8232 2.41949 5.06065 2.4195 2.74013 4.74152C1.0487 6.43406 0.590552 8.89212 1.36495 11H5.96483L7.66796 8.4453C7.8657 8.1487 8.20637 7.97978 8.56215 8.00193C8.91793 8.02408 9.23502 8.23395 9.39444 8.55278L11.6238 13.0115L12.668 11.4453C12.8534 11.1671 13.1657 11 13.5 11H14.5C15.0523 11 15.5 11.4477 15.5 12C15.5 12.5523 15.0523 13 14.5 13H14.0352L12.3321 15.5547C12.1343 15.8513 11.7937 16.0202 11.4379 15.9981C11.0821 15.9759 10.765 15.766 10.6056 15.4472L8.37622 10.9885L7.33206 12.5547C7.1466 12.8329 6.83437 13 6.50001 13H2.59648C2.64335 13.0502 2.69124 13.0998 2.74013 13.1487L11.2927 21.7069C11.4802 21.8946 11.7347 22 12 22C12.2654 22 12.5198 21.8946 12.7074 21.7069L21.2599 13.1487C23.5801 10.8271 23.58 7.06318 21.2599 4.74152C18.9394 2.41949 15.1768 2.4195 12.8563 4.74152L12 5.59837Z"
        fill="#034AD8"
      />
    </svg>
  );
};
