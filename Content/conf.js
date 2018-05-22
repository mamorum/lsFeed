﻿class Conf {
  constructor(json) {
    if ('feeds' in json) {
      this.feeds=json.feeds;
    } else { //-> default
      this.feeds=[];
    }
  }
}
class ConfApi {
  static read(done) {
    $.ajax({
      type: 'GET', url: '/read'
    }).done((data) => {
      done(new Conf(data));
    });
  }
  static write(conf, done) {    
    $.ajax({
      type: 'POST', url: '/write',
      data: JSON.stringify(conf),
      contentType: 'application/json;charset=utf-8'
    }).done(done);
  }
}
