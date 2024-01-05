import React from 'react';
import { Fragment } from 'react';

export default function TextInput({
  labelDescription = "Descrição",
  inputValue = "Valor padrão",
  onInputChange = null,
  id,
  labelName,
  autoFocus = false
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <Fragment>
      <div className="flex flex-col my-4">
        <label htmlFor={labelName} className="text-sm">
          {labelDescription}
        </label>
        <input
          type="text"
          className="p-1"
          id={id}
          value={inputValue}
          onChange={handleInputChange}
          autoFocus={autoFocus}
        />
      </div>
    </Fragment>
  );
}