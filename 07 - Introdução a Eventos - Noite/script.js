function exemplo1 () {
    const button1 = document.querySelector("#button-1")

    button1.addEventListener("click", (event) => {
        event.stopPropagation()
        console.log("Acionei o botão 1")
        // console.log(event)
    })

    const button2 = document.querySelector("#button-2")

    button2.addEventListener("click", (event) => {
        console.log("Acionei o botão 2")
    })

    const section = document.querySelector(".section-example")

    section.addEventListener("click", (event) => {
        console.log("Cliquei na seção")
        // console.log(event);
        
    })

    const div = document.querySelector(".btn__container")

    div.addEventListener("click", (event) => {
        console.log("Cliquei na div")
        
    })

}

exemplo1()

function exemplo2 () {
    const botaoEsconder = document.querySelector("#button-hide")
    const botaoMostrar = document.querySelector("#button-show")
    const paragrafoExemplo2 = document.querySelector("#paragraph-2")

    botaoEsconder.addEventListener("click", () => {
        console.log("Esconder acionado")
        // paragrafoExemplo2.style.display = "none"
        // paragrafoExemplo2.style.opacity = 0
        paragrafoExemplo2.classList.add("hidden")

    })

    botaoMostrar.addEventListener("click", () => {
        console.log("Mostrar acionado")
        // paragrafoExemplo2.style.opacity = 1
        paragrafoExemplo2.classList.remove("hidden")
        
    })
}

exemplo2()

function exemplo3 () {
    const liItems = document.querySelectorAll(".tech__item")

    liItems.forEach((itemAtual) => {
        itemAtual.addEventListener("click", () => {
            console.log("Evento do li")
            const inputCheckbox = itemAtual.querySelector("input")
            
            inputCheckbox.checked = !inputCheckbox.checked
        })
    })

    const spanItems = document.querySelectorAll(".tech__description")

    spanItems.forEach((spanAtual) => {
        spanAtual.addEventListener('click', (event) => {
            event.stopPropagation()
        })
    })

}

exemplo3()

function exemplo4 () {
    const formContainer = document.querySelector(".form__container")
    const btnEnviar = document.querySelector(".submit__button")
    const btnCancelar = document.querySelector(".cancel__button")

    const inputNome = document.querySelector("input[name='first-name']")
    const inputSobrenome = document.querySelector("input[name='last-name']")
    const inputPassword = document.querySelector("input[name='password']")
   

    formContainer.addEventListener('click', (event) => {
        // console.log("Acionei o botão enviar")
        event.preventDefault()
        console.dir(inputPassword)
    })
}

exemplo4()