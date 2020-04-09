import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function makeTableData(w, h) {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => {
      return row * 10 + col;
    });
  });
}

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

ReactDOM.render(
  <React.StrictMode>
    <App
      data={makeTableData(10, 10)}
      rowHeight={40}
      visibleRows={3}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
