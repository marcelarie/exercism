function activateCount() {
    console.log('activateCount RUNNING')
    // Pop up message every minute
    let timer60s = setInterval(() => {
        let minutesLeft = document.getElementById('minutesLeft')
        timeOutPop1m.classList.toggle('displayNone');
        countDown--;
        minutesLeft.innerHTML = countDown;
        if (countDown < 2) {clearInterval(timer60s)}; // Doesn't show the message after 1 minute left
        let timer5s2 = setTimeout(() => { // hides it in 5 seconds
            timeOutPop1m.classList.toggle('displayNone');
        }, 5000) // 5s
    }, 60000); // 60s;
    let timer5m = setTimeout(() => { // 5 minuts countdown from step 1
        timeOutPop.classList.toggle('displayNone')
        let timer5s = setTimeout(() => { // resets to main page in 5 seconds
            timeOutPop.classList.toggle('displayNone');
            // current.classList.remove('pageActive')
            clearAll();
            history.go() // reloads the page
        }, 5000) //5s
    }, 300000) // 5m
}

function clearAll() {
    //person.forEach(e => console.log(e))
    Object.keys(person).forEach(e => person[e] = "")
    Object.keys(userFormIsValid).forEach(e => person[e] = false)
    Object.keys(addressFormIsValid).forEach(e => person[e] = false)
    countDown = 5;
    currentPage = 1;
}


let person = {
    username: "",
    email: "",
    pass: "",
    firstName: "",
    lastName: "",
    birthday: "",
    address1: "",
    address2: "",
    postalCode: "",
    country: "",
    phoneCode: "",
    phone: "",
    regularAddress: "",
}
let userFormIsValid = {
    username: false,
    email: false,
    pass: false,
    confPass: false,
}
let addressFormIsValid = {
    firstName: false,
    lastName: false,
    birthday: false,
    address: false,
    postalCode: false, country: false, phoneCode: false,
    phone: false,
    regularAddress: false,
}
let currentPage = 1;
let countDown = 5;
// Pages
let homePage = document.getElementById("step1");
let formUser = document.getElementById("step2");
let formAddress = document.getElementById("step3");
let shipping = document.getElementById("step4");
let thanksPage = document.getElementById("step5");
// display: none; class
let current = document.querySelector('.pageActive')
// next buttons
let btnNext = document.getElementById("next");
let btnUser = document.getElementById("next2");
let btnForm = document.getElementById("next3");
let btnShipping = document.getElementById("next4");
let btnFinish = document.getElementById("next5");
let okButton = document.querySelector('.okButton')
// reset btn
let btnReset = document.getElementById("reset");
// timeOutPop 
let timeOutPop = document.getElementById('timeOut5m')
let timeOutPop1m = document.getElementById('timeOut60s')

let inputUserForm = document.querySelectorAll(".formUser__input");
let inputAddressForm = document.querySelectorAll(".formAddress__input");


// shippingType
let deliveryExcepted = document.getElementById('deliveryExcepted')
let freeShipping = document.getElementById('freeShipping');
let extraShipping = document.getElementById('extraShipping');
let premiumShipping = document.getElementById('premiumShipping');
let date = new Date();
// free shipping
let todayPlus24h = new Date(date.setDate(date.getDate() + 1)).toString().slice(4, 21);
let todayPlus30h = new Date(date.setTime(date.getTime() + (6 * 60 * 60 * 1000))).toString().slice(4, 21)
// extra shipping
let todayPlus48h = new Date(date.setDate(date.getDate() + 1)).toString().slice(4, 21);
let todayPlus54h = new Date(date.setTime(date.getTime() + (6 * 60 * 60 * 1000))).toString().slice(4, 21);
// premium shipping 
let todayPlus72h = new Date(date.setDate(date.getDate() + 1)).toString().slice(4, 21);
let todayPlus78h = new Date(date.setTime(date.getTime() + (6 * 60 * 60 * 1000))).toString().slice(4, 21);

// Free Shipping 
freeShipping.addEventListener('click', () => {
    deliveryExcepted.innerHTML = todayPlus72h + ' and ' + todayPlus78h + '.'
})
// Extra Shipping
extraShipping.addEventListener('click', () => {
    deliveryExcepted.innerHTML = todayPlus48h + ' and ' + todayPlus54h + '.'
})
// Premium Shipping
premiumShipping.addEventListener('click', () => {
    deliveryExcepted.innerHTML = todayPlus24h + ' and ' + todayPlus30h + '.'
})

// OK button from pop up message
okButton.addEventListener('click', () => history.go());

btnNext.addEventListener("click", callControl, true);
inputUserForm.forEach((input) => {
    input.addEventListener('blur', validateAllForms);
});
inputAddressForm.forEach((input) => {
    input.addEventListener('blur', validateAllForms);
});

//btnReset.addEventListener("click",(e)=>{
//e.preventDefault();
// clearReset()
//})
function callControl(e) {
    e.preventDefault();
    controlPage();
}
function controlPage() {
    if (currentPage === 1) {activateCount()};
    switch (currentPage) {
        case 1:
            console.log("case1")
            btnNext.removeEventListener("click", callControl, true);
            btnUser.addEventListener("click", callControl, true);
            homePage.classList.toggle("pageActive");
            formUser.classList.toggle("pageActive");
            currentPage++;
            break;
        case 2:
            console.log("case2");
            if (validateUserForm()) {
                btnUser.removeEventListener("click", callControl, true)
                btnForm.addEventListener("click", callControl, true);
                formUser.classList.toggle("pageActive");
                formAddress.classList.toggle("pageActive");
                currentPage++;
                break;
            } else {
                document.querySelector(".formUser p").classList.toggle("errorMessageActive")
                Object.keys(userFormIsValid).forEach(e => person[e] = false)
                setTimeout(() => document.querySelector(".formUser p").classList.toggle("errorMessageActive"), 3000)
                break;
            }
        case 3:
            console.log("case3")
            //validateFormAddress(); to do
            btnForm.removeEventListener("click", callControl, true)
            btnShipping.addEventListener("click", callControl, true);
            formAddress.classList.toggle("pageActive");
            shipping.classList.toggle("pageActive");
            currentPage++;
            break;
        case 4:
            console.log("case4")
            btnShipping.removeEventListener("click", callControl, true)
            btnFinish.addEventListener("click", callControl, true);
            shipping.classList.toggle("pageActive");
            thanksPage.classList.toggle("pageActive");
            currentPage++;
            break;
        case 5:
            console.log("case5")
            currentPage = 0;
            btnFinish.removeEventListener("click", callControl, true)
            btnNext.addEventListener("click", callControl, true);
            thanksPage.classList.toggle("pageActive");
            homePage.classList.toggle("pageActive");
            currentPage++;
            break;
    }
}

function clearReset() {
    switch (currentPage) {
        case 2:
            document.querySelectorAll(".formUser__field input").forEach(e => e.value = "")
            break;
        case 3:
            document.querySelectorAll(".formAddress__field input").forEach(e => e.value = "")
            document.querySelectorAll(".formAddress__field input").forEach(e => e.checked = false)
            break;
        case 4:
            document.querySelectorAll(".formShipping__input input").forEach(e => e.checked = false)
            document.querySelectorAll("#inputMessage textarea")[0].value = ""
            document.querySelectorAll(".formShippingInfo label input")[0].checked = false
            break;
    }
}

function validateAllForms(event) {
    console.log(event)
    const usernameRegex = /^[a-z0-9_-]{3,16}$/;
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,20}/;
    const firstLastNameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,20}$/;
    switch (event.target.name) {
        case "username":
            //Alphanumeric string that may include _ and – having a length of 3 to 16 characters –
            console.log(usernameRegex.test(event.target.value))
            if (usernameRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.username = event.target.value;
                userFormIsValid.username = true;
                console.log('username válido')
            } else {
                console.log('username incorrecto')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Minimum 3 letters")
            }
            break;
        case "email":
            //email
            if (emailRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.email = event.target.value;
                userFormIsValid.email = true;
                console.log('email válido')
            } else {
                console.log('email incorrecto')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Missing email")
            };
            break;
        case "pass":
            if (passwordRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.pass = event.target.value
                userFormIsValid.pass = true;
                console.log('Correct password')
            } else {
                console.log('Incorrect password')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Not enough secure")
            }
            break;
        case "confPass":
            //same password
            if (event.target.value == person.pass && event.target.value != "") {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.confPass = event.target.value
                userFormIsValid.confPass = true;
                console.log('same password')
            } else {
                console.log('different password')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Not the same")
            }
            break;
        case "firstName":
            if (firstLastNameRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.firstName = event.target.value
                addressFormIsValid.firstName = true;
                console.log('Correct firstName')
            } else {
                console.log('Incorrect firstName')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put your real name")
            }
            break;
        case "lastName":
            if (firstLastNameRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.lastName = event.target.value
                addressFormIsValid.lastName = true;
                console.log('Correct LastName')
            } else {
                console.log('Incorrect lastname')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put your real Last name")
            }
            break;
        case "birthday":
            console.log(event);
            if (event.target.validity.valid) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.birthday = event.target.value
                addressFormIsValid.birthday = true;
                console.log('Correct birthday')
            } else {
                console.log('Incorrect birthday')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put a real birthday")
            }
            break;
        case "address-1":
            console.log(event);
            //Max. length: 50
            if (event.target.value.length <= 50) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.address1 = event.target.value
                addressFormIsValid.address1 = true;
                console.log('Correct address')
            } else {
                console.log('Incorrect address')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put an Address, maybe Narnia?")
            }
            break;
        case "address-2":
            console.log(event);
            //Max. length: 50
            if (event.target.value.length <= 50) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.address2 = event.target.value
                addressFormIsValid.address2 = true;
                console.log('Correct address')
            } else {
                console.log('Incorrect address')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put another Address, maybe Mordor?")
            }
            break;
        case "postalCode":
            console.log(event);
            //Max. length: 50
            if (event.target.value.length <= 10) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.postalCode = event.target.value
                addressFormIsValid.postalCode = true;
                console.log('Correct PC')
            } else {
                console.log('Incorrect PC')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Do not put area 51")
            }
            break;
        case "country":
            console.log(event);
            person.country = event.target.value
            addressFormIsValid.country = true;
            console.log('Correct address')
            break;
        case "phoneCode":
            console.log(event);
            person.phoneCode = event.target.value
            addressFormIsValid.phoneCode = true;
            console.log('Correct address')
            break;
        case "phone":
            console.log(event);
            //Max. length: 50
            if (event.target.value.length <= 50) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.phone = event.target.value
                addressFormIsValid.phone = true;
                console.log('Correct Phone')
            } else {
                console.log('Incorrect Phone')
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Add a real number")
            }
            break;
        case "regularAddress":
            console.log(event);
            person.regularAddress = event.target.value
            addressFormIsValid.regularAddress = true;
            break;
    }
}

function validateUserForm() {
    return Object.values(userFormIsValid).filter((value) => (value === false)).length == 0
}

function validateFormAddress() {
    return Object.values(addressFormIsValid).filter((value) => (value === false)).length == 0

}
