import { DropdownItem } from "../dropdown";

export type TextField = {
  id: string;
  name: string;
  placeholder: string;
  type: string | 'text';
  className?: string;
};

export type EmailField = {
  id: string;
  name: string;
  placeholder: string;
  type: string | 'email';
};

export type SelectField = {
  id: string;
  name: string;
  placeholder: string;
  type: string | 'select';
  options: DropdownItem[];
};

export type CheckboxField = {
  id: string;
  name: string;
  label: string;
  type: string | 'checkbox';
};

export type FormField = 
  | TextField
  | EmailField
  | SelectField
  | CheckboxField;