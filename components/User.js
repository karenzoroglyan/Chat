function User(props) {
  const { user, onClick } = props;
  // this.user = props.user;
  // this.onClick = props.onClick;
  const div = document.createElement('div');
  div.classList.add('contact-item');
  div.innerHTML = `${user.name}, ${user.id}`;
  div.addEventListener('click', onClick);

  return div;
}
