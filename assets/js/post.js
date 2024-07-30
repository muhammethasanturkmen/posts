function createHtml (esc, ren) {
  return `
  <h1 class="baslık" id="baslık">${esc.title}</h1>
  <p class="icerik" id="icerik">${esc.body}</p>
  <ul class="icerikListe" id="icerikListe"><li>${ren.user.fullName} : ${ren.body}</li> </ul>
 
  `;
}



async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());

  for (let i = 0; i < 30; i++) {
    container.innerHTML += createHtml(post, comments[i]);
  }

}

for (let i = 0; i < 30; i++) {
  getData(i);
}



