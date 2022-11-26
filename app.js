const section_counter = document.querySelector("#section__counter");
const counters = document.querySelectorAll(".numbers");

function runCounter(){
    counters.forEach(counter => {
        counter.innerText = 0;
        let target = +counter.dataset.target;
        let step = target / 100;
        
        let countIt = function(){
            let displayedCount = +counter.innerText;
            if(displayedCount < target){
                counter.innerText = Math.ceil(displayedCount + step);
                setTimeout(countIt, 10);
            } else{
                counter.innerText = target;
            }
        }
        countIt();
    });
}
runCounter();

let options = {
    rootMargin: '0px 0px 0px 0px',
  threshold: 1.0
}

let sectionObserver = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
        runCounter();
    }
}, options);

sectionObserver.observe(section_counter);