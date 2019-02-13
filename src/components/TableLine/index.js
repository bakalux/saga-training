import React from 'react';

const TableLine = (props) => {
  const { id, name, description, expansion, age } = props;
  return (
    <tr>
      <td>{ id }</td>
      <td>{ name }</td>
      <td>{ description }</td>
      <td>{ expansion }</td>
      <td>{ age }</td>
    </tr>
  )
}
