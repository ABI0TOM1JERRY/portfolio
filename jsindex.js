
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll= () =>  {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)  {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }
    })
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const subject = document.getElementById("sub");
const mess = document.getElementById("text_area");
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        SecureToken :"4ac01ed6-e968-4f6a-8ee6-caa30966ed50",
        To : 'akshayagovindan26@gmail.com',
        From : 'akshayagovindan26@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
        if(message == "OK"){
            swal({
                title: "Success!",
                text: "Message send successfully!",
                icon: "success",
              })
      }
    }
    );
}

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    sendEmail();
})
