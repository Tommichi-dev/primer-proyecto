let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let run = document.getElementById("run")
let formulario = document.getElementById("js-formClients")
let contador = 0
let bodyTable = document.getElementById("js-bodyTable")
let registro = ""

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Ingresando a función")

  let edadUsuario = parseInt(edad.value)
  if (edadUsuario >= 20) {
    contador++

    registro += `<tr>
                <th scope="row">${contador}</th>
                <td>${nombre.value}</td>
                <td>${apellido.value}</td>
                <td>${edad.value}</td>
                <td>${run.value}</td>
              </tr>

    `
    bodyTable.innerHTML = registro
    formulario.reset()
  } else {
    alert("Usuario no cumple la mayoria de edad (20 anos)")

  }
})
