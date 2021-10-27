const row = 10;
const cell = 10;
const mine = 10;
const CODE = {

}

let data;



function handleExecution() {
    // const row = parseInt(document.querySelector(".row").value);
    // const cell = parseInt(document.querySelector(".cell").value);
    // const mine = parseInt(document.querySelector(".mine").value);
    
    console.log(row, cell, mine);
    const array = Array(row * cell).fill().map((arr,i) => {
        return i;
    })

    console.log(array);
    
}



// 1.배열을 25개 만든다.



