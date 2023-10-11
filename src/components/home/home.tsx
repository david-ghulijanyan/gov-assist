import { quotes } from '@/data';
import { replaceWithJsx } from '@/utils';
import { TagProps } from '@/utils/replaceWithJsx';
import { format, set } from 'date-fns';
import { FC, PropsWithChildren } from 'react';
import { Container, Countdown, Flex, Header, Hero, List, Quote, Text } from '..';
import styles from "./home.module.scss";

const Home: FC<PropsWithChildren<{}>> = () => {
  const date = set(new Date(), { year: 2024, month: 11, date: 31, hours: 23, minutes: 59, seconds: 59 });
  const targetDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
  const tags = quotes[0].tags as unknown as TagProps[];
  
  return (
      <Hero  backgroundImage="/assets/images/bg.webp">
      <Container className={styles.container}>
          <Header />
          <Flex className={styles.content}>
            <Flex direction="column" justifyContent="space-between">
            <Flex alignItems='center'>
              <Text as="h1" variant="h1"><Text color="primary">Win the right to live</Text> <br />in the USA!</Text>
            </Flex>
            <Flex alignItems='center'>
                <Quote >{replaceWithJsx(quotes[0].label, tags)}</Quote>
                <Countdown targetDate={targetDate} />
              </Flex>
              <List />
            </Flex>
            <Flex></Flex>
          </Flex>
        </Container>
      </Hero>
  )
}

export { Home };
