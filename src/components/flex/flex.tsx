// Flex.tsx
import classNames from 'classnames';
import { CSSProperties, PropsWithChildren } from 'react';
import styles from './flex.module.scss';

interface BaseFlexProps {
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  style?: CSSProperties;
  className?: string;
  reverse?: boolean;
}

type FlexProps = PropsWithChildren<BaseFlexProps>;

const Flex = ({
  direction = 'row',
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  children,
  style,
  className,
  reverse = false
}: FlexProps) => {
  return (
    <div
      className={classNames(styles.root, reverse && styles.reverse, className)}
      style={{
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { Flex };
