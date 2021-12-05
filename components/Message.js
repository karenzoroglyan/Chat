function Message(message) {
  const div = document.createElement('div');
  div.classList.add('message-item');
  div.innerText = message.text;

  return div;
}
