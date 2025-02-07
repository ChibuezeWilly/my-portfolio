function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxvyDuZtnbYvsfbFfPEjRQ1iPj1Jx2oHT71hXT6bRNn83qi9j5Q-xavE6eMFhBrOiZ3/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
    msg.innerHTML = "Message Successfully sent"
    setTimeout(function () {
        msg.innerHTML = ""
        }, 5000)
        })
        .catch(error => console.error('Error!', error.message))
})