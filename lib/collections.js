Events = new Meteor.Collection('events');

// title*:
// time*:
// gmt:
// allDay:
// place:
// picture:
// description:
// submitTime:
// published:
// —
// policy
// price
// address
// category: развлечения, ночная жизнь, культура, образование, политика и общество, детское, спорт, коммерческое
// format: концерт, представление, вебинар, круглый стол, семинар, лекция, мастер-класс, тренинг, вечеринка, игра, телетрансляция, заседание, субботник
// preset: none, chgk, заседание думы

ownsEvent = function(userId, event) {
  return event && event.submitUser === userId;
}

Events.allow({
  update: function(userId, event) {return ownsEvent(userId, event)},
  remove: function(userId, event) {return ownsEvent(userId, event)}
});

Events.deny({
  update: function(userId, event, fieldNames) {
    // разрешаем редактировать только следующие поля:
    return (_.without(fieldNames, 'title', 'allDay', 'place', 'time', 'gmt', 'picture', 'description').length > 0);
  }
});
