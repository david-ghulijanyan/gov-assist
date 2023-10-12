import classNames from 'classnames';
import styles from './copyrights.module.scss';

function Copyrights({className}: {className: string}) {
	return <div className={classNames(styles.root, className)}>Copyright © 2016-2023 GovAssist, LLC All Rights Reserved</div>
}

export { Copyrights };
