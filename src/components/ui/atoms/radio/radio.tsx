import classNames from 'classnames';
import React, { useState } from 'react';
import { stringToBoolean } from '../../../utils';
import './radio.scss';

export interface RadioProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Input ID.
   * @default ''
   */
  id: string;
  /**
   * Radio descriptive text
   * @default ''
   */
  label?: string;
  /**
   * Descritive attribute that labels the checkbox in terms of accessibility
   * @default null
   */
  ariaLabel?: string;
  /**
   * Hightlight the input indicating some error
   * @default false
   */
  hasError?: boolean | 'true' | 'false';
  /**
   * Radio descriptive text
   * @default false
   */
  isChecked?: boolean | 'true' | 'false';
  /**
   * Decides if display/hide label.
   * @default false
   */
  hideLabel?: boolean | 'true' | 'false';
  /**
   * Decides if this field could be optional.
   * @default false
   */
  isOptional?: boolean | 'true' | 'false';
}

export const Radio: React.FC<RadioProps> = ({
  label = '',
  ariaLabel,
  hasError,
  isChecked,
  hideLabel,
  isOptional,
  id,
  children,
  ...props
}) => {
  const inputWrapper = classNames('agora-radio-wrapper', {
    'has-error': stringToBoolean(hasError),
    'input-only': stringToBoolean(hideLabel)
  });
  const propsClone = { ...props };

  const { onChange } = propsClone;

  const [checked, setChecked] = useState(stringToBoolean(isChecked));

  const handleChange = (evt) => {
    setChecked(!checked);
    onChange?.(evt);
  };

  if (isOptional) delete propsClone.required;
  else propsClone.required = true;

  return (
    <div className={inputWrapper}>
      <input type="radio" id={id} checked={checked} aria-label={ariaLabel || label} onChange={handleChange} {...propsClone} />
      <span className="radio-span" />
      <label htmlFor={id} className="radio-label text-text-m">
        {children || label}
      </label>
    </div>
  );
};

export default Radio;
