const URL = "https://striveschool-api.herokuapp.com/api/product/"

const parametro = new URLSearchParams(window.location.search)
const id = parametro.get("id")


fetch(URL + id, {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDE5NjA0NDEsImV4cCI6MTcwMzE3MDA0MX0.mkOaiJiCVzsiORZDbriGdrjbPDqrHII0Juv-Tccauas"
    }
})

    .then(responseObj => {
        if (responseObj.ok) {
            return responseObj.json()
        }
    })

    .then(product => {

        const dettagli = document.getElementById("container")
        console.log(product)

        const row = document.createElement("div")
        row.classList.add("row")

        const col1 = document.createElement("div")
        col1.classList.add("col-4")

        const col2 = document.createElement("div")
        col2.classList.add("col-4")

        const col3 = document.createElement("div")
        col3.classList.add("col-4")

        const list = document.createElement("div")

        const card = document.createElement("div")
        card.classList.add("card", "mb-4", "w-100", "rounded-5", "overflow-hidden")
        card.style = "width:350px; height:auto;"

        const img = document.createElement("img")
        img.style = "height: 400px"
        img.classList.add("card-img-top", "w-100")
        img.src = product.imageUrl

        const body = document.createElement("div")
        body.classList.add("card-body")

        const h5 = document.createElement("h5")
        h5.classList.add("card-title")
        h5.innerText = product.name

        const prezzo = document.createElement("p")
        prezzo.classList.add("card-text")
        prezzo.innerText = product.price+",00 €"

        const descrizione = document.createElement("p")
        descrizione.classList.add("card-text")
        descrizione.innerText = product.description

        const flex = document.createElement("div")
        flex.classList.add("d-flex", "justify-content-end")

        const modifica = document.createElement("a")
        modifica.href = "./backoffice.html?id="+product._id
        modifica.classList.add("btn", "btn-warning", "fw-bold")
        modifica.innerText = "Modifica"

        card.appendChild(img)
        body.appendChild(h5)
        body.appendChild(prezzo)
        body.appendChild(descrizione)
        body.appendChild(flex)
        flex.appendChild(modifica)
        card.appendChild(body)
        list.appendChild(card)
        col2.appendChild(list)
        row.appendChild(col1)
        row.appendChild(col2)
        row.appendChild(col3)
        dettagli.appendChild(row)

    })
    
    .catch(error => console.log(error))