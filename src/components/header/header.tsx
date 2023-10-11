import { FC, PropsWithChildren } from 'react';
import { Logo, Menu } from '..';
import styles from './header.module.scss';

interface HeaderProps {
  mode?: 'default' | 'fixed' | 'sticky';
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ mode = 'default' }) => {
  return (
    <header className={`${styles.root} ${styles[mode]}`}>
      <div>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

export { Header };
