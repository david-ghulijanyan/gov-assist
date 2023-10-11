import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './text.module.scss';

type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small';
  weight?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color?: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success';
  className?: string,
  style?: any
};

const Text: FC<PropsWithChildren<TextProps>> = ({ className, as = 'span', variant, weight, color, children, style = {} }) => {
  const Tag = as;

  return (
    <Tag className={classNames(styles.root, variant && styles[variant], weight && styles[weight], color && styles[color], className)} style={{ color, ...style }}>
      {children}
    </Tag>
  );
};

export { Text };
