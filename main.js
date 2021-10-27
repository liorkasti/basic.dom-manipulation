
const sortList = () => {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("list");
  // console.log('Going to sort the list ', list)
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

navBarHandler = (event) => {
  id = event.target.hash;
  // console.log(`event.attribute.element`, event.path[0].attributes.href.value)
  // console.log(`event`, event)
  page = document.querySelector(id);
  prevPage = document.getElementsByClassName('active')[0];
  prevPage.setAttribute("class", "hidden");
  page.setAttribute("class", "active");
  // console.log(`prevPage`, prevPage.outerText)
  // console.log(`page`, page.outerText)
}