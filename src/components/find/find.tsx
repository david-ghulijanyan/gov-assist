import { FC, PropsWithChildren } from 'react';
import styles from './find.module.scss';

const Find: FC<PropsWithChildren<{}>> = ({children}) => {
	return <div className={styles.root}>{children}</div>
}

export { Find };
