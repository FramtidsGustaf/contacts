class Person {
  constructor(firstName, lastName, email, bool) {
    this.firstName = firstName.value;
    this.lastName = lastName.value;
    this.email = email.value;
    this.bool = bool;

    if (bool) {
      this.addPerson(this.firstName, this.lastName, this.email);
    } else {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          this.rndFirst = data.results[0].name.first;
          this.rndLast = data.results[0].name.last;
          this.rndEmail = data.results[0].email;
          this.addPerson(this.rndFirst, this.rndLast, this.rndEmail);
        });
    }
  }
  addPerson(firstName, lastName, email) {
    let parent = document.getElementById("listContainer");
    let child = document.createElement("tr");
    let number = document.createElement("td");
    let personFirstName = document.createElement("td");
    let personLastName = document.createElement("td");
    let personEmail = document.createElement("td");
    let personEraseButton = document.createElement("button");
    personEraseButton.innerHTML = "Ta bort";

    personEraseButton.addEventListener("click", function (e) {
      child.remove();
    });

    personFirstName.textContent = firstName;
    personLastName.textContent = lastName;
    personEmail.textContent = email;

    parent.appendChild(child);
    child.appendChild(number);
    child.appendChild(personFirstName);
    child.appendChild(personLastName);
    child.appendChild(personEmail);
    child.appendChild(personEraseButton);
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  let button = document.getElementById("add_button");
  let firstName = document.getElementById("first_name");
  let lastName = document.getElementById("last_name");
  let email = document.getElementById("email");
  let randomButton = document.getElementById("random_person");
  let rndBool;

  button.addEventListener("click", function () {
    rndBool = true;
    new Person(firstName, lastName, email, rndBool);
  });

  randomButton.addEventListener("click", function () {
    rndBool = false;
    new Person(firstName, lastName, email, rndBool);
  });
});
