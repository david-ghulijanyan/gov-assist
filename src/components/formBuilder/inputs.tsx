import { FC } from 'react';
import { CheckboxField, EmailField, SelectField, TextField } from './types';

export const TextInput: FC<TextField> = ({ id, name, placeholder }) => (
  <input id={id} name={name} placeholder={placeholder} type="text" />
);

export const EmailInput: FC<EmailField> = ({ id, name, placeholder }) => (
  <input id={id} name={name} placeholder={placeholder} type="email" />
);

export const SelectInput: FC<SelectField> = ({ id, name, placeholder, options }) => (
  <select id={id} name={name}>
    <option value="" disabled>{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export const CheckboxInput: FC<CheckboxField> = ({ id, name, label }) => (
  <div>
    <input id={id} name={name} type="checkbox" />
    <label htmlFor={id}>{label}</label>
  </div>
);
