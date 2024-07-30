async function getPosts() {
  const {posts} = await fetch('https://dummyjson.com/post/').then(res => res.json());
  return posts;
}

async function getPostsComments(postId) {
  const {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());
  return comments;
}

async function renderPost() {
  const posts = await getPosts();

  for(let i = 0; i <= posts.length; i++) {
    const comments = await getPostsComments(posts[i].id);
    container.innerHTML += `<h1 class="baslık" id="baslık"> ${posts[i].title} </h1> <p class="icerik" id="icerik"> ${posts[i].body} </p>
    ${comments.map( x => `<li class="icerikListe" id="icerikListe"><strong>${x.user.fullName}</strong>: ${x.body} </li>`).join('')}
    `;
  }
  }
renderPost();

