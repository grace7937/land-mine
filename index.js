let row = 10;
let cell = 10;
let mine = 10;
let data;
let CODE = {};
let tableData;

const handleExecution = () => {
  row = parseInt(document.querySelector(".row").value);
  cell = parseInt(document.querySelector(".cell").value);
  mine = parseInt(document.querySelector(".mine").value);

  makeTable();
  makeMine();
  render();
};

const makeTable = () => {
  tableData = Array(row * cell).fill().map((arr, i) => {
      return {
          index: i, status: "0000" };
    });
  console.log(tableData);
};

const makeMine = () => {
  let maxNum = row * cell;
  let minNum = 1;
  let randomMine = [];

  while (randomMine.length < mine) {
    const mineData = Math.floor(Math.random() * (maxNum - minNum + 1));
    if (randomMine.indexOf(mineData) === -1) {
      randomMine.push(mineData);
    }
  }

  const viewData = tableData.map((data,i) => {
      let code = "0000";
      randomMine.forEach((mine, i) => {
         if(data.index == mine) {
            code = "1111";
         }
      })
      return {...data, status: code } 
  })
};

const render = () => {
    const table = document.querySelector("#tbody");

    while ( table.hasChildNodes() ) {
        table.removeChild( table.firstChild ); 
    }

    for(let i=0; i < row; i++) {
        const tr = document.createElement('tr');
        for(let i=0; i < cell; i++) {
            const td = document.createElement('td');
            td.innerText = "";
            tr.append(td);
        }
        table.append(tr);
    }

    const coverTable = document.querySelector("#tbody_cover");

    while ( coverTable.hasChildNodes() ) {
        coverTable.removeChild( coverTable.firstChild ); 
    }
    for(let i=0; i < row; i++) {
        const tr = document.createElement('tr');
        for(let i=0; i < cell; i++) {
            const td = document.createElement('td');
            td.innerText = "";
            tr.append(td);
        }
        coverTable.append(tr);
    }

}



