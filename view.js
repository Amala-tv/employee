
//fetch data from server//
let url = new URLSearchParams(document.location.search);
let employeeid  = url.get("id")
console.log(employeeid)


let UserViewImg = document.getElementById('view-img')
// let UserViewSalutation = document.getElementById('view-salutation')
// let UserViewFirstName = document.getElementById('view-firstname')
let UserViewFullName = document.getElementById('view-fullname')
let UserViewEmail = document.getElementById('view-email')
let UserViewGender = document.getElementById('view-gender')
let UserViewAge = document.getElementById('view-age')
let UserViewDob = document.getElementById('view-dob')
let UserViewPhone = document.getElementById('view-phone')
let UserViewQualification = document.getElementById('view-qualification')
let UserViewAddress = document.getElementById('view-address')
let UserViewUserName = document.getElementById('view-username')



fetch("http://localhost:3000/employees/" +employeeid)
.then((employeedata) => {
    return employeedata.json()


}).then((userdatas) =>{
    
    // UserViewImg.src = userdatas.view-img//
    // UserViewSalutation.innerHTML = userdatas.salutation
    UserViewFullName.innerHTML = userdatas.salutation+" " +userdatas.firstName+" "+userdatas.lastName+" "
    // UserViewLastName.innerHTML = userdatas.lastname
    UserViewEmail.innerHTML = userdatas.email
    UserViewGender.innerHTML = userdatas.gender
    UserViewAge.innerHTML = userdatas.age
    UserViewDob.innerHTML  = userdatas.dob
    UserViewPhone.innerHTML = userdatas.phone
    UserViewQualification.innerHTML = userdatas.qualifications
    UserViewAddress.innerHTML = userdatas.address
    UserViewUserName.innerHTML = userdatas.username
    UserViewImg.src = "http://localhost:3000/employees/"+employeeid+"/avatar";
})

//calculate age//

//employee edit form open//
