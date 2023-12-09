const URL = "https://striveschool-api.herokuapp.com/api/product/"

const headers = "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDE5NjA0NDEsImV4cCI6MTcwMzE3MDA0MX0.mkOaiJiCVzsiORZDbriGdrjbPDqrHII0Juv-Tccauas"

fetch(URL, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDE5NjA0NDEsImV4cCI6MTcwMzE3MDA0MX0.mkOaiJiCVzsiORZDbriGdrjbPDqrHII0Juv-Tccauas"
    }
})
.then(responseObj => {
    if (responseObj.ok) {
        return responseObj.json()
    }
})

.then(products => {

    const row = document.getElementById("row")
    console.log(products)

    products.forEach(product => {
        console.log(product)

        const col = document.createElement("div")
        col.classList.add("col-12", "col-sm-6", "col-lg-4")

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
        h5.innerText = product.brand + " - " + product.name 

        const prezzo = document.createElement("p")
        prezzo.classList.add("card-text")
        prezzo.innerText = product.price+",00 €"

        const descrizione = document.createElement("p")
        descrizione.classList.add("card-text")
        descrizione.innerText = product.description

        const flex = document.createElement("div")
        flex.classList.add("d-flex", "justify-content-end")

        const dettagli = document.createElement("a")
        dettagli.href = "./details.html?id="+product._id
        dettagli.classList.add("btn", "btn-primary", "fw-bold")
        dettagli.innerText = "Scopri di più"

        card.appendChild(img)
        body.appendChild(h5)
        body.appendChild(prezzo)
        body.appendChild(descrizione)
        body.appendChild(flex)
        flex.appendChild(dettagli)
        card.appendChild(body)
        list.appendChild(card)
        col.appendChild(list)
        row.appendChild(col)

    })
})

    .catch(error => console.log(error))