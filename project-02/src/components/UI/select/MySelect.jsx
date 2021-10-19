import React from 'react'

export default function MySelect({ options, defaultOption, value, onChange }) {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">{ defaultOption }</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          { option.name }
        </option>
      )}
    </select>
  )
}
