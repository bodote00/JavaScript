"use strict"

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  const studentList = document.getElementById("students-list")
  const agbInput = document.getElementById("agbInput")

  const liElements = document.querySelectorAll(".list-group-item")
  const removeElement = (liElement) => {
    liElement.remove()
  }

  for (const liElement of liElements) {
    liElement.addEventListener("click", () => {
      removeElement(liElement)
    })
  }

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()

    console.log("Agb Input: ", agbInput.checked)

    if (agbInput.checked === false) {
      alert("Lese mal AGB!")
      return
    }

    const text = nameInput.value

    if (text === "") {
      return
    }

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode(text))

    const liElement = document.createElement("li")
    liElement.appendChild(strongElement)
    liElement.classList.add("list-group-item")

    liElement.addEventListener("click", () => {
      removeElement(liElement)
    })

    studentList.appendChild(liElement)

    nameInput.value = ""
  })

  nameInput.addEventListener("keydown", (event) => {
    if (event.keyCode === KEY_ENTER) {
      alert("Enter wurde gepresst.")
    }
  })

})