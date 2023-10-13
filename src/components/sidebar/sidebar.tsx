import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { Start as StartSidebar } from "./elements/start";
import styles from './sidebar.module.scss';

const Sidebar: FC<PropsWithChildren<{ small?: boolean }>> = ({ children, small = false }) => {
	return <div className={classNames(styles.root, small && styles.small)}>
		{children}
	</div>
}

export { Sidebar, StartSidebar };
