// Container.tsx
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './container.module.scss';

const Container: FC<PropsWithChildren<{className?: string}>> = ({ children, className }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
}

export { Container };
