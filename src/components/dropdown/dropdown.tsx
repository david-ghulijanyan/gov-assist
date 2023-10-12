'use client';

import classNames from 'classnames';
import { FC, ReactNode, useRef, useState } from 'react';
import { Button } from '../button';
import { Icon } from '../icon';
import styles from './dropdown.module.scss';

export interface DropdownItem {
  id: string;
  label: ReactNode | string;
}

export interface DropdownProps {
  id?: string,
  options: DropdownItem[];
  label?: string;
  onChange: (value: DropdownItem | string) => void;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({ id, options, label, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | string>(options && options[0]);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  };

  const handleSelection = (option: DropdownItem) => {
    setSelected(option);
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    if (!isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    setIsOpen(!isOpen);
  };

  const displayLabel =
    selected && typeof selected !== 'string' ? selected.label : selected;
  
  return (
    <div id={id} className={classNames(styles.root, className)} ref={ref}>
      <Button variant='outline-primary' size='small' className={styles.button} onClick={toggleDropdown}>
        {displayLabel || label || 'Select option'}
        <Icon name="arrow-down" className={styles.icon}></Icon>
      </Button>
      {isOpen && (
        <ul className={styles.list}>
          {options.map(({ label, id }) => (
            <li key={id} onClick={() => handleSelection({ id, label })}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
