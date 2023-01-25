import classNames from 'classnames';
import React, { useState } from 'react';
import './radio.scss';

export interface RadioProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Radio descriptive text
   * @default 'Lorem ipsum dolor sit amet'
   */
  label: string;
  /**
   * Hightlight the input indicating some error
   * @default false
   */
  hasError?: boolean;
  /**
   * Radio descriptive text
   * @default false
   */
  isChecked?: boolean;
  /**
   * Decides if display/hide label.
   * @default false
   */
  hideLabel: boolean | 'true' | 'false';
  /**
   * Custom child node.
   * @default null
   */
  child: React.ReactNode;
}

export const Radio: React.FC<RadioProps> = ({
  label = 'Lorem ipsum dolor sit amet',
  hasError,
  isChecked,
  hideLabel,
  id,
  child,
  ...props
}) => {
  const inputWrapper = classNames('agora-radio-wrapper', {
    'has-error': hasError,
    'input-only': hideLabel
  });

  const { onChange } = props;

  const [checked, setChecked] = useState(isChecked);

  const handleChange = (evt) => {
    setChecked(!checked);
    onChange?.(evt);
  };

  return (
    <div className={inputWrapper}>
      <input type="radio" id={id} checked={checked} aria-label={label} onChange={handleChange} {...props} />
      <span className="radio-span" />
      <label htmlFor={id} className="radio-label text-text-m">
        {child || label}
      </label>
    </div>
  );
};

export default Radio;
