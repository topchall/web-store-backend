/*
Template Name: Minible - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Form Advanced Js File
*/

!function($) {
    "use strict";

    var AdvancedForm = function() {};
    
    AdvancedForm.prototype.init = function() {

        // Select2
        $(".select2").select2();

        $(".select2-limiting").select2({
            maximumSelectionLength: 2
        });

        $(".select2-search-disable").select2({
          minimumResultsForSearch: Infinity
      });


           //colorpicker start
    $("#colorpicker-default").spectrum();

    $("#colorpicker-showalpha").spectrum({
      showAlpha: true
    });

    $("#colorpicker-showpaletteonly").spectrum({
      showPaletteOnly: true,
      showPalette: true,
      color: '#34c38f',
      palette: [
        ['#556ee6', 'white', '#34c38f',
          'rgb(255, 128, 0);', '#50a5f1'],
        ['red', 'yellow', 'green', 'blue', 'violet']
      ]
    });

    $("#colorpicker-togglepaletteonly").spectrum({
      showPaletteOnly: true,
      togglePaletteOnly: true,
      togglePaletteMoreText: 'more',
      togglePaletteLessText: 'less',
      color: '#556ee6',
      palette: [
          ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
          ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
          ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
          ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
          ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
          ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
          ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
          ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
      ]
  });

  $("#colorpicker-showintial").spectrum({
    showInitial: true
  });

  $("#colorpicker-showinput-intial").spectrum({
    showInitial: true,
    showInput: true
  });


        //Bootstrap-TouchSpin
        var defaultOptions = {
        };

        // touchspin
        $('[data-toggle="touchspin"]').each(function (idx, obj) {
            var objOptions = $.extend({}, defaultOptions, $(obj).data());
            $(obj).TouchSpin(objOptions);
        });

        $("input[name='demo3_21']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        });
        $("input[name='demo3_22']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        });

        $("input[name='demo_vertical']").TouchSpin({
            verticalbuttons: true
        });


    },
    //init
    $.AdvancedForm = new AdvancedForm, $.AdvancedForm.Constructor = AdvancedForm
}(window.jQuery),


 //Datepicker
 function ($) {
    "use strict";
    $.AdvancedForm.init();
  }(window.jQuery);
