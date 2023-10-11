import { Copyrights } from '../copyrights';
import { Container } from '../container';
import { Flex } from '../flex';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import { Text } from '../text';
import styles from './footer.module.scss';

function Footer() {
	return <div className={styles.root}>
		<Container>
			<Flex direction='column'>
			<Flex justifyContent='space-between' alignItems='center' className={styles.header}>
				<Logo />
				<Navigation />
			</Flex>
			<Text>
				Disclaimer: GovAssist is not affiliated with any United States government agency or department. Costs for consulting services do NOT include any government application, medical examination, filing, or biometric fees. This website does not provide legal advice and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. You may apply by yourself directly at travel.state.gov or at uscis.gov. GovAssist is affiliated with the UT law firm GovAssist Legal which provides legal services on immigration matters. Only licensed immigration professionals can provide advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms or strategies.
			</Text>
			</Flex>
		</Container>
		<Flex justifyContent='center' className={styles.copyrights}>
			<Copyrights />
		</Flex>
	</div>
}

export { Footer };
