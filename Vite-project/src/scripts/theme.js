const themescontainer = document.getElementById('themes');
const themeslist = Array.from(themescontainer.children);
const body = document.body;
fire = themeslist[0]
water = themeslist[1]
leaf = themeslist[2]

themeslist.forEach((theme, index) => {

    theme.addEventListener("click", () => {
        // Ajeitar classe dos botões
        themeslist.forEach(t => t.classList.remove("active"));
        theme.classList.add("active");
        
        // Classe no body
        const themes = ["fire", "water", "leaf"]
        body.classList.remove("fire", "water", "leaf")
        body.classList.add(themes[index])

        // Salvar no navegador
        localStorage.clear()
        localStorage.setItem("theme", themes[index])
    })
});


window.addEventListener("load", () => {
        let savedTheme = localStorage.getItem("theme");
        console.log("carregou")
        if (savedTheme) {
            body.classList.remove("fire", "water", "leaf");
            body.classList.add(savedTheme);

            switch (savedTheme){
                
                case "fire":
                    themeslist[0].classList.add("active")
                    break;

                case "water":
                    themeslist[1].classList.add("active")
                    break;

                case "leaf":
                    themeslist[2].classList.add("active")
                    break;
            }
        } else {
            body.classList.add("fire")
            themeslist[0].classList.add("active")
        }
})

