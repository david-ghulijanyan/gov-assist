import { Flex, List, Logo, Quote, Text } from '../';
import { quotes } from '../../data';
import { replaceWithJsx } from '../../utils';
import { TagProps } from '../../utils/replaceWithJsx';
import styles from './sidebar.module.scss';

function Sidebar() {
	return <div className={styles.root}>
		<Flex direction="column" justifyContent="space-between">
			<Logo />
				<Flex alignItems='center'>
					<Text as="h1" variant="h1" >Eletronic <br /><Text color="primary">diversity visa </Text> <br />entry form</Text>
				</Flex>
				<Flex alignItems='center'>
					<Text weight='s' variant="h2" >Here you will fill all <br/>your information to <br/>reach your dream.</Text>
				</Flex>
				<List data={[{
		"icon": "/assets/images/icon-forward.webp",
		"label": "10 minutes to finish"
	}]} />
				<Flex alignItems='center'>
					<Quote className={styles.quote}>{replaceWithJsx(quotes[3].label, quotes[3].tags as unknown as TagProps[])}</Quote>
				</Flex>
			</Flex>
	</div>
}

export { Sidebar };
