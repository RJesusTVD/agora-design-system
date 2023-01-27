import classNames from 'classnames';
import React, { useState } from 'react';
import { Icon } from '../icon';
import './checkbox.scss';

export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Checkbox descriptive text
   * @default ''
   */
  label: string;
  /**
   * Descritive attribute that labels the checkbox in terms of accessibility
   * @default null
   */
  ariaLabel?: string;
  /**
   * Hightlight the input indicating some error
   * @default false
   */
  hasError?: boolean;
  /**
   * Determine if start checked.
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

export const Checkbox: React.FC<CheckboxProps> = ({
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
  const inputWrapper = classNames('agora-checkbox-wrapper', {
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
      <input
        type="checkbox"
        id={id}
        checked={checked}
        aria-label={ariaLabel || label}
        aria-required={!isOptional}
        aria-invalid={hasError}
        onChange={handleChange}
        tabIndex={0}
        {...propsClone}
      />
      <span className="checkbox-span">
        <Icon icon="agora-line-tick" ariaHidden />
      </span>
      <label className="checkbox-label text-text-m" htmlFor={id}>
        {children || label}
      </label>
    </div>
  );
};

export default Checkbox;
