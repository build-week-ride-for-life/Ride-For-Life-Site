
class Panel {
  constructor() {
    this.panelHeader = document.querySelector(".panel-header");
    this.panelContent = document.querySelector(".panel-content");
    this.panelBtn = document.querySelector(".panel-btn");
    this.panelBtn.addEventListener('click', () => this.closePanel());
    this.panelHeader.addEventListener('click', () => this.showPanel());
  }
  showPanel(){
    this.panelContent.classList.toggle("show");
    this.panelContent.classList.remove("hide");
    this.panelBtn.classList.remove("hide");
  }
  closePanel() {
    this.panelContent.classList.add("hide");
    this.panelContent.classList.remove("show");
    this.panelBtn.classList.add("hide");
  }
}

const panels = document.querySelectorAll(".panel");
panels.forEach(panel => new Panel());





