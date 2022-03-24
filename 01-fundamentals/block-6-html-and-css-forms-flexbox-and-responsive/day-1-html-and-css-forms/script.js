let inputname = document.querySelector('#name')
const button = document.querySelector('#submitButton');


button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(inputname.value);
});