import { FC, PropsWithChildren } from 'react';
import styles from './hero.module.scss';

const Hero: FC<PropsWithChildren<{}>> = ({children}) => {
	return <div className={styles.root}>{children}</div>
}

export { Hero };
