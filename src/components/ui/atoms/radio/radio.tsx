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
   * Decides if this field could be optional.
   * @default false
   */
  isOptional: boolean | 'true' | 'false';
}

export const Radio: React.FC<RadioProps> = ({
  label = 'Lorem ipsum dolor sit amet',
  hasError,
  isChecked,
  hideLabel,
  isOptional,
  id,
  children,
  ...props
}) => {
  const inputWrapper = classNames('agora-radio-wrapper', {
    'has-error': hasError,
    'input-only': hideLabel
  });
  const propsClone = { ...props };

  const { onChange } = propsClone;

  const [checked, setChecked] = useState(isChecked);

  const handleChange = (evt) => {
    setChecked(!checked);
    onChange?.(evt);
  };

  if (isOptional) delete propsClone.required;
  else propsClone.required = true;

  return (
    <div className={inputWrapper}>
      <input type="radio" id={id} checked={checked} aria-label={label} onChange={handleChange} {...propsClone} />
      <span className="radio-span" />
      <label htmlFor={id} className="radio-label text-text-m">
        {children || label}
      </label>
    </div>
  );
};

export default Radio;
