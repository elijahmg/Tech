import React, { FC } from 'react';

const Manual: FC = () => {
  return (
    <div className="flex flex-wrap">
      <p className="mb-3">
        This application allow you to create forms.
        Items is an array of possible fields.
        Supported types are <i>numberfield, textfield, textarea, checkbox, datefield</i>
      </p>

      <p className="mb-3">
        Property buttons can be used to set buttons.
        Buttons must have <b>type</b> property, <i>primary</i> or <i>secondary</i>.
      </p>

      <p className="mb-3">
        There is also support for RadioButtons
      </p>

      <p className="mb-3">To see complete example press "Give me a hint" on config tab</p>
    </div>
  )
};

export default Manual;