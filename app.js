window.onload = function () {
    let games = document.getElementsByName("game")
    document.onclick = function (event) {
        //console.log(event.target.id)
        let id = event.target.id
        let elements = document.querySelectorAll("."+id)

        for(let i=0; i<elements.length; i++){
            elements[i].style.display = "inline-block"
        }
        for(let i=0; i<games.length; i++){
            if (games[i].className != id)
            games[i].style.display = "none"
        }
        
    }
}