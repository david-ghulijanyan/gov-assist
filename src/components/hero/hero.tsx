import Image from 'next/image';
import { FC, ReactNode } from 'react';
import styles from './hero.module.scss';
import { mapAlignment, mapJustify } from './utils';

export interface HeroProps {
  children?: ReactNode;
  backgroundImage?: string;
  height?: 'fullheight' | 'half' | 'small';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

const Hero: FC<HeroProps> = ({
  children,
  backgroundImage,
  height = 'fullheight',
  align = 'center',
  justify = 'center'
}) => {
  const alignmentStyles = {
    alignItems: mapAlignment(align),
    justifyContent: mapJustify(justify)
  };

  return (
    <div className={`${styles.root} ${styles[height]}`} style={alignmentStyles}>
      {backgroundImage && (
        <div className={styles.background}>
          <Image src={backgroundImage} alt="Hero background" fill objectFit="cover" priority />
        </div>
      )}
      {children}
    </div>
  );
}

export { Hero };
