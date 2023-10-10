import { FC, PropsWithChildren } from 'react';
import styles from './text.module.scss';

const Text: FC<PropsWithChildren> = ({children}) => {
	return <div className={styles.root}>{children}</div>
}

export { Text };
