angular.module('slide', [])
  .controller('slideController', ['$interval',function($interval) {
    var slide = this;

    var scale = 600;
    slide.list = [
      './images/1.jpg',
      './images/2.jpg',
      './images/3.jpg'
    ];

    slide.locate = [];
    for (var i = 0; i <slide.list.length; i++) {
      slide.locate.push(i+1);
    }

    slide.offset = 0;
    slide.active = 1;

    var changeOffset = $interval(function () {
      slide.offset === -scale * (slide.list.length-1) ? slide.offset = 0 : slide.offset -= scale;
      slide.active = slide.offset / -scale + 1;
    }, 3000);

    slide.toggle = function(index) {
      slide.offset = index * -scale;
      slide.active = index + 1;
    }

    slide.isActive = function(item) {
      return item  === slide.active;
    }

  }]);
