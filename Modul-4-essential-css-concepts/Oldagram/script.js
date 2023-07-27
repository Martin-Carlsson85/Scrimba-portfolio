const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/user-avatar.jpg",
        avatarVangogh: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        logo: "images/logo.png",
        comment: "just took a few mushrooms lol",
        iconHeart: "images/icon-heart.png",
        iconDM: "images/icon-dm.png",
        iconComment: "images/icon-comment.png",
        likes: 21.
    }
];

for(let i = 0; i < posts.length; i++){
    const post = posts[i]

const headerContainer = document.querySelector('header .container')
headerContainer.innerHTML = `
<img class="logo" class="icons" src="${post.logo}"/>
<img class="user" src="${post.avatar}"/>
`

const mainSectionOne = document.querySelector('main .containerOne')
mainSectionOne.innerHTML = `
<div class="title-post-img">
    <img class="avtar-vangogh" src="${post.avatarVangogh}"/>
    <div class="title-post-text">
        <p class="bold">Vincent van Gogh</p>
        <p>Zundert, Netherlands</p>
    </div>
</div>
`

const mainSectionTwo= document.querySelector('main .containerTwo')
mainSectionTwo.innerHTML = `
<div>
<img class="post-vangogh" src="${post.post}"/>
</div>
`

const mainSectionTree= document.querySelector('main .containerTree')
mainSectionTree.innerHTML = `

<img class="icons" src="${post.iconHeart}"/>
<img class="icons" src="${post.iconComment}"/>
<img class="icons" src="${post.iconDM}"/>

`
const footer= document.querySelector('footer .container')
footer.innerHTML = `
<div class="text-footer">
    <p class="bold">${post.likes} likes</p>
    <p><span class="bold">${post.username}</span> ${post.comment} just took</p>
</div>
`
}