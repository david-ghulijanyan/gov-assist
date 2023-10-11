import { FC, PropsWithChildren } from 'react';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, Container, Icon, Text } from '..';
import { fees } from '../../data';
import Table from '../table/table';
import styles from './find.module.scss';

const Find: FC<PropsWithChildren<{}>> = ({children}) => {
	return <div className={styles.root}>
		<Container>
			<Text variant='h3'>
				<Icon name='document-text' className={styles.icon} />
				<Text variant='h4'>Find the right visa for you!</Text>
			</Text>
			<Accordion defaultOpen={[0]}>
				<AccordionItem>
					<AccordionHeader>Diversity Visa Cost</AccordionHeader>
					<AccordionContent><Table data={fees} /></AccordionContent>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader>Diversity Visa Timeline</AccordionHeader>
					<AccordionContent><Table data={fees} /></AccordionContent>
				</AccordionItem>
				<AccordionItem>
					<AccordionHeader>Diversity Visa FAQs</AccordionHeader>
					<AccordionContent><Table data={fees} /></AccordionContent>
				</AccordionItem>
    	</Accordion>
			</Container>
	</div>
}

export { Find };
