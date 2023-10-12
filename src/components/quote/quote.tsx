import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './quote.module.scss';

const Quote: FC<PropsWithChildren<{className: string}>> = ({children, className}) => {
	return <div className={classNames(styles.root, className)}>{children}</div>
}

export { Quote };
