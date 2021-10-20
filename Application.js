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
    const element = Message(user.messages[0]);
    this.props.messageContainer.append(element);
  }

  renderUsers() {
    // console.log(this.users);
    const userElements = this.props.users.map((user) =>
      User({ user, onClick: () => this.onUserClick(user) })
    );
    console.log(userElements);

    // append userElements to this.contactList here
    userElements.forEach((userElement) => {
      this.props.contactList.append(userElement);
    });
  }

  render() {
    this.renderUsers();
  }
}
