console.log('map');

import ymaps from 'ymaps';

ymaps.load('https://api-maps.yandex.ru/2.1/?lang=en_US').then(maps => {
  const map = new maps.Map('map', {
    center: [54.9924400, 73.3685900],
    zoom: 7
  });
});