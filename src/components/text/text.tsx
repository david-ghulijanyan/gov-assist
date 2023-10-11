import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './text.module.scss';

type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small';
  weight?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color?: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success';
};

const Text: FC<PropsWithChildren<TextProps>> = ({ as = 'span', variant, weight, color, children }) => {
  const Tag = as;

  return (
    <Tag className={classNames(styles.root, variant && styles[variant], weight && styles[weight], color && styles[color])} style={{ color }}>
      {children}
    </Tag>
  );
};

export { Text };
