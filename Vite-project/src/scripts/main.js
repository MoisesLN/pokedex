// https://pokeapi.co/api/v2/pokemon/{id or name}/
// https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif
// console.log(promise)
// promise
//     .then(res => {
//         console.log(res)
//         return res.json()
//     })
//     .then(data => console.log(data))

/* HTML DA DIV
<div class="id">Nº ID</div>
    <div class="name">name</div>
    <div class="info">
        <div class="tags">
            <div class="type">type</div>
        </div>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" alt="Imagem do Pokemón">
</div> 
*/


// SCRIPT INUSADO; o código js do fetch está em pokecontainer.vue
document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById('container')
    
    let url ='https://pokeapi.co/api/v2/pokemon/';
    let id = 1
    let ENDPOINT = url + id;
    
    console.log(ENDPOINT);
    
    let promise = fetch(ENDPOINT);
    getData(ENDPOINT);
    
    
    async function getData(endpoint) {
        try{
            let res = await fetch(endpoint)
            console.log(res);
            let data = await res.json()
            console.log(data);
    
            pokename = data.name;
            console.log(pokename)
            id = data.id
            console.log(id)
            
            // Pegar os tipos do Pokemon
            tipos = []
            for(typedata in data.types){
                console.log(data.types[typedata].type.name);
                tipos.push(data.types[typedata].type.name);
            }
            console.log(tipos)
    
        } catch (error){
            console.log(error);
        }
    }
    
    async function loadPokemons(){
        container.innerHTML = '';
        for(let i = 1; i < 650; i++){
            let EP = url + i
            data = await getData(EP)
    
            let pokediv = document.createElement("div");
            pokediv.classList.add("card")
    
            // Fazer lista dos tipos
            listatipos = ''
            for (tipo in tipos){
                listatipos += `<div class="${tipos[tipo]}"> ${tipos[tipo]} </div>`
            }
    
            pokediv.innerHTML = 
            `
            <div class="id">Nº ${id}</div>
                <div class="name">${pokename}</div>
                <div class="info">
                    <div class="tags">
                        ${listatipos}
                    </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" alt="Imagem do Pokemón">
            </div>
            `;
            container.appendChild(pokediv)
        }
    }
    
    window.onload = async function (){
        await loadPokemons();
    }
    
    // Filtrar na barra de pesquisa e tipo
    const search = document.getElementById('search');
    const searchbutton = document.getElementById('arrow');
    const typeinput = document.getElementById('typesort');
    let typeValue = typeinput.value;
    
    // Barra de pesquisa
    search.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            filtrar(typeValue);
        }
    })
    searchbutton.addEventListener("click", () => {
        filtrar(typeValue);
    })
    
    // Filtrar por tipo do pokemon
    typeinput.addEventListener("change", () => {
        typeValue = typeinput.value;
        console.log("changed");
        console.log(typeValue);
        filtrar(typeValue);
    })
    
    async function filtrar(type){
        if(type == "all"){
            container.innerHTML = '';
            let valor = search.value
            for(let i = 1; i < 650; i++){
                let EP = url + i
                data = await getData(EP)
                if (valor == i || pokename.includes(valor.toLowerCase())) {
                    let pokediv = document.createElement("div");
                    pokediv.classList.add("card")
    
                    // Fazer lista dos tipos
                    listatipos = ''
                    for (tipo in tipos){
                        listatipos += `<div class="${tipos[tipo]}"> ${tipos[tipo]} </div>`
                    }
    
                    pokediv.innerHTML = 
                    `
                    <div class="id">Nº ${id}</div>
                        <div class="name">${pokename}</div>
                        <div class="info">
                            <div class="tags">
                                ${listatipos}
                            </div>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" alt="Imagem do Pokemón">
                    </div>
                    `;
                    container.appendChild(pokediv)
                }
                
            }
            console.log(valor);
        } else {
            container.innerHTML = '';
            let valor = search.value
            for(let i = 1; i < 650; i++){
                let EP = url + i
                data = await getData(EP)
    
                // Checar se nome ou id batem
                if (valor == i || pokename.includes(valor.toLowerCase())) {
                    // Checar por tipo
                    if (tipos.includes(type)) {
                        let pokediv = document.createElement("div");
                        pokediv.classList.add("card")
    
                        // Fazer lista dos tipos
                        listatipos = ''
                        for (tipo in tipos){
                            listatipos += `<div class="${tipos[tipo]}"> ${tipos[tipo]} </div>`
                        }
    
                        pokediv.innerHTML = 
                        `
                        <div class="id">Nº ${id}</div>
                            <div class="name">${pokename}</div>
                            <div class="info">
                                <div class="tags">
                                    ${listatipos}
                                </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" alt="Imagem do Pokemón">
                        </div>
                        `;
                        container.appendChild(pokediv)
                    }
                    
                }
                
            }
            console.log(valor);
        }
        
    }
})