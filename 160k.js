const luv = () => {

    let root = document.querySelector('#root');

    for (let i = 1; i <= 160; i++) {
        root.insertAdjacentHTML("beforeend", `<div> ${i} K</div>`);
        
    }
};

window.addEventListener('load', luv);