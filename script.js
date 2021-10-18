const contactsContainer = document.querySelector(".contacts");

function Contact(contact) {
  const div = document.createElement("div");
  div.classList.add("contact-item");
  div.innerText = contact.name;

  return div;
}

const CONTACTS = [
  {
    name: "Saul",
  },
  {
    name: "David",
  },
  {
    name: "Salomon",
  },
];

CONTACTS.forEach((contact) => {
  const element = Contact(contact);
  contactsContainer.append(element);
});

const messageContainer = document.querySelector(".conversation-message-list");

function Messages(message) {
  const div = document.createElement("div");
  div.classList.add("message-item");
  div.innerText = message.text;

  return div;
}

const MESSAGES = [
  { text: "Hello!" },
  { text: "What's up?" },
  { text: "Very nice!" },
];

MESSAGES.forEach((message) => {
  const element = Messages(message);
  messageContainer.append(element);
});
