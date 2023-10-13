import { quotes } from '@/data';
import { replaceWithJsx } from '@/utils';
import { TagProps } from '@/utils/replaceWithJsx';
import { format, set } from 'date-fns';
import { FC, PropsWithChildren } from 'react';
import { Container, Countdown, Flex, FormCheck, Header, Hero, List, Quote, Text } from '..';
import styles from "./home.module.scss";

const Home: FC<PropsWithChildren<{}>> = () => {
  const date = set(new Date(), { year: 2023, month: 11, date: 31, hours: 23, minutes: 59, seconds: 59 });
  const targetDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
  return (
    <Hero backgroundImage="/assets/images/bg.webp">
      <Container className={styles.container}>
        <Header />
        <Flex reverse className={styles.content}>
          <Flex direction="column" justifyContent="space-between">
            <Flex alignItems='center'>
              <Text as="h1" variant="h1" ><Text color="primary">Win the right to live</Text> <br />in the USA!</Text>
            </Flex>
            <Flex reverse alignItems='center' style={{gap: 40}}>
              <Quote>{replaceWithJsx(quotes[0].label, quotes[0].tags as unknown as TagProps[])}</Quote>
              <Countdown targetDate={targetDate} />
            </Flex>
            <List />
          </Flex>
          <Flex>
            <FormCheck />
          </Flex>
        </Flex>
      </Container>
    </Hero>
  );
};

export { Home };
