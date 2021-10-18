const messageContainer = document.querySelector(".conversation-message-list");

function Message(message) {
  const div = document.createElement("div");
  div.classList.add("message-item");
  div.innerText = message.text;

  return div;
}

const MESSAGE = [
  {
    text: "Ты более праведен, чем я, ибо ты отплатил мне добром, а я отплатил тебе злом",
  },
];
function showMessage() {
  MESSAGE.forEach((message) => {
    const element = Message(message);
    messageContainer.append(element);
  });
}

const divTag = document.getElementById("contact-item");
divTag.addEventListener("click", showMessage);
