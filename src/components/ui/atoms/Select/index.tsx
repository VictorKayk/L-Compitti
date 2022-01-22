import { ReactElement } from 'react';

interface ISelect {
  handleChange: (value: string) => void;
  defaultValue: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function Select({
  handleChange,
  defaultValue,
  options,
}: ISelect): ReactElement {
  return (
    <select
      onChange={({ target: { value } }) => handleChange(value)}
      defaultValue={defaultValue}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
