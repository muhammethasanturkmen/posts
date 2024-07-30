async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());



  container.innerHTML += `<h1 class="baslık" id="baslık">${post.title}</h1>` + `<p class="icerik" id="icerik">${post.body}</p>` + comments.map( x => `<li class="icerikListe" id="icerikListe">${x.user.fullName}  : ${x.body}</li>`).join('');
}


for(let i=0; i<30; i++) {
  
  getData(i);
}