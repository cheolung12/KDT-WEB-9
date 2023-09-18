import React from 'react';

export default function Prac2() {
  const users = [
    { id: 1, name: 'John', age: 25, vip: true },
    { id: 2, name: 'Jane', age: 19, vip: false },
    { id: 3, name: 'Alice', age: 30, vip: true },
    { id: 4, name: 'Bob', age: 18, vip: false },
    { id: 5, name: 'Charlie', age: 35, vip: true },
  ];
  const filteredData = users.filter((el) => el.vip).map((el) => el.name);

  let bool = true;

  return (
    <div>
      {bool && filteredData.map((e, idx) => <div key={idx}>- {e}</div>)}
    </div>
  );
}
