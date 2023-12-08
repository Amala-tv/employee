

//display form//

const employeeformopen = document.getElementById('Employee-form')
const dele = document.getElementById('del')
function Formopen (){
      
        employeeformopen.classList.add('active');
        document.getElementById('overlay').classList.add('active');
}

document.getElementById('overlay').addEventListener("click",function(){
      Formclose();
})

function Formclose(){
  employeeformopen.classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

//display form end//



//fetch data
function getdata() {

  fetch("http://localhost:3000/employees")
    .then((data) => {
      return data.json()
    }).then((objectData) => {
      let tableData = "";
      let slno = 1
      objectData.forEach((user, index) => {
        tableData += `
        
        <tr>
         <td>#${slnumber(index + 1)}${(index + 1)}</td>
         <td><img src="http://localhost:3000/employees/${user.id}/avatar" alt=profilpic class="rounded-circle mr-2" height=30   width=30> ${user.salutation} ${user.firstName} ${user.lastName}</td>
         <td>${user.email}</td>
         <td>${user.phone}</td>
         <td>${user.gender}</td>
         <td>${user.dob}</td>
         <td>${user.country}</td>
      

        <td class="actions" >
        <button class="delete-edit" onclick="btnsPop(this.nextElementSibling)" ><i class="fa-solid fa-ellipsis"></i></button>
        <div class="employee-data" id="employees-btn">
        <a href="editemployee.html?id=${user.id}"><button type="button" class="btn-controls gap"><i class="fa-regular fa-eye"></i> View Details</button></a>
        <button type="button" class="btn-controls gap" onclick="getuserid('${user.id}'); getuserdata()"><i class="fa-solid fa-pen"></i>Edit</button>
        <button type="button" class="btn-controls" id="del" onclick="deleteData('${user.id}')"><i class="fa-regular fa-trash-can"></i>Delete</button>
        </div>
        </td>
 
        </tr> `

        slno++
      })
      document.getElementById("table-content").innerHTML = tableData;
    })

}
getdata()

// slnumber//

function slnumber(num) {
  if (num < 10) {
    return 0;
  } else {
    return "";
  }
}
//slnumber end//

//avatar images//

let imageFile = document.getElementById("formFile");

let profileimg;

imageFile.addEventListener('change', () => {
  dp = imageFile.files[0]
  console.log(imageFile.files[0]);
})

async function addImage() {
  let avatardata = new FormData()
  avatardata.append("avatar", profileimg)
  try {
    const res = await fetch("http://localhost:3000/employees/" + id + "/avatar", {
      method: "POST",

      body: avatardata
    })
  }

  catch (error) {
    console.log(error);
  }
}
//avatar images end//

//select gender//

const genderSelect = () => {
      const male = document.getElementById('Male');
      const female = document.getElementById('Female');
  
      if (male.checked == true) {

          male.checked = true;
          return male.value;
      } else {

          female.checked = true;      
          return female.value;
       }
   }

// const genderSelect = (gender) => {
//   const male = document.getElementById('Male');
//   const female = document.getElementById('Female');

//   if (gender === true) {
//     male.checked = true;
//   } else {
//     female.checked = true;
//   }
// };
//---gender end---//

// add user//

function adduser() {
  let payload = {};

  payload['salutation'] = document.getElementById('salutation').value
  payload['firstName'] = document.getElementById('firstName').value
  payload['lastName'] = document.getElementById('lastName').value
  payload['email'] = document.getElementById('email').value
  payload['phone'] = document.getElementById('phone').value
  payload['username'] = document.getElementById('username').value
  payload['password'] = document.getElementById('password').value
  payload['dob'] = document.getElementById('dob').value
  payload['gender'] = genderSelect();
  payload['qualifications'] = document.getElementById('qualifications').value
  payload['address'] = document.getElementById('address').value
  payload['country'] = document.getElementById('country').value
  payload['state'] = document.getElementById('state').value
  payload['city'] = document.getElementById('city').value
  payload['pin'] = document.getElementById('pin').value

  fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })

}

// display edit-delete btn//

const btnsPop = (btn) => {
  btn.style.display === "none" ? btn.style.display = "block" : btn.style.display = "none";

  console.log(btn);
}




// document.body.addEventListener('click', (event) => {
//   // Check if the clicked element is not part of any setup
//   if (!event.target.closest('.employee-data') && !event.target.classList.contains('delete-edit')) {
//     // Hide all setups
//     const allSetups = document.querySelectorAll('.employee-data');
//     allSetups.forEach((setup) => {
//      setup.style.display = 'none';
//     });
//   }
// });     
/***end***/

// delete form//

const deleteform = document.getElementById('deleteformbox')
const deleteformdata = document.getElementById('formdelete')

function deleteData(id) {
 
  
  deleteform.style.display = "block";


  deleteformdata.addEventListener("click", function () {
    fetch("http://localhost:3000/employees/" + id, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json"
      },
      // body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((response) => {
        // getData();
      }
      )
  }
  )
}

//close alert box

function closealert() {
  deleteform.style.display = "none";
}

//delete form end//

// edit data
// function geteditData(id, tableData) {
//   var formData = tableData();
//   formData['id'] = editData._id; // get _id from selected user
//   fetch("http://localhost:3000/employees/" + id, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//   }).then((res) => res.json()).then((response) => {
//     // setSuccessMessage(response.message)
//     // clearFormData(); // clear the form field
//     // getData() // reload the table
//     console.log(getdata())
//   })
// }



// edit data
// Function to get data for editing
// function geteditData(id) {
//   fetch(`http://localhost:3000/employees/${id}`)
//     .then((data) => data.json())
//     .then((employee) => {
//       // Call a function to populate the edit form with retrieved data
//       console.log(populateEditForm(employee));
//     });
// }

// // Function to populate the edit form with data
// function populateEditForm(employee) {
//   document.getElementById('editId').value = employee.id;
//   document.getElementById('editSalutation').value = employee.salutation;
//   document.getElementById('editFirstName').value = employee.firstName;
//   document.getElementById('editLastName').value = employee.lastName;
// // Populate other fields similarly

// // Display the edit form
// // document.getElementById('editEmployeeForm').style.display = 'block';
// }



// // Existing function for edit button click
// function editData(id) {
//   // Call the function to get data for editing
//   getEditData(id);
// }

// Function to update employee data
// function geteditData(id) {
//   let payload = {
//     // Retrieve data from the edit form
//     id: document.getElementById('Id').value,
//     salutation: document.getElementById('salutation').value,
//     firstName: document.getElementById('firstName').value,
//     lastName: document.getElementById('lastName').value, 
//     // Retrieve other fields similarly
//   };

//   fetch("http://localhost:3000/employees/" +id, {
//     method: 'GET',
//     headers: {
//       'content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       // Handle the response accordingly
//       console.log(response);
//     });

// }

//edit form//
let userdata;

function getuserid(id){
     userdata = id;
}

async function getuserdata(){
     

  document.getElementById('addbtn').style.display ="none";
  document.getElementById('change-btn').style.display ="block";
  document.getElementById('edit-head').textContent ="Edit Employee";
        try{

          Formopen();
           
             //edit form btns//
                 
           

             //fetch data for edit//

             const res = await fetch("http://localhost:3000/employees/" + userdata)
             const data = await res.json()

             console.log(data);

             document.getElementById("salutation").value = data.salutation;
             document.getElementById("firstName").value =data.firstName;
             document.getElementById("lastName").value = data.lastName;
             document.getElementById("email").value = data.email;
             document.getElementById("phone").value = data.phone;
             document.getElementById("username").value = data.username;
             document.getElementById("password").value = data.password;
             document.getElementById("dob").value = data.dob;
            //  document.getElementById("male").value = employee.male
             genderSelect(data.gender);
             document.getElementById("qualifications").value = data.qualifications;
             document.getElementById("address").value = data.address;
             document.getElementById("country").value = data.country;
             document.getElementById("state").value = data.state;
             document.getElementById("city").value = data.city;
             document.getElementById("pin").value = data.pin;
        }
        catch(error){
              console.log(error)
        }

}

function editEmployeeForm(userdata) {
  fetch("http://localhost:3000/employees/" + userdata)

        .then((res) => res.json())
        .then((response) => {
          // Handle the response accordingly
          console.log(response);
          Formopen()
        });
    
  

}