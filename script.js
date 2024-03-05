var users = [
    {
        username: "angel_priya",
        dp: "https://images.unsplash.com/photo-1709428731322-c27b5acfea60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        post: "https://images.unsplash.com/photo-1709627621281-382e39770f32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 500,
        btn: "Like"

    },
    {
        username: "yours_priya",
        dp: "https://images.unsplash.com/photo-1709428731322-c27b5acfea60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        post: "https://images.unsplash.com/photo-1709224583116-fac235fc8852?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 456,
        btn: "Like"

    },
    {
        username: "its_me_Rajesh",
        dp: "https://images.unsplash.com/photo-1709428731322-c27b5acfea60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        post: "https://images.unsplash.com/photo-1682685796852-aa311b46f50d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 49,
        btn: "Like"

    },
    {
        username: "its_abc",
        dp: "https://images.unsplash.com/photo-1709402740448-c00125bc4e6f?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        post: "https://images.unsplash.com/photo-1706805731585-d211846247bb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 69,
        btn: "Like"

    },
]

function fun(){
    
var clutter=''
users.forEach(function(ele,idx){
    clutter+=`
    <div class="post">
    <div class="head">
      <img src=${ele.dp} alt="">
      <h3>Name</h3>
    </div>
   
    <img src=${ele.post} alt="">
    <button id="${idx}" >Like</button>
    <h4>Likes: ${ele.likes}</h4>
   </div>

    `
})
main.innerHTML=clutter
}


var main=document.querySelector('.main')
var btn=document.querySelector('button')
fun()

document.addEventListener('click',function(dets){
    if(users[dets.target.id].btn=="Like"){
    users[dets.target.id].likes++;
    users[dets.target.id].btn="Unlike";
    }
    else{
        users[dets.target.id].likes--
        users[dets.target.id].btn="Like";
    }
    fun()
}
)