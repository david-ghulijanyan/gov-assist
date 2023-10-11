import { formCheck } from '@/data';
import { Button, Flex, Icon, Text } from '..';
import { FormBuilder } from '../formBuilder';
import { FormField } from '../formBuilder/types';
import styles from './formCheck.module.scss';

function FormCheck() {
	const data = formCheck as unknown as (FormField | FormField[])[];
	return (
		<Flex className={styles.root} direction='column'>
			<div className={styles.content}>
				<Text className={styles.arrowText} variant='h4' as='p' color='primary'><Icon className={styles.arrow} name="right" />Check now for free!</Text>
				<Text variant='h2' as='p' color='secondary'>Green card eligibility</Text>
				<FormBuilder className={styles.form} data={data} />
				<Button >Continue</Button>
			</div>
		</Flex>
	);
}

export { FormCheck };
