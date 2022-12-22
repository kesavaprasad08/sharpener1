const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

btn.style.background = "green";
btn.addEventListener("mouseover", onMouseOver);
btn.addEventListener("mouseout", onmouseOut);
btn.addEventListener("click", onclick);
myForm.addEventListener("submit", onSubmit);

function onMouseOver(e) {
btn.style.background = "darkgreen";
}

function onmouseOut(e) {
btn.style.background = "green";
}

function onclick(e) {
btn.style.background = "blue";
}

/*function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === "" || emailInput.value === "") {
     msg.classList.add("error");
    
        msg.innerHTML = "please enter all fields";
    
        setTimeout(() => msg.remove(), 3000);
    } else {
    var myobj = {
        name : nameInput.value,
         email: emailInput.value
    }
    var myobjserialized =JSON.stringify(myobj);
    console.log(myobjserialized);
    
    localStorage.setItem('myobj',myobjserialized);
    
    }
    nameInput.value = "";
    emailInput.value = "";
    }
*/ 
function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === "" || emailInput.value === "") {
     msg.classList.add("error");
    
        msg.innerHTML = "please enter all fields";
    
        setTimeout(() => msg.remove(), 3000);
    } else {
    var myobj = {
        name : nameInput.value,
         email: emailInput.value
    }
    var myobjserialized =JSON.stringify(myobj);
    console.log(myobjserialized);
    
    localStorage.setItem(emailInput.value,myobjserialized);
    
    }
    
    var btn = document.createElement('button');
    btn.setAttribute('id','listOfAppointments');
    var btnDel = document.createElement('button');
    btn.setAttribute('id','listOfAppointments');

    var ul =document.createElement('ul');
    ul.setAttribute('id','listOfAppointments');
    ul.setAttribute('class','items')
    document.body.appendChild(ul);
    var li = document.createElement('li');
    li.setAttribute('class','items')

    ul.appendChild(li);
    ul.appendChild(btn);
    ul.appendChild(btnDel);

    btn.textContent='Edit';
    btnDel.textContent='Delete';
 
    li.textContent=nameInput.value + ' ' +emailInput.value;

    nameInput.value = "";
    emailInput.value = "";


    }
    
    
