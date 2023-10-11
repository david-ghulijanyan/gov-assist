'use client';

import { Children, FC, PropsWithChildren, ReactElement, ReactNode, cloneElement, useState } from 'react';
import { Icon } from '../icon';
import styles from './accordion.module.scss';

interface AccordionProps {
  defaultOpen?: number[];
  multiple?: boolean;
  children: ReactNode;
}

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({ defaultOpen = [], multiple = false, children }) => {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpen);

  const toggleItem = (index: number) => {
    if (multiple) {
      setOpenItems(prev => 
        prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={styles.root}>
      {Children.map(children, (child, index) => 
        cloneElement(child as ReactElement, {
          isOpen: openItems.includes(index),
					onToggle: () => toggleItem(index),
					withIcon: true
        })
      )}
    </div>
  );
}

interface AccordionItemProps {
  isOpen?: boolean;
  onToggle?: () => void;
  children: ReactNode;
}

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = ({ isOpen, onToggle, children }) => {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      {Children.map(children, (child) => 
        cloneElement(child as ReactElement, { onToggle })
      )}
    </div>
  );
}

const AccordionHeader: FC<PropsWithChildren<{ onToggle?: () => void, withIcon?: boolean }>> = ({ onToggle, children, withIcon = true }) => {
  return (
    <div className={styles.header} onClick={onToggle}>
			{children}
			{withIcon && <Icon name="arrow-down-square" className={styles.icon} />}
    </div>
  );
}

const AccordionContent: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.content}>
			<div>
				{children}
			</div>
    </div>
  );
}

export { Accordion, AccordionContent, AccordionHeader, AccordionItem };

