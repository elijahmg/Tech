export interface FieldsConfig {
  formLabel?: string;
  items?: Array<Item>,
  radioButtonGroup?: RadioButtonGroup
  buttons?: Array<IButton>
}

export type ElementType = 'numberfield' | 'textfield' | 'textarea' | 'checkbox' | 'datefield';

interface Item {
  label: string;
  type: ElementType;
}

interface RadioButtonGroup {
  title: string;
  fields: Array<IRadioButton>;
}

export interface IRadioButton {
  value: string;
  label: string;
}

type ButtonType = 'primary' | 'secondary';

interface IButton {
  label: string;
  type: ButtonType;
}