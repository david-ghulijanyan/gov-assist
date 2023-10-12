'use client';

import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { Button, Text } from '..';
import styles from './startQuize.module.scss';

const StartQuize: FC<PropsWithChildren<{}>> = ({ }) => {
	const router = useRouter();

	return <div className={styles.root}>
		<Text variant='h2' weight='xs'>Are you ready to begin?</Text>
		<Button onClick={() => { router.push("/quize")}}>Start!</Button>
	</div>
}

export { StartQuize };
