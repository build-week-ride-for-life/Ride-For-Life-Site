
class Panel {
  constructor(panel) {
    this.panelHeader = panel.querySelector(".panel-header");
    this.panelContent = panel.querySelector(".panel-content");
    this.panelBtn = panel.querySelector(".panel-btn");
    this.panelBtn.addEventListener('click', () => this.closePanel());
    this.panelHeader.addEventListener('click', () => this.showPanel());
  }
  showPanel(){
    this.panelContent.classList.toggle("hide");
    this.panelBtn.classList.toggle("hide");
    console.log("clicked");
  }
  closePanel() {
    this.panelContent.classList.add("hide");
    this.panelBtn.classList.add("hide");
  }
}

const panels = document.querySelectorAll(".panel");
panels.forEach(panel => new Panel(panel));





