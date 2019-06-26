// Psuedocode for tabs
// We have two main elements: the tab link (what we click), and the tab content.
// We will create a class for each of these elements (TabLink & TabItem), where TabLink is the parent class that creates an instance of TabItem each time it is clicked.
// The TabLink class links the tab-link element to its respective tab-item by first grabbing a tab item by its state attribute and passing it as an object to the TabItem constructor class.   
// On clicking the tab-link, the TabLink class calls the select method, which does two things:
// 1- it removes tab-link-selected from every tab-link and adds it to the tab-link in question (referred to by 'this.element')
// 2- it calls the TabItem's select method on the new TabItem instance created by the TabLink class. This method also removes tab-item-selected from every item and adds it to the tab-link one in question. 
// The 'element' passed into each constructor is the tab-link element and the tab-item element.


class TabLink {
  constructor(element) {
    this.element = element;
    console.log('TabLink this.element', this.element);
    this.data = this.element.dataset.tab;
    // console.log(this.data);
    this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`)
    console.log('itemElement', this.itemElement);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => this.select());
  };
  select() {
    Array.from(tabs).forEach(tab => tab.classList.remove('tab-link-selected'));
    this.element.classList.add('tab-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
    // console.log('TabItem this.element', this.element);
  }
  select() {
    const items = document.querySelectorAll('.tab-item');
    console.log("Items", items);
    items.forEach(item => item.classList.remove('tab-item-selected'));
    this.element.classList.add('tab-item-selected');
  }
}

const tabs = document.querySelectorAll('.tab-link');

tabs.forEach(tab => new TabLink(tab));
