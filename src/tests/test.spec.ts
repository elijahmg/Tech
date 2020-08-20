import { validateJson, validItemTypes } from '../utils/jsonValidation';

const invalidInput = '{ items": [{"label": "count", "type": "numberfield"}] }';
const wrongKeys = '{ "ite": [{"label": "count", "type": "numberfield"}] }';
const wrongTypes = '{ "items": [{"label": "count", "type": "ield"}] }';
const wrongButtonTypes = '{ "items": [{"label": "count", "type": "numberfield"}], "buttons": [{"label": "label", "type": "tertiary"}]  }';
const wrongButtonProps = '{ "items": [{"label": "count", "type": "numberfield"}], "buttons": [{"babel": "", "type": "tertiary"}]  }';
const wrongRadioButtonProps = '{ "items": [{"label": "count", "type": "numberfield"}], "radioButtonGroup": [{"label": "valu", "type": "tertiary"}]  }';

const validJson = '{ "items": [{"label": "count", "type": "numberfield"}] }';

describe('Validate json', function () {
  it('Throw error invalid input', function () {

    expect(() => validateJson(invalidInput)).toThrowError('Invalid input');
  });

  it('Throw error wrong keys', function () {

    expect(() => validateJson(wrongKeys)).toThrowError('Some of the keys are not valid. Valid keys: items, radioButtonGroup, buttons');
  });

  it('Throw error wrong type', function () {

    expect(() => validateJson(wrongTypes)).toThrowError(`type of the field is wrong. use following: ${validItemTypes.join(',')}`);
  });

  it('Throw error wrong button type', function () {

    expect(() => validateJson(wrongButtonTypes)).toThrowError('Button type is wrong, use primary or secondary');
  });

  it('Throw error wrong button props', function () {
    expect(() => validateJson(wrongButtonProps)).toThrowError('Button doesn\'t contain necessary properties, use type and label');
  });

  it('Throw error wrong radio button props', function () {
    expect(() => validateJson(wrongRadioButtonProps)).toThrowError('Button doesn\'t contain necessary properties, use value and label');
  });

  it('Valid json', function () {
    expect(() => validateJson(validJson)).not.toThrow(Error);
  });
});