document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);
document.getElementById('getApi').addEventListener('click',getApi);
document.getElementById('post').addEventListener('submit',post);
function getText() {
    fetch('sample.txt')
    .then((res)=> res.text()) 
    .then((data) =>{
        document.getElementById('body').innerHTML=data
        console.log(data) 
      })
}
function getUsers() {
    fetch('ajx.json')
    .then((res)=> res.json()) 
    .then((data) =>{
        let output='<h2>user</h2>'
        data.forEach((user)=>{
            output += `
             <ul class="list-group" mb-3>
             <li class="list-group-item"> ID: ${user.id}</li>
             <li class="list-group-item"> name: ${user.name}</li>
             <li class="list-group-item"> Email: ${user.email}</li>
             </ul>
            `
        })
        document.getElementById('body').innerHTML=output
      })
}
function getApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json()) 
    .then((post) =>{
        let output='<h2 class="mb-4">Api</h2>'
        post.forEach((api)=>{
            output += `
            <div class="card card-body mb-4">
              <h3>${api.title}</h3>
              <p>${api.body}</p>
            </div>
            `
        })
        document.getElementById('body').innerHTML=output
      })
}

function post(e) {
e.preventDefault()
  let title=document.getElementById('title').value
  let bod=document.getElementById('bod').value
  fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
          'accept': 'application/json,text/plain, */*',
          'content-type': 'application/json'
      },
      body: JSON.stringify({title:title, bod:bod})
  })
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}