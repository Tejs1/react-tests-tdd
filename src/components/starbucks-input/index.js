import React from "react";

export default function StarbucksInput({ name, value, onChange, error }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        value={value}
        onChange={(e) => (onChange ? onChange(e.currentTarget.value) : null)}
      />
      {error && <p>{error}</p>}
    </>
  );
}
