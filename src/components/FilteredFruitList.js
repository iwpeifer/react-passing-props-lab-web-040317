import React from 'react';

export default (props) => {
  const list = !props.filter ? props.items : props.items.filter(i => i.fruit_type === props.filter);
  // debugger
  return (
    <ul className="fruit-list">
    {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}
