import React from "react";

import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

const createPatchFrom = (value) =>
  PatchEvent.from(value === "" ? unset() : set(Number(value)));

const formatMoney = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
}).format;

export const PriceInput: React.FC = ({
  type,
  value,
  onChange,
  inputComponent,
}) => (
  <>
    <h2>
      {type.title} - {value ? formatMoney(value / 100) : ""}
    </h2>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(event) => onChange(createPatchFrom(event.target.value))}
      ref={inputComponent}
    />
  </>
);

PriceInput.focus = function () {
  this._inputElement.focus();
};

export default PriceInput;
