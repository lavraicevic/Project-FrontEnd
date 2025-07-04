// Defining where to show elements
const display = document.getElementById("display")
// Defining the API link
const url = 'http://mini-app.test/api/posts'
// Creating API
axios({
    method: 'get',
    url: url
}).then(function(response){
    response.data.forEach(post => {
        // Creating needed elements 
        let container = document.createElement('a')
        let image = document.createElement('img')
        let textHolder = document.createElement('div')
        let contentHolder = document.createElement('div')
        let title = document.createElement('span')
        let body = document.createElement('p')
        let userInfoHolder = document.createElement('div')
        let pictureTitleHolder = document.createElement('div')
        let profilePic = document.createElement('img')
        let userName = document.createElement('p')
        let date = document.createElement('span')

        // Adding classes, atributtes, values and content to every element
        container.classList.add("swiper-slide", "max-w-2xl", "overflow-hidden", "bg-white", "rounded-lg", "shadow-md", "border-1", "cursor-pointer")

        // Adding a link for a website for a singular event
        container.href = "post.html?id=" + post.id
        console.log(post.id)

        image.classList.add("object-cover", "w-full", "h-64")
        image.src = "http://mini-app.test/assets/" + post.picture
        
        contentHolder.classList.add("p-6")

        title.classList.add("block", "mt-2", "text-xl", "font-semibold", "text-gray-800", "transition-colors", "duration-300", "transform", "hover:text-gray-600")
        title.textContent = post.title
        
        body.classList.add("mt-2", "text-sm","text-gray-600")
        body.textContent = post.body

        userInfoHolder.classList.add("mt-4", "flex", "items-center")

        pictureTitleHolder.classList.add("flex", "items-center", "gap-2")

        profilePic.classList.add("object-cover", 'rounded-full', 'h-10')

        profilePic.src = "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"

        userName.classList.add("font-semibold", "text-gray-700")
        userName.textContent = post.author_name

        date.classList.add("mx-1", "text-xs", "text-gray-600")
        date.textContent = "21 SEP 2015"

        //Apending content to the elements
        container.append(image)
        container.append(contentHolder)

        contentHolder.append(textHolder)
        contentHolder.append(userInfoHolder)

        textHolder.append(title)
        textHolder.append(body)

        userInfoHolder.append(pictureTitleHolder)
        userInfoHolder.append(date)

        pictureTitleHolder.append(profilePic)
        pictureTitleHolder.append(userName)
        
        // Appending content to the page
        display.append(container)

    });
})