message__input.onclick = function () {
  let div = document.querySelector(".contacts");
  div.innerHTML = " ";
  let element = document.createElement("div");
  element.innerHTML = "Karen Zoroglyan";
  element.className = "contacts__item1";
  div.append(element);
};
