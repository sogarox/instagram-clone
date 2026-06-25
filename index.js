const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        description: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        description: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        description: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let identifier = ''
let i = 0;

function renderPage(){
    for (let i = 0; i < posts.length; i++){
    document.getElementById('doomScroll').innerHTML += `
    <section>
            <div class="posts">
                <div class="post-profile">
                    <div>
                    <img class="user-avatar" src="${posts[i].avatar}" alt=""></img>
                    </div>

                    <div class="profile-info">
                        <a href="#"> ${posts[i].name}</a>
                        <p> ${posts[i].location}</p>
                    </div>
                </div>
                <div>
                <img id="postImg" class="post-imgs" src="${posts[i].post}" alt="Oldagram post image">
                </div>

                <div class="interact-section">
                    <div class="interact-btns">
                        <img class="heart" src="images/icon-heart.png" alt="heart button, press to like">
                        <img src="images/icon-comment.png" alt="comment button">
                        <img src="images/icon-dm.png" alt="share button">
                    </div>
                    <div class="post-bottom">
                        <h3>${posts[i].likes} likes</h3>
                        <p>
                            <a href="#" class="bold">
                            ${posts[i].username}
                            </a>
                            <span class="nobold">
                            ${posts[i].description}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

renderPage()

const pImg = document.getElementById('postImg')

pImg.addEventListener('click', function(){
    console.log("like!")
})