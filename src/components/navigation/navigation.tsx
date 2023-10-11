import { Link } from '../link';
import { navigations } from '../../data';
import styles from './navigation.module.scss';

function Navigation() {
	return <div className={styles.root}>
		<ul>
			{navigations.map(({ id, label }) => <Link href={id} key={id}>{ label}</Link>)}
		</ul>
	</div>
}

export { Navigation };
