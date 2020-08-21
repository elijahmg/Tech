import React, { FC } from 'react';
import { ElementType, FieldsConfig } from '../../utils/interface';
import TextField from '../TextField';
import TextArea from '../TextArea';
import NumberField from '../NumberField';
import DatePicker from '../DateField';
import CheckBox from '../CheckBox';
import RadioButtonGroups from '../RadioButtonsGroup';
import Button from '../Button';

interface Props {
  fieldsConfig: FieldsConfig;
}

const FormBuildContainer: FC<Props> = ({ fieldsConfig }) => {
  return (
    <form>
      <div className="mb-5 text-center">
        <span>{fieldsConfig.formLabel}</span>
      </div>
      <div>
        {fieldsConfig.items?.map((item) => {
          return (
            <div className="mb-3">
              {formBuildHelper(item.type, item.label)}
            </div>
          );
        })}
        {fieldsConfig.radioButtonGroup &&
        <div className="mb-3">
            <RadioButtonGroups
                config={fieldsConfig.radioButtonGroup.fields}
                title={fieldsConfig.radioButtonGroup.title}
            />
        </div>
        }
        <div className="flex flex-row mb-3">
          {fieldsConfig.buttons?.map((button) => (
            <Button
              className="mr-3"
              primary={button.type === 'primary'}
              secondary={button.type === 'secondary'}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </form>
  );
};

export default FormBuildContainer;


const formBuildHelper = (type: ElementType, label: string) => {
  switch (type) {
    case 'checkbox':
      return <CheckBox label={label}/>;
    case 'datefield':
      return <DatePicker label={label}/>;
    case 'numberfield':
      return <NumberField label={label}/>;
    case 'textarea':
      return <TextArea label={label}/>;
    case 'textfield':
      return <TextField label={label}/>;
    default:
      return null;
  }
};