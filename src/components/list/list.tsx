import { list as rawData } from '@/data';
import { replaceWithJsx } from '@/utils';
import { TagProps } from '@/utils/replaceWithJsx';
import Image from 'next/image';
import styles from './list.module.scss';

type ListItem = {
    icon?: string;
    label: string;
    tags?: TagProps[];
};

const list: ListItem[] = rawData as unknown as ListItem[];

function List() {
	return <ul className={styles.root}>
		{list.map(({ icon, label, tags }) => <li key={label}>
			{icon && <Image src={icon} alt={label} width={32} height={32} />}
			<span>{tags ? replaceWithJsx(label, tags) : label}</span>
		</li>)}
	</ul>
}

export { List };

