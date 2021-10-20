function User(props) {
  const { user, onClick } = props;
  const div = document.createElement('div');
  div.classList.add('contact-item');
  div.innerHTML = `${user.name}, ${user.id}`;
  div.addEventListener('click', onClick);

  return div;
}
