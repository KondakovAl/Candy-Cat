const groups = [
  {
    id: 1,
    city: 'Москва',
    adress: 'Пр-кт Мира 211, к.1, ТРЦ Европолис',
    place: 'Магазин Candy Cat, ТРЦ Европолис',
    working_hours: '10:00-22:00',
    center: [55.845731, 37.666605],
  },
  {
    id: 2,
    city: 'Иркутск',
    adress: ' ул.Сергеева 3/5, МТРЦ Сильвермолл',
    place: 'Магазин Candy Cat, МТРЦ Сильвермолл',
    working_hours: '10:00-22:00',
    center: [52.266368, 104.226679],
  },
  {
    id: 3,
    city: 'Иркутск',
    adress: ' ул.Верхняя Набережная 10, ТРЦ Яркомолл',
    place: 'Магазин Candy Cat, ТРЦ Яркомолл',
    working_hours: '10:00-22:00',
    center: [52.268829, 104.289716],
  },
  {
    id: 4,
    city: 'Ульяновск',
    adress: 'Московское шоссе, 108, ТРК Аквамолл',
    place: 'Магазин Candy Cat, ТРК Аквамолл',
    working_hours: '10:00-22:00',
    center: [54.306891, 48.359375],
  },
  {
    id: 5,
    city: 'Томск ',
    adress: 'пр.Комсомольский 13Б, ТРЦ Изумрудный город',
    place: 'Магазин Candy Cat, ТРЦ Изумрудный город',
    working_hours: '10:00-22:00',
    center: [56.488478, 84.977269],
  },
  {
    id: 6,
    city: 'Тюмень ',
    adress: 'ул.Дмитрия Менделеева 1А, ТРЦ Кристалл',
    place: 'Магазин Candy Cat, ТРЦ Кристалл',
    working_hours: '10:00-22:00',
    center: [57.117283, 65.551829],
  },
  {
    id: 7,
    city: 'Мурманск',
    adress: 'пр. Ленина 32, ТРЦ Мурманскмолл',
    place: 'Магазин Candy Cat, ТРЦ Мурманскмолл',
    working_hours: '10:00-22:00',
    center: [68.95729, 33.069414],
  },
  {
    id: 8,
    city: 'Оренбург',
    adress: 'Шарлыкское шоссе 1\\2, ТРЦ Армада',
    place: 'Магазин Candy Cat, ТРЦ Армада',
    working_hours: '10:00-22:00',
    center: [51.846324, 55.120122],
  },
  {
    id: 9,
    city: 'Сочи',
    adress: 'Навагинская, 7/3',
    place: 'Магазин Candy Cat',
    working_hours: '10:00-22:00',
    center: [43.587271, 39.723008],
  },
  {
    id: 10,
    city: 'Магнитогорск',
    adress: 'пр. Карла Маркса 172, ТРК Семейный парк',
    place: 'Магазин Candy Cat, ТРК Семейный парк',
    working_hours: '10:00-22:00',
    center: [53.378954, 58.977087],
  },
  {
    id: 11,
    city: 'Барнаул',
    adress: 'ул. Строителей 117, ТРЦ Galaxy',
    place: 'Магазин Candy Cat, ТРЦ Galaxy',
    working_hours: '10:00-22:00',
    center: [53.346233, 83.752631],
  },
  {
    id: 12,
    city: 'Новый Уренгой',
    adress: 'ул. Сибирская 26, ТРЦ Солнечный',
    place: 'Магазин Candy Cat, ТРЦ Солнечный ',
    working_hours: '10:00-22:00',
    center: [66.082842, 76.631086],
  },
  {
    id: 13,
    city: 'Кемерово',
    adress: 'пр. Шахтёров, 64к1, ТРЦ Радуга',
    place: 'Магазин Candy Cat, ТРЦ Радуга',
    working_hours: '10:00-22:00',
    center: [55.400129, 86.117411],
  },
  {
    id: 14,
    city: 'Воронеж',
    adress: 'Московский пр., 129/1, ТРЦ Московский проспект ',
    place: 'Магазин Candy Cat, ТРЦ Московский проспект',
    working_hours: '10:00-22:00',
    center: [51.718142, 39.178125],
  },
];

const centerOffice = [55.845731, 37.666605]; // офис в МСК
const DEFAULT_ZOOM = 15;
const ZOOM_SETTINGS = { smooth: true, duration: 500 };

const menu = document.querySelector('.menu');

ymaps.ready(init);

function init() {
  let map = new ymaps.Map('map', {
    center: centerOffice,
    zoom: DEFAULT_ZOOM,
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Рендерим разметку
  const groupsToRender = groups
    .map(
      (item) => `
    <li class="menu__item ${
      arraysEqual(item.center, centerOffice) ? '--active' : ''
    }" data-n="${item.center[0]}" data-s="${item.center[1]}">
      <p class="menu__text">
      <span>Город:</span> ${item.city}
      </p>
      <p class="menu__text">
      <span>Адрес:</span> ${item.adress}
      </p>
      <p class="menu__text">
      <span>Место:</span> ${item.place}
      </p>
      <p class="menu__text">
      <span>Режим работы:</span><br/>
      ${item.working_hours}
      </p>
    </li>`
    )
    .join('');

  menu.insertAdjacentHTML('afterbegin', groupsToRender);
  // ___ //

  let placemarks = [];
  let currentMark = centerOffice;
  const menuItem = document.querySelectorAll('.menu__item');

  // Отрисовываем каждую метку
  for (let i = 0, l = groups.length; i < l; i++) {
    createMenuGroup(groups[i]);
  }

  // Создаем группу меток
  function createMenuGroup(item) {
    let collection = new ymaps.GeoObjectCollection(null);

    map.geoObjects.add(collection);

    let placemark = new ymaps.Placemark(
      item.center,
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/map_icon.svg',
        iconImageSize: [65, 65],
        iconImageOffset: [-0, -0],
      }
    );

    placemark.events.add('click', () => {
      currentMark = item.center;
      menuItem.forEach((item) => {
        item.classList.remove('--active');
      });
      if (arraysEqual(item.center, currentMark)) {
        menuItem[item.id - 1].classList.add('--active');
        menuItem[item.id - 1].scrollIntoView({
          block: 'nearest',
          inline: 'start',
          behavior: 'smooth',
        });
      }

      map
        .panTo(item.center, {
          flying: 1,
        })
        .then(() => map.setZoom(DEFAULT_ZOOM, ZOOM_SETTINGS));
    });

    collection.add(placemark);

    placemarks[item.id] = placemark;
  }

  // Взаимодействие с меню

  for (let i = 0, n = menuItem.length; i < n; ++i) {
    const pos = [
      parseFloat(menuItem[i].getAttribute('data-n')),
      parseFloat(menuItem[i].getAttribute('data-s')),
    ];

    menuItem[i].onclick = function () {
      currentMark = pos;

      menuItem.forEach((item) => {
        item.classList.remove('--active');
      });

      if (arraysEqual(pos, currentMark)) {
        menuItem[i].classList.add('--active');
      }
      map
        .panTo(pos, { flying: 1 })
        .then(() => map.setZoom(DEFAULT_ZOOM, ZOOM_SETTINGS));

      return false;
    };
  }
}

// tabs
const tabs = document.querySelector('.tabs');
const tabButton = document.querySelectorAll('.tabs__button');
const contents = document.querySelectorAll('.tabs__content');

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove('--active');
    });
    e.target.classList.add('--active');

    contents.forEach((content) => {
      content.classList.remove('--active');
    });
    const element = document.getElementById(id);
    element.classList.add('--active');
  }
};

// accordion
const acc = document.querySelectorAll('.accordion__question');
const defaultPadding = 30;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('--active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + defaultPadding + 'px';
    }
  });
}
