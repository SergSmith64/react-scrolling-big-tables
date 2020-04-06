import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App({ data, rowHeight, visibleRows }) {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr>{row.map((text, colIndex) => (
                <td>{text}</td>
              ))}</tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}
// __ ПЕРЕНЕС В INDEX.JS ___ 
// function makeTableData(w, h) {
//   return new Array(h).fill(0).map((_, row) => {
//     return new Array(w).fill(0).map((_, col) => {
//       return row * 10 + col;
//     });
//   });
// }

// __ WORK !!! ___
// console.log(makeTableData(10, 10));

export default App;
