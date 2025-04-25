// Event ID
const id = new URLSearchParams(window.location.search).get('id');

// Defining already made elements in the html
const poster = document.getElementById("poster")
const title = document.getElementById("title")
const body = document.getElementById("body")

// Defining where to show elements
const display = document.getElementById("display")
// Defining the API link
const url = 'http://mini-app.test/api/event?id=' + id

// Creating API
axios({
    method: 'get',
    url: url
}).then(function(response){
    
    // Define data to not type response.data every time
    const event = response.data

    poster.src = event.poster
    title.textContent = event.title
    body.textContent = event.body
    
})