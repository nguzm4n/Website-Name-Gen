function dominio() {
    let pronombre = ["The", "Our", "Their", "Your", "Its" ]
    let adjetivo = ["Amazing", "Incredible", "Fantastic", "Mindblowing", "Outstanding"]
    let sustantivo = ["Travel", "Performance", "Answer", "Fluke", "Music" ]
    let extension =[".Net", ".Com", ".Cl", ".Tv", ".Org"]
    let name = []
    let all = [pronombre, adjetivo, sustantivo, extension]
    
    let website = document.querySelector('p')
    for(let i = 0; i < all.length; i++){
    let random = Math.floor(Math.random() * 5)
       name += all[i][random]
            }
    website.textContent = name
}
    
    


dominio()