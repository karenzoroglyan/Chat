function Post(props) {
  const { post } = props;
  const div = document.createElement('div');
  div.classList.add('post-item');
  div.innerHTML = `
        <img src="${post.image}" style="width:50px; height:50px">
        id: ${post.id} 
    `;

  return div;
}
