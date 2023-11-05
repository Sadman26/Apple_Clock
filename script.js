let x = document.querySelector('h1');
let btn = document.querySelector('button');
let fun = () => {
    x.innerHTML = new Date().toLocaleTimeString();
}
setInterval(fun, 1000);
let arr = [];
btn.addEventListener('click',
    () => {
        arr.push(new Date().toLocaleTimeString());
        let xx = 0;
        btn.innerHTML = "SAVED " + arr.length;
    }
)