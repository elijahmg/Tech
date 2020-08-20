export interface FieldsConfig {
  items?: Array<Item>,
  radioButtonGroup?: Array<IRadioButton>
  buttons?: Array<IButton>
}

export type ElementType = 'numberfield' | 'textfield' | 'textarea' | 'checkbox' | 'datefield';

interface Item {
  label: string;
  type: ElementType;
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