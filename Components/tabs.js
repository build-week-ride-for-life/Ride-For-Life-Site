class TabLink {
  constructor(element) {
    this.element = element;
    console.log('TabLink this.element', this.element);
    this.data = this.element.dataset.tab;
    console.log(this.data);
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
    console.log('TabItem this.element', this.element);
  }
  select() {
    const items = document.querySelectorAll('.tab-item');
    items.forEach(item => item.classList.remove('tab-item-selected'));
    this.element.classList.add('tab-item-selected');
  }
}


// grab individual tab link and assign them to tab

const tabs = document.querySelectorAll('.tab-link');

// loop though the tab nodelist and pass each tab to a new instance of TabLink

tabs.forEach(tab => new TabLink(tab));