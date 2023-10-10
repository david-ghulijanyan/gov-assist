import { FC, PropsWithChildren } from 'react';
import styles from './quote.module.scss';

const Quote: FC<PropsWithChildren<{}>> = ({children}) => {
	return <div className={styles.root}>{children}</div>
}

export { Quote };
