let count = 0;
// Increment function where the counter will increase.
function increment (){
    count++;
    console.log(count);
    document.querySelector("h1").textContent = count;
}
// Decrement function where the counter will decrease.
function decrement (){
    count--;
    console.log(count);
    document.querySelector("h1").textContent = count;
}
// Reset function where the counter will reset and the value will again start from 0.
function reset (){
    count = 0;
    console.log(count);
    document.querySelector("h1").textContent = count;
}