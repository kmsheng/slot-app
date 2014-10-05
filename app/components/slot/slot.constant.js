(function() {
  'use strict';

  angular.module('slotApp')
    .constant('SLOT_CONFIG_FIRST', {
      tricking: true,
      paneSize: 'xlg',
      textList: [
        {text: "來賓A"},
        {text: "來賓B"},
        {text: "來賓C"},
        {text: "來賓D"},
        {text: "來賓E"}
      ]
    })
    .constant('SLOT_CONFIG_SECOND', {
      paneSize: 'lg',
      textList: [
        {text: '吃酸爆搗蛋糖'},
        {text: '穿所有的萬聖節道具'},
        {text: '喝吸血鬼飲料'},
        {text: '重選對象'},
        {text: '再加一位'}
      ]
    });
})();
