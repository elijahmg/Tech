/** Validate if all values are correct **/
import { FieldsConfig } from './interface';

export const validItemTypes = ['numberfield', 'textfield', 'textarea', 'checkbox', 'datefield'];
export const validButtonTypes = ['primary', 'secondary'];

/** Validate json string **/
export const validateJson = (jsonString: string) => {
  let jsonObj = {} as FieldsConfig;

  try {
    jsonObj = JSON.parse(jsonString) as FieldsConfig;
  } catch (e) {
    throw new Error('Invalid input');
  }

  const keys = Object.keys(jsonObj);
  const validKeys = ['items', 'radioButtonGroup', 'buttons', 'formLabel'];

  /** Valid first level of keys **/
  if (keys.some((key) => !validKeys.includes(key))) {
    throw new Error('Some of the keys are not valid. Valid keys: items, radioButtonGroup, buttons');
  }

  /** Validate items **/
  jsonObj.items?.forEach((item) => {
    if (!validItemTypes.includes(item.type)) {
      throw new Error(`type of the field is wrong. use following: ${validItemTypes.join(',')}`)
    }
  });

  /** Validate buttons **/
  jsonObj.buttons?.forEach((button) => {
    if (!button.type || !button.label) {
      throw new Error('Button doesn\'t contain necessary properties, use type and label');
    }

    if (!validButtonTypes.includes(button.type)) {
     throw new Error('Button type is wrong, use primary or secondary');
    }
  });

  if (jsonObj.radioButtonGroup && (!jsonObj.radioButtonGroup.fields || !jsonObj.radioButtonGroup.title)) {
    throw new Error('Radio button group is missing one of the fields, use field and title');
  }


  jsonObj.radioButtonGroup?.fields.forEach((radioButton) => {
    if (!radioButton.value || !radioButton.label) {
      throw new Error('Radio button doesn\'t contain necessary properties, use value and label');
    }
  });
};