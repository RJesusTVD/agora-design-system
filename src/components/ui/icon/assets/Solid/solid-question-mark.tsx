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
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.9068 8.27123C11.314 8.03191 11.7927 7.94443 12.2582 8.02428C12.7238 8.10413 13.146 8.34615 13.4502 8.70749C13.7543 9.06883 13.9208 9.52615 13.9201 9.99847L13.9201 9.99996C13.9201 10.4691 13.555 10.9582 12.8654 11.4179C12.551 11.6275 12.2296 11.7889 11.9827 11.8986C11.8607 11.9529 11.7605 11.9929 11.693 12.0186C11.6594 12.0314 11.6342 12.0406 11.6188 12.046L11.6034 12.0515C11.0798 12.2263 10.7968 12.7924 10.9714 13.3162C11.1461 13.8401 11.7124 14.1233 12.2363 13.9486L12.2376 13.9482C12.2937 13.9288 12.3495 13.9087 12.405 13.8876C12.5016 13.8508 12.6358 13.7971 12.795 13.7263C13.1107 13.586 13.5392 13.3724 13.9748 13.082C14.7851 12.5419 15.9197 11.5312 15.9201 10.0009C15.9214 9.05644 15.5884 8.14201 14.9802 7.41949C14.3719 6.69682 13.5274 6.21277 12.5964 6.05307C11.6653 5.89337 10.7078 6.06833 9.89339 6.54696C9.07899 7.02559 8.46025 7.77701 8.14678 8.66812C7.96351 9.18911 8.23728 9.76002 8.75827 9.9433C9.27926 10.1266 9.85018 9.85279 10.0335 9.3318C10.1902 8.88625 10.4996 8.51054 10.9068 8.27123ZM12.0001 16C11.4478 16 11.0001 16.4477 11.0001 17C11.0001 17.5522 11.4478 18 12.0001 18H12.0101C12.5624 18 13.0101 17.5522 13.0101 17C13.0101 16.4477 12.5624 16 12.0101 16H12.0001Z"
        fill="#034AD8"
      />
    </svg>
  );
};
