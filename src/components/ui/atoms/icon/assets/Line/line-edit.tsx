import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 20H20M16.3787 3.62132C16.7765 3.2235 17.3161 3 17.8787 3C18.1573 3 18.4331 3.05487 18.6905 3.16148C18.9478 3.26808 19.1817 3.42434 19.3787 3.62132C19.5757 3.8183 19.7319 4.05216 19.8385 4.30953C19.9451 4.5669 20 4.84274 20 5.12132C20 5.3999 19.9451 5.67574 19.8385 5.93311C19.7319 6.19048 19.5757 6.42434 19.3787 6.62132L7 19L3 20L4 16L16.3787 3.62132Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
