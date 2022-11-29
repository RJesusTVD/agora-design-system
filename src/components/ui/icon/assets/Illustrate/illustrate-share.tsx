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
        d="M16.2737 6.00602C16.5521 6.48302 16.391 7.09537 15.914 7.37374L9.09404 11.3537C8.61703 11.6321 8.00469 11.4711 7.72632 10.9941C7.44795 10.5171 7.60898 9.90473 8.08598 9.62636L14.906 5.64636C15.383 5.368 15.9953 5.52902 16.2737 6.00602ZM7.726 13.0066C8.00406 12.5294 8.61631 12.368 9.09348 12.646L15.9235 16.626C16.4007 16.9041 16.5621 17.5163 16.284 17.9935C16.006 18.4707 15.3937 18.6321 14.9165 18.3541L8.08653 14.3741C7.60935 14.096 7.44794 13.4838 7.726 13.0066Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5C14 2.79086 15.7909 1 18 1C20.2091 1 22 2.79086 22 5C22 7.20914 20.2091 9 18 9C15.7909 9 14 7.20914 14 5ZM2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12ZM14 19C14 16.7909 15.7909 15 18 15C20.2091 15 22 16.7909 22 19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19Z"
        fill="#034AD8"
      />
    </svg>
  );
};
