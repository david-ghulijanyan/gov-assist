import { Countdown } from '@/components/coutdown';
import { Flex } from '@/components/flex';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Link } from '@/components/link';
import { List } from '@/components/list';
import { Quote } from '@/components/quote';
import { Text } from '@/components/text';
import { quotes } from '@/data';
import { replaceWithJsx } from '@/utils';
import { FC, PropsWithChildren } from 'react';
import styles from './page.module.scss';

const Home: FC<PropsWithChildren> = () => {
  return (
    <main className={styles.root}> 
      <Hero>
        <Header />
        <Flex>
          <Flex direction="column" align="space-between">
            <Text as="h1"><Text color="primary">Win the right to live</Text> <br />in the USA!</Text>
            <Flex>
              <Quote>{replaceWithJsx(quotes[0].label, [{
                ...(quotes[0] && quotes[0].tags && quotes[0].tags[0]),
                tag: Link,
              }])}</Quote>
              <Countdown />
              <List />
            </Flex>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Hero>
    </main>
  )
}

export { Home };
