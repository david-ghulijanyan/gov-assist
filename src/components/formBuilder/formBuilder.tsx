import { FC } from 'react';
import { CheckboxInput, EmailInput, SelectInput, TextInput } from './inputs';
import { FormRow } from './row';
import { FormField } from './types';

interface FormBuilderProps {
  data: (FormField | FormField[])[];
  className?: string
}

const FormBuilder: FC<FormBuilderProps> = ({ data, className }) => {
  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
        return <TextInput {...field} />;
      case 'email':
        return <EmailInput {...field} />;
      case 'select':
        return <SelectInput {...field} />;
      case 'checkbox':
        return <CheckboxInput {...field} />;
      default:
        return null;
    }
  };

  return (
    <form className={className}>
      {data.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <FormRow key={index}>
              {item.map((subItem) => renderField(subItem))}
            </FormRow>
          );
        } else {
          return renderField(item);
        }
      })}
    </form>
  );
};

export { FormBuilder };
