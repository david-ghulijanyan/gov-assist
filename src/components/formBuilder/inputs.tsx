'use client';

import { FC } from 'react';
import { Dropdown } from '../dropdown';
import { CheckboxField, EmailField, SelectField, TextField } from './types';

export const TextInput: FC<TextField> = ({ id, name, placeholder }) => (
  <input id={id} name={name} placeholder={placeholder} type="text" />
);

export const EmailInput: FC<EmailField> = ({ id, name, placeholder }) => (
  <input id={id} name={name} placeholder={placeholder} type="email" />
);

export const SelectInput: FC<SelectField> = ({ id, name, placeholder, options }) => (
  <Dropdown id={id} name={name} placeholder={placeholder} options={options} onChange={(e: any) => {e.preventDefault()}} />
);

export const CheckboxInput: FC<CheckboxField> = ({ id, name, label }) => (
  <div>
    <input id={id} name={name} type="checkbox" style={{ marginRight: 12 }} />
    <label htmlFor={id}>{label}</label>
  </div>
);
