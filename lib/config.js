Accounts.config({
  forbidClientAccountCreation: true
});

config34377 = {
  gmt: 5
}

Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
}