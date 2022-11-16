let posts = [
    
    {
    date:"JULY 23, 2022",
    title:"Blog one",
    image:"img/post-1.png",
    content:"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    id: 0
},

{
    date:"JULY 23, 2022",
    title:"Blog one",
    image:"img/post-2.png",
    content:"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    id: 0
},
{
    date:"JULY 23, 2022",
    title:"Blog one",
    image:"img/post-3.png",
    content:"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    id: 0
},
{
    date:"JULY 23, 2022",
    title:"Blog one",
    image:"img/post-4.png",
    content:"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    id: 0
},
{
    date:"JULY 23, 2022",
    title:"Blog one",
    image:"img/post-5.png",
    content:"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    id: 0
},
{
    date:"JULY 23, 2022",
    title:"Blog one",
    image:"img/post-6.png",
    content:"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    id: 0
},

]

function renderPosts(list){
    htmltag = ""
   const listObject = list.forEach(function(item) {
        htmltag+=`<div class="post-container">
        <img class="post-img"src="${item.image}" alt="">
        <p class="date">${item.date}</p>
        <h2>${item.title}</h2>
        <p class="post-p">${item.content}</p>
      </div>`
    });
    return htmltag;

}


document.getElementById("content").innerHTML = renderPosts(posts)
