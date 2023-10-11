'use client';

import { FC, useRef, useState } from 'react';
import styles from './dropdown.module.scss';

interface DropdownProps {
  options: string[];
  label?: string;
  onChange: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>();
	const ref = useRef<HTMLDivElement | null>(null);
	
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  };

  const handleSelection = (option: string) => {
    setSelected(option);
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.root} ref={ref}>
      <button className={styles.button} onClick={toggleDropdown}>
        {selected || label || 'Select option'}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {options.map(option => (
            <li key={option} onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
