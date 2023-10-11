export type FormField = 
  | TextField
  | EmailField
  | SelectField
  | CheckboxField;

export type TextField = {
  id: string;
  name: string;
  placeholder: string;
  type: 'text';
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
  options: string[];
};

export type CheckboxField = {
  id: string;
  name: string;
  label: string;
  type: 'checkbox';
};
