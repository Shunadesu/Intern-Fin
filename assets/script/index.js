const tabs = document.querySelectorAll('.tab-item');
const tabs_pane = document.querySelectorAll('.tab-pane');

tabs.forEach((tab, index) => {

  const pane = tabs_pane[index];

  tab.onclick = function(){
    document.querySelector('.tab-item.active').classList.remove('active');
    document.querySelector('.tab-pane.active').classList.remove('active');
    this.classList.add('active');
    pane.classList.add('active');
  }
})