ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055],
      {}, {
        iconLayout: 'default#image',
        iconImageHref: '/pink/img/map-marker.png',
        iconImageSize: [36, 35],
        iconImageOffset: [0, 0]
      });

    myMap.geoObjects.add(myPlacemark);
}
