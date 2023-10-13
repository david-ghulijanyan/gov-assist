import { DropdownItem } from "../dropdown";

export type TextField = {
  id: string;
  name: string;
  placeholder: string;
  type: string | 'text';
  className: string;
};

export type EmailField = {
  id: string;
  name: string;
  placeholder: string;
  type: 'email';
};

export type SelectField = {
  id: string;
  name: string;
  placeholder: string;
  type: 'select';
  options: DropdownItem[];
};

export type CheckboxField = {
  id: string;
  name: string;
  label: string;
  type: 'checkbox';
};

export type FormField = 
  | TextField
  | EmailField
  | SelectField
  | CheckboxField;