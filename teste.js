const btn = document.querySelector(".btn")
const conteiner = document.querySelector(".conteiner")
const body = document.querySelector("body")

/*btn.addEventListener("click", () => {

    if (conteiner.classList.value === "conteiner actived" ) {

        conteiner.classList.remove("actived")

    }
    else
    {
        conteiner.classList.add("actived")
    }
})*/

setInterval(()=>{
    
    if (conteiner.classList.value === "conteiner actived" ) {
    
        conteiner.classList.remove("actived")
    
    }
    else
    {
        conteiner.classList.add("actived")
    }

}, 1000);


