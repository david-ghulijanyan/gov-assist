import { Find, Footer, FormSubscribe, Home, Carousel } from '@/components';
import { FC, PropsWithChildren } from 'react';
import "../ui/reset.scss";
import "../ui/globals.scss";

const Index: FC<PropsWithChildren> = () => {
  return (
    <main> 
      <Home />
      <Find />
      <Carousel />
      <FormSubscribe />
      <Footer />
    </main>
  )
}

export default Index;