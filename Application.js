class Application {
  constructor(props) {
    this.props = props;
    this.state = {
      users: [],
      loading: false, // или true?
      label: 'user',
    };
  }

  setState(derivedState) {
    this.state = { ...this.state, ...derivedState };

    this.render();
  }

  fetchUsers() {
    fetch('https://dummyapi.io/data/v1/user?limit=10', {
      method: 'GET',
      headers: {
        'app-id': '61781a4589f8b25e378f1812',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        const users = response.data;
        this.setState({ users });
      });
  }

  onUserClick(user) {
    this.renderMessages(user);
  }

  renderMessages(user) {
    this.props.messageContainer.innerHTML = ' ';
    user.messages.forEach((message) => {
      const element = Message(message);
      this.props.messageContainer.append(element);
    });
  }

  renderUsers() {
    this.state.users.forEach((user) => {
      const element = User({
        user,
        onClick: () => this.onUserClick(user),
        label: this.state.label,
      });
      this.props.contactList.append(element);
    });
  }

  render() {
    this.renderUsers();
  }
}
