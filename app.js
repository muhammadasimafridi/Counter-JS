let count = 0;
// Increment function where the counter will increase.
function increment (){
    count++;    // Increment
    console.log(count); // Output to the console.
    document.querySelector("h1").textContent = count;
}
// Decrement function where the counter will decrease.
function decrement (){
    count--;    // Decrement
    console.log(count); // Output to the console.
    document.querySelector("h1").textContent = count;
}
// Reset function where the counter will reset and the value will again start from 0.
function reset (){
    count = 0;    // Reset
    console.log(count); // Output to the console.
    document.querySelector("h1").textContent = count;
}