const id = new URLSearchParams(window.location.search).get("id")
console.log(id)

const URL = id ? "https://striveschool-api.herokuapp.com/api/product/" + id : "https://striveschool-api.herokuapp.com/api/product/";
console.log(URL)

const method = id ? "PUT" : "POST"
console.log(method)

if (id) {
    fetch(URL, {
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
            document.getElementById("nome").value = product.name;
            document.getElementById("descrizione").value = product.description;
            document.getElementById("brand").value = product.brand;
            document.getElementById("imageUrl").value = product.imageUrl;
            document.getElementById("prezzo").value = product.price;
            console.log(product)
        })

        .catch(error => console.log(error))
}

const bSubmit = () => {
    const nuovoTelefono = {
        name: document.getElementById("nome").value,
        description: document.getElementById("descrizione").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("prezzo").value
    }

    console.log(nuovoTelefono)
    fetch(URL, {
        method: method,
        body: JSON.stringify(nuovoTelefono),
        headers : {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDE5NjA0NDEsImV4cCI6MTcwMzE3MDA0MX0.mkOaiJiCVzsiORZDbriGdrjbPDqrHII0Juv-Tccauas"
        }
    })

    .then(resp => resp.json())
    .then(product => {
        console.log(product)
    })

    form.reset()

    .catch(error => console.log(error))
}

window.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector("button[type='submit']")
    
    if (id) {
        submit.classList.remove("btn-primary")
        submit.classList.add("btn-warning", "fw-bold")
        submit.innerText = "Modifica Card Telefono"
    }
})

const reset = () => {
    document.getElementById("nome").value = "",
    document.getElementById("descrizione").value = "",
    document.getElementById("brand").value = "",
    document.getElementById("imageUrl").value = "",
    document.getElementById("prezzo").value = ""
}

const handleDelete = () => {

    fetch(URL, {
        method: "DELETE",
        headers : {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDE5NjA0NDEsImV4cCI6MTcwMzE3MDA0MX0.mkOaiJiCVzsiORZDbriGdrjbPDqrHII0Juv-Tccauas"
        }
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
        })
        .then(deletedObj => {
            console.log(deletedObj)

            if(id){
                window.alert("Hai eliminato la Card del telefono")
                setTimeout(() => {window.location.assign("./index.html")}, 1000)
            }
        })
}
