function addPerson() {
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var genderInput = document.getElementById("gender");
    var birthdayInput = document.getElementById("birthday");
    var tableBody = document.getElementById("peopleTableBody");
    
    var row = tableBody.insertRow();
    var nameCell = row.insertCell(0);
    var surnameCell = row.insertCell(1);
    var genderCell = row.insertCell(2);
    var birthdayCell = row.insertCell(3);
    
    nameCell.textContent = nameInput.value;
    surnameCell.textContent = surnameInput.value;
    genderCell.textContent = genderInput.value;
    birthdayCell.textContent = birthdayInput.value;
    
    nameInput.value = "";
    surnameInput.value = "";
    genderInput.value = "";
    birthdayInput.value = "";
  }
  