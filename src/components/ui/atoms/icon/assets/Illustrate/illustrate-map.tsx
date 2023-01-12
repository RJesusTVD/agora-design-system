import React from 'react';

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
        d="M7.4453 2.16795C7.61244 2.05653 7.80582 2.00001 8 2V18.2019L2.5547 21.8321C2.24784 22.0366 1.8533 22.0557 1.52814 21.8817C1.20298 21.7077 1 21.3688 1 21V7C1 6.66565 1.1671 6.35342 1.4453 6.16795L7.4453 2.16795ZM16.5547 21.8321C16.3876 21.9435 16.1942 22 16 22V5.79815L21.4453 2.16795C21.7522 1.96338 22.1467 1.94431 22.4719 2.11833C22.797 2.29235 23 2.63121 23 3V17C23 17.3344 22.8329 17.6466 22.5547 17.8321L16.5547 21.8321Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5.79815L15.9282 5.84605L8.44721 2.10558C8.30591 2.03492 8.15271 1.99999 8 2V18.2019L8.07184 18.154L15.5528 21.8944C15.6941 21.9651 15.8473 22 16 22V5.79815Z"
        fill="#034AD8"
      />
    </svg>
  );
};
