class Application {
  constructor(props) {
    this.props = props;
    this.state = {
      users: [],
      posts: [],
      loading: false, // или true?
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

  fetchPosts(userId) {
    this.setState({
      loading: true,
    });
    fetch(`https://dummyapi.io/data/v1/user/${userId}/post?limit=10`, {
      method: 'GET',
      headers: {
        'app-id': '61781a4589f8b25e378f1812',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        const posts = response.data;
        this.setState({ posts, loading: false });
      });
  }

  onUserClick(user) {
    this.fetchPosts(user.id);
  }

  renderMessages(user) {
    this.props.messageContainer.innerHTML = ' ';
    user.messages.forEach((message) => {
      const element = Message(message);
      this.props.messageContainer.append(element);
    });
  }

  renderUsers() {
    this.props.contactList.innerHTML = '';
    this.state.users.forEach((user) => {
      const element = User({ user, onClick: () => this.onUserClick(user) });
      this.props.contactList.append(element);
    });
  }

  renderPosts() {
    this.props.messageContainer.innerHTML = '';
    this.state.posts.forEach((post) => {
      const element = Post({ post });
      this.props.messageContainer.append(element);
    });
  }

  renderLoader() {
    const loading = this.state.loading;
    const loader = document.getElementById('loader');
    loader.style.display = loading ? 'flex' : 'none';
  }

  render() {
    this.renderUsers();
    this.renderPosts();
    this.renderLoader();
  }
}
