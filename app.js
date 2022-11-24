const section_counter = document.querySelector("#section__counter");
const counters = document.querySelectorAll(".numbers");

let speed = 200;

counters.forEach((counter, index) => {
    function updateCounter(){
        const targetNumber = +counter.dataset.target;
        let initialNumber = +counter.innerText;
        let incrementPerCount = targetNumber / speed;
        if(initialNumber < targetNumber){
           counter.innerText = Math.ceil(initialNumber + incrementPerCount); 
           setTimeout(updateCounter, 10);
        }
    }
    updateCounter();
});