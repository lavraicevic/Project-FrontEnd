

const url = 'http://mini-app.test/api/posts'

axios({
    method: 'get',
    url: url
}).then(function(response){
    console.log(response.data)
})