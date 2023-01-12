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
        d="M3.36169 5.16691C2.44226 3.83294 3.38192 2 4.98521 2H19.0148C20.6181 2 21.5577 3.83293 20.6383 5.1669L15.3521 12.4754C15.1054 12.8164 14.9726 13.2266 14.9726 13.6475V17.4675C14.9726 17.7731 14.8331 18.0602 14.5966 18.249C14.5895 18.2546 14.5824 18.2603 14.5753 18.2659C14.5399 18.294 14.5044 18.3222 14.4714 18.3532L10.8715 21.7411C10.8264 21.7835 10.7784 21.8233 10.7245 21.8538C9.97742 22.2765 9.02736 21.7402 9.02736 20.859V13.6475C9.02736 13.2266 8.89456 12.8164 8.64789 12.4754L3.36169 5.16691Z"
        fill="#034AD8"
      />
    </svg>
  );
};
