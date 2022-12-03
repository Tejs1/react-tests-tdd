import React from "react";

export default function StarbucksInput({ name, value, onChange, error }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.currentTarget.value);
        }}
      />
      {error && <p>{error}</p>}
    </>
  );
}
