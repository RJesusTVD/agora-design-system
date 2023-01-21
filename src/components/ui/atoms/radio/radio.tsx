import classNames from 'classnames';
import React, { useState } from 'react';
import './radio.scss';

export interface RadioProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Radio descriptive text
   * @default 'Label'
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
}

export const Radio: React.FC<RadioProps> = ({ label = 'Label', hasError, isChecked, hideLabel, id, children, ...props }) => {
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
    <label className={inputWrapper} htmlFor={id} id={`${id}-label`} aria-checked={checked}>
      <input type="radio" id={id} checked={checked} onChange={handleChange} {...props} />
      <span className="radio-span" />
      <span className="radio-label">{children || label}</span>
    </label>
  );
};

export default Radio;
