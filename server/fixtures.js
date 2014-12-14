if (Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
    username: 'ivanzolotov',
    email: 'ivanzolotov@ivanzolotov.ru',
    password: '12345678',
    profile: {
      first_name: 'Иван',
      last_name: 'Золотов'
    }
  });
}

if (Events.find().count() === 0) {

  var time = new Date()
  time.setUTCFullYear(2014)
  time.setUTCMonth(10 - 1)
  time.setUTCDate(28)
  time.setUTCHours(17)
  time.setUTCMinutes(20)
  time.addHours(-config34377.gmt)
  Events.insert({
    title: 'Синхронный турнир МГТУ',
    time: time,
    gmt: 5,
    allDay: false,
    place: 'Библиотека на Кузнецова',
    picture: 'http://share.ivanzolotov.s3.amazonaws.com/2014/JztcF7x2f4I.jpg',
    description: '<p>Тестовое описание</p>',
    submitTime: new Date().getTime()
  });

  var time = new Date()
  time.setUTCFullYear(2014)
  time.setUTCMonth(11 - 1)
  time.setUTCDate(11)
  time.setUTCHours(17)
  time.setUTCMinutes(20)
  time.addHours(-config34377.gmt)
  Events.insert({
    title: 'Открытое синхронное индивидуальное первенство 2014. Этап 2',
    time: time,
    gmt: 5,
    allDay: false,
    place: 'Библиотека на Кузнецова',
    picture: 'http://share.ivanzolotov.s3.amazonaws.com/2014/JztcF7x2f4I.jpg',
    description: '<p>Тестовое описание</p>',
    submitTime: new Date().getTime()
  });

  var time = new Date()
  time.setUTCFullYear(2014)
  time.setUTCMonth(11 - 1)
  time.setUTCDate(16)
  time.setUTCHours(12)
  time.setUTCMinutes(0)
  time.addHours(-config34377.gmt)
  Events.insert({
    title: 'XII открытый всероссийский синхронный чемпионат. Этап 3',
    time: time,
    gmt: 5,
    allDay: false,
    place: 'Школа № 1',
    picture: 'http://share.ivanzolotov.s3.amazonaws.com/2014/JztcF7x2f4I.jpg',
    description: '<p>Тестовое описание</p>',
    submitTime: new Date().getTime()
  });

  var time = new Date()
  time.setUTCFullYear(2014)
  time.setUTCMonth(12 - 1)
  time.setUTCDate(7)
  time.setUTCHours(12)
  time.setUTCMinutes(0)
  time.addHours(-config34377.gmt)
  Events.insert({
    title: 'Открытый кубок России 2014',
    time: time,
    gmt: 5,
    allDay: false,
    place: 'Школа № 1',
    picture: 'http://share.ivanzolotov.s3.amazonaws.com/2014/JztcF7x2f4I.jpg',
    description: '<p>Тестовое описание</p>',
    submitTime: new Date().getTime()
  });

};