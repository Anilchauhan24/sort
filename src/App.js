import React from 'react';
import { useState, useEffect } from 'react';
const App = () => {
  const dummyData = [
    { id: 1, name: 'Anil A', price: 12, category: 'Electronics' },
    { id: 2, name: 'Anil B', price: 18, category: 'Cllothing' },
    { id: 3, name: 'Anil C', price: 120, category: 'Docting' },
    { id: 4, name: 'Anil D', price: 122, category: 'Technologu' },
    { id: 5, name: 'Anil E', price: 123, category: 'Electronics' },
    { id: 6, name: 'Anil F', price: 128, category: 'Electronics' },
  ];
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState([]);
  const [sorting, setSorting] = useState('');

  useEffect(() => {
    const newData = dummyData;
    console.log(newData);
    setData(newData);
    setSortOrder(newData);
  }, []);
  const handleSort = () => {
    const getData = sorting === 'asc' ? 'des' : 'asc';
    setSorting(getData);

    const sortedValue = [...data].sort((a, b) => {
      const categoryA = a.category.toUpperCase();
      const categoryB = b.category.toUpperCase();
      if (getData === 'asc') {
        return categoryA.localeCompare(categoryB);
      } else {
        return categoryB.localeCompare(categoryA);
      }
    });
    setSortOrder(sortedValue);
  };

  return (
    <div>
      <table onClick={handleSort}>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>category</th>
            <th>ID</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortOrder.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
