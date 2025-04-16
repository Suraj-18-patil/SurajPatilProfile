var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
// let tabname =document.getElementsByClassName("tab-links");

function opentab(tabname) {
  for (let tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }

  EventTarget.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
