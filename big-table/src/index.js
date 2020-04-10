import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function App({ data, rowHeight, visibleRows }) {

  const [start, setStart] = React.useState(1);

  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.lenght - (start + visibleRows));
  }

  return (
    <div style={{ height: rowHeight * visibleRows + 3, overflow: 'auto' }}>
      <div className="App">
        {/* <header className="App-header"> */}
        <div style={{ height: getTopHeight() }} />

          <table>
            <tbody>
              {data.slice(start, start + visibleRows).map((row, rowIndex) => (
                <tr
                  style={{ height: rowHeight }} 
                  key={rowIndex}>{row.map((text, colIndex) => (
                  <td key={'' + rowIndex + colIndex}>{text}</td>
                ))}</tr>
              ))}
            </tbody>
          </table>

          <div style={{ height: getTopHeight() }} />
        {/* </header> */}
      </div>
    </div>
  );
}

function makeTableData(w, h) {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => {
      return row * 10 + col;
    });
  });
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
