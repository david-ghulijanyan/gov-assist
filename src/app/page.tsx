import { Carousel, Find, Footer, FormSubscribe, Home } from '@/components';
import { FC } from 'react';
import "../ui/globals.scss";
import "../ui/reset.scss";

const Index: FC = () => {
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