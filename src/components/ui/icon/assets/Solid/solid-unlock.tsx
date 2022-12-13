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
        d="M12 2C10.9762 2 10.0401 2.38597 9.33309 3.01876C8.92156 3.38708 8.88654 4.01928 9.25487 4.43081C9.62319 4.84233 10.2554 4.87735 10.6669 4.50903C11.0214 4.19174 11.4871 4 12 4C13.1046 4 14 4.89543 14 6V7L9.7587 7C8.95373 6.99999 8.28937 6.99998 7.74817 7.04419C7.18608 7.09012 6.66937 7.18868 6.18404 7.43597C5.43139 7.81947 4.81947 8.43139 4.43597 9.18404C4.18868 9.66937 4.09012 10.1861 4.04419 10.7482C3.99998 11.2894 3.99999 11.9537 4 12.7587V12.7587V16.2413V16.2413C3.99999 17.0463 3.99998 17.7106 4.04419 18.2518C4.09012 18.8139 4.18868 19.3306 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66937 21.8113 7.18608 21.9099 7.74818 21.9558C8.28936 22 8.95372 22 9.75868 22H14.2413C15.0463 22 15.7106 22 16.2518 21.9558C16.8139 21.9099 17.3306 21.8113 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C19.8113 19.3306 19.9099 18.8139 19.9558 18.2518C20 17.7106 20 17.0463 20 16.2413V16.2413V12.7587V12.7587C20 11.9537 20 11.2894 19.9558 10.7482C19.9099 10.1861 19.8113 9.66937 19.564 9.18404C19.1805 8.43139 18.5686 7.81947 17.816 7.43597C17.3306 7.18868 16.8139 7.09012 16.2518 7.04419C16.1707 7.03756 16.0868 7.03193 16 7.02714V6C16 3.79086 14.2091 2 12 2ZM13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13Z"
        fill="#034AD8"
      />
    </svg>
  );
};