// Event ID
const id = new URLSearchParams(window.location.search).get('id');

// Defining already made elements in the html
const title = document.getElementById("title")
const body = document.getElementById("body")
const picture = document.getElementById("picture")
const userName = document.getElementById("userName")
// Adding post ID
const postId = document.getElementById('postID')

// Defining where to show elements
const comments = document.getElementById("comments")
// Defining the API link
const url = 'http://mini-app.test/api/post?id=' + id

// Creating API
axios({
    method: 'get',
    url: url
}).then(function(response){
    console.log("working")
    // Define data to not type response.data every time
   const post = response.data
   console.log(post)

   title.textContent = post[0].title
   body.textContent = post[0].body
   userName.textContent = post[0].user_name
   postId.value = post[0].id
   console.log(postId)

   
   post.forEach(com => {
        // Creating comments
        let article = document.createElement("article")
        let userPictureHolder = document.createElement("div")
        let comUser = document.createElement("p")
        let profilePic = document.createElement("img")
        let commentBody = document.createElement("p")

        // Adding classes, content, sources...
        article.classList.add("max-w-xl", "mx-auto", "px-4", "p-6", "text-base", "bg-white", "rounded-lg", "border-1", "border-gray-500", "m-3")

        userPictureHolder.classList.add("flex", "justify-center", "items-center", "mb-2")

        comUser.classList.add("inline-flex", "items-center", "mt-3", "text-sm", "text-gray-900", "font-semibold")
        comUser.textContent = com.user_name

        profilePic.classList.add("mr-2", "w-6", "h-6", "rounded-full")
        profilePic.src =  "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
        profilePic.alt = "Profile picture"

        commentBody.classList.add("text-gray-500")
        commentBody.textContent = com.comment_name

        // Appending everything
        article.append(userPictureHolder)
        article.append(commentBody)

        userPictureHolder.append(profilePic)
        userPictureHolder.append(comUser)



        // append to show
        comments.append(article)

   });
    
})