// Defining where to show elements
const display = document.getElementById("display")
// Defining the API link
const url = 'http://mini-app.test/api/events'

// Creating API
axios({
    method: 'get',
    url: url
}).then(function(response){
    
    response.data.forEach(event => {

        // Creating needed elements
        let container = document.createElement('a')
        let textHolder = document.createElement('div')
        let title = document.createElement('h1')
        let body = document.createElement('p')
        let image = document.createElement('img')

        // Adding classes, atributtes, values and content to every element
        container.classList.add("max-w-xs", "overflow-hidden", "bg-white", "rounded-lg", "shadow-lg");

        // Adding a link for a website for a singular event
        container.href = "event.html?id=" + event.id

        console.log(container.href)

        textHolder.classList.add("px-4", "py-2");

        title.classList.add("text-xl", "font-bold", "text-gray-800", "uppercase", "truncate")
        title.textContent = event.title

        body.classList.add("mt-1", "text-sm", "text-gray-600")

        // Shortening out the description
        body.textContent = event.body.substring(0, 100) + ' ...'

        image.classList.add("object-cover", "w-full", "h-48", "mt-2")
        image.src = event.poster
        image.alt = "Poster for the event"
        
        //Apending content to the elements
        textHolder.append(title)
        textHolder.append(body)

        container.append(textHolder)
        container.append(image)
        
        // Appending content to the page
        display.append(container)

    });
})