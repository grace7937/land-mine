let row = 10;
let cell = 10;
let mine = 10;
let data;
let CODE = {

}




function handleExecution() {
    row = parseInt(document.querySelector(".row").value);
    cell = parseInt(document.querySelector(".cell").value);
    mine = parseInt(document.querySelector(".mine").value);
    

    data = Array(row * cell).fill().map((arr,i) => {
        return i;
    });

    let maxNum = 25;
    let minNum = 10;

    console.log(Math.floor(Math.random() * (maxNum - minNum +1) + minNum));
}







// 1.배열을 25개 만든다.





//.1-25 중 램덤으로 값을 5개 뽑아낸다.

//



