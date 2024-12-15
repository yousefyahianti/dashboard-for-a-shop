const AddUserBtn = document.querySelector("#AddUserBtn");
const blure = document.querySelector("#blur");
const AddUser = document.querySelector("#AddUser");
const closeBtn = document.querySelector("#close");
const resetBtn = document.querySelector("#reset");
const inputs = document.querySelectorAll("input");
const WarningMassege = document.querySelector("#WarningMassege");
const deletebtn02 = document.querySelector("#deletebtn02");
const closeWarningMassege = document.querySelector("#closeWarningMassege");

const AddUserBtn02 = document.querySelector("#AddUserBtn02");
const userTableBody = document.querySelector("#userTableBody");

AddUserBtn.addEventListener("click", () => {
  blure.classList.remove("remove");
  blure.classList.add("blur");
  AddUser.classList.remove("remove");
  document.getElementById("AddUserBtn02").innerHTML = "Add";

});

AddUserBtn02.addEventListener("click", () => {
  blure.classList.add("remove");
  blure.classList.remove("blur");
  AddUser.classList.add("remove");
});

closeBtn.addEventListener("click", () => {
  blure.classList.add("remove");
  blure.classList.remove("blur");
  AddUser.classList.add("remove");
});

resetBtn.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

AddUserBtn02.addEventListener("click", () => {
  const id = document.getElementById("ID").value.trim();
  const Name = document.getElementById("Name").value.trim();
  const Description = document.getElementById("Description").value.trim();
  const salary = document.getElementById("salary").value.trim();

  if (id && Name && Description && salary) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${Name}</td>
        <td>${Description}</td>
        <td>${salary + " $"}</td>
        <td>${""}</td>
        <td>
          <button class="btn btn-warning edit-btn">Edit</button>
        </td>
        <td>
          <button class="btn btn-danger delete-btn">Delete</button>
        </td>
        
    `;

    userTableBody.appendChild(newRow);

    const editBtn = newRow.querySelector(".edit-btn");
    const deleteBtn = newRow.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => {
      document.getElementById("ID").value = id;
      document.getElementById("Name").value = Name;
      document.getElementById("Description").value = Description;
      document.getElementById("salary").value = salary;
      document.getElementById("AddUserBtn02").innerHTML = "Update";
      AddUserBtn02.addEventListener("click", () =>{ 
      
        newRow.remove();
      
      });
      

      blure.classList.remove("remove");
      blure.classList.add("blur");
      AddUser.classList.remove("remove");
    });

    deleteBtn.addEventListener("click", () => {
      blure.classList.remove("remove");
      blure.classList.add("blur");
      WarningMassege.classList.remove("remove");
      
      deletebtn02.addEventListener("click", () => {
        newRow.classList.remove();
        blure.classList.add("remove");
        blure.classList.remove("blur");
        WarningMassege.classList.add("remove");
        newRow.remove();
      });

      closeWarningMassege.addEventListener("click", () => {
        newRow.classList.remove();
        blure.classList.add("remove");
        blure.classList.remove("blur");
        WarningMassege.classList.add("remove");
      });
    });






    document.getElementById("ID").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("salary").value = "";
  } else {
    alert("Please fill in all fields!");
  }
});

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        blure.classList.add("remove");
        blure.classList.remove("blur");
        AddUser.classList.add("remove");
        WarningMassege.classList.add("remove");
      }
    });