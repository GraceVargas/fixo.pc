// Initialize and add the map
function initMap() {
    // The location 
    const fixo = { lat: -34.59828997240956, lng: -58.488717229111444 };
    // The map
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: fixo,
    });

    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">FIXO Computación</h1>' +
    '<div id="bodyContent">' +
    "<p>Condarco 3167, C1417 CABA</p>" +
    '<p><a href="https://walink.co/b9d12d">' +
    "011 6837-9410</a> </br></br>" +
    '<a href="https://www.instagram.com/fixo.pc/">instagram.com</a></p>' +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
    // The marker
    const marker = new google.maps.Marker({
      position: fixo,
      map: map,
      title: "Uluru (Ayers Rock)",
    });
    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
    });
  }
  
  window.initMap = initMap;


  /* Toggle Menu Button */

  document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("toggle-button");
    const menu = document.querySelector(".responsive_menu");
  
    menuButton.addEventListener("click", function() {
      menu.classList.toggle("show");
    });
  });

