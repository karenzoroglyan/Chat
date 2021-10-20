/**
 * Root chat application
 *
 * Props:
 *   - users - это массив USERS
 *   - contact list element - здесь отображаются контакты
 *   - message list element - здесь отображаются сообщения выбранного контакта
 *
 *
 *
 */
class Application {
  constructor(props) {
    this.props = props;
  }

  /**
   * Registers event listeners for:
   *   - contact list
   */
  registerEventListeners() {
    this.props.contactList.addEventListener(
      'click',
      this.onUserClick.bind(this)
    );
  }

  /**
   * Вызывается, когда пользователь нажимает на контейнер контактов
   * @param {{ target: HTMLDivElement }} user
   */
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
    // append userElements to this.contactList here
    this.props.users.forEach((user) => {
      const element = User({ user, onClick: () => this.onUserClick(user) });
      this.props.contactList.append(element);
    });
  }

  render() {
    this.renderUsers();
  }
}
