import classNames from 'classnames';
import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './button.module.scss';
 
export type ButtonSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small';

export type ButtonVariant = 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'danger' | 'info' | 'success' | 'warning';

export type ButtonBorder = '0' |'xxs' |'xs' |'s' |'m' |'l' |'l' |'xl' |'xxl';

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  border?: ButtonBorder;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = 'h6',
  variant = 'primary',
  border = 's',
  onClick,
  children,
  className
}) => (
  <button
    className={classNames(
      styles.btn,
      styles[`size-${size}`],
      styles[variant],
      styles[`border-${border}`],
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
