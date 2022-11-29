import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 10L12 13M12 17H11.99M10.6509 4.39554L2.63708 18.5989C2.19258 19.3867 1.97033 19.7806 2.00318 20.1039C2.03183 20.3859 2.17581 20.6421 2.39928 20.8088C2.65549 21 3.09907 21 3.98622 21H20.0138C20.9009 21 21.3445 21 21.6007 20.8088C21.8242 20.6421 21.9682 20.3859 21.9968 20.1039C22.0297 19.7806 21.8074 19.3867 21.3629 18.5989L13.3491 4.39554C12.9062 3.61055 12.6848 3.21806 12.3959 3.08624C12.1439 2.97125 11.8561 2.97125 11.6041 3.08624C11.3152 3.21806 11.0938 3.61056 10.6509 4.39554Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
