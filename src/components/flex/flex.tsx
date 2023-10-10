import { FC, PropsWithChildren } from 'react';
import styles from './flex.module.scss';

const Flex: FC<PropsWithChildren> = ({children}) => {
	return <div className={styles.root}>{children}</div>
}

export { Flex };
