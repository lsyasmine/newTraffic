import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    
  function DropDown(el) {
      this.dd = el;
      this.placeholder = this.dd.children('span');
      this.opts = this.dd.find('ul.drop li');
      this.val = '';
      this.index = -1;
      this.initEvents();
  }
  
  DropDown.prototype = {
      initEvents: function () {
          var obj = this;
          obj.dd.on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              $(this).toggleClass('active');
          });
          obj.opts.on('click', function () {
              var opt = $(this);
              obj.val = opt.text();
              obj.index = opt.index();
              obj.placeholder.text(obj.val);
              opt.siblings().removeClass('selected');
              opt.filter(':contains("' + obj.val + '")').addClass('selected');
          }).change();
      },
      getValue: function () {
          return this.val;
      },
      getIndex: function () {
          return this.index;
      }
  };
  
  $(function () {
      // create new variable for each menu
      var dd1 = new DropDown($('#noble-gases'));
      // var dd2 = new DropDown($('#other-gases'));
      $(document).click(function () {
          // close menu on document click
          $('.wrap-drop').removeClass('active');
      });
  });
}
}
