import { Button } from '../button';
import { Container } from '../container';
import { Flex } from '../flex';
import { Input } from '../input';
import { Text } from '../text';
import styles from './formSubscribe.module.scss';

function FormSubscribe() {
	return <div className={styles.root}>
		<Container>
			<Text variant="h2" weight='xs' color='primary' >Let&apos;s keep in touch for news</Text>
			<Flex className={styles.wrapper}>
				<Text variant='h4' as='p' weight='m'>Subscribe to be the first do receive updates and be in advantage on your application proccess</Text>
				<form>
					<Input id='subscribe' name='subscribe' type='email' placeholder="Your Email Here" />
					<Button variant='danger' size='small' border='xl'>subscribe</Button>
				</form>
			</Flex>
		</Container>
	</div>
}

export { FormSubscribe };
