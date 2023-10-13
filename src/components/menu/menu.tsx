'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { languages } from '../../data';
import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Text } from '../text';
import styles from './menu.module.scss';

function Menu({className}:{className?: string}) {
	return <div className={classNames(styles.root, className)}>
		<Dropdown onChange={() => {}} options={languages.map(({ id, label }) => {
			return {
				id, 
				label: <> 
				<Image src={`/assets/images/icon-${id}.webp`} width={28} height={20} alt='' />
				<Text>{label}</Text>
			</>
			}
		})} />
		<Button variant='outline-primary' size='small' className={styles.button} onClick={() => {}}>
			Live Chat
		</Button>
	</div>
}

export { Menu };
