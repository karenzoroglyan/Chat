const application = new Application({
  users: MOCKS.USERS,
  contactList: document.getElementById('contacts'),
  messageContainer: document.querySelector('.conversation-message-list'),
});

application.render();
application.fetchUsers();
