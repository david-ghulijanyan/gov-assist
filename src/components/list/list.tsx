import { list as rawData } from '@/data';
import { replaceWithJsx } from '@/utils';
import { TagProps } from '@/utils/replaceWithJsx';
import Image from 'next/image';
import { Text } from '../text';
import styles from './list.module.scss';

type ListItem = {
    icon?: string;
    label: string;
    tags?: TagProps[];
};

const list: ListItem[] = rawData as unknown as ListItem[];

function List({ data = list }) {
	return <ul className={styles.root}>
		{data.map(({ icon, label, tags }) => <li key={label}>
			{icon && <Image className={styles.icon} src={icon} alt={label} width={32} height={32} />}
			<Text weight='m' >{tags ? replaceWithJsx(label, tags) : label}</Text>
		</li>)}
	</ul>
}

export { List };

