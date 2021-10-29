function User(props) {
  const { user, onClick } = props;
  // this.user = props.user;
  // this.onClick = props.onClick;
  const div = document.createElement('div');
  div.classList.add('contact-item');
  div.innerHTML = `<div class="user-data">
                      <img src="${user.picture}"
                      <h3>${user.title}</h3> 
                      <h4>${user.firstName} ${user.lastName} ${user.id}</h4>
                      </div>`;
  div.addEventListener('click', onClick);

  return div;
}
