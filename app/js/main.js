!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */function(module,exports){eval("/* блок с функциями*/\n$(function () {\n  /* звездный рейтинг*/\n  $(\".my-rating\").starRating({\n    initialRating: 5,\n    strokeColor: '#ffa726',\n    strokeWidth: 10,\n    starSize: 12\n  });\n  /*слайдер*/\n\n  $('.trend__slider').slick({\n    arrows: false,\n    dots: true,\n    infinite: false,\n    speed: 300,\n    slidesToShow: 4,\n    slidesToScroll: 4,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 3,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    } // You can unslick at a given breakpoint now by adding:\n    // settings: \"unslick\"\n    // instead of a settings object\n    ]\n  });\n  /*филтр категорий*/\n\n  function app() {\n    /*переменная для масива кнопок(использует клас) */\n    var buttons = document.querySelectorAll('.products__category-link');\n    /*переменная для масива карточек(использует клас) */\n\n    var cards = document.querySelectorAll('.cart__info');\n    /*функция фильтрации */\n\n    function filter(category, items) {\n      items.forEach(function (item) {\n        var isItemFiltered = !item.classList.contains(category);\n        var isShowAll = category.toLowerCase() === 'all';\n\n        if (isItemFiltered && !isShowAll) {\n          item.classList.add('anime');\n        } else {\n          item.classList.remove('hide');\n          item.classList.remove('anime');\n        }\n      });\n    }\n\n    buttons.forEach(function (button) {\n      button.addEventListener('click', function () {\n        var currentCategory = button.dataset.filter;\n        filter(currentCategory, cards);\n      });\n    });\n    cards.forEach(function (card) {\n      card.ontransitionend = function () {\n        if (card.classList.contains('anime')) {\n          card.classList.add('hide');\n        }\n      };\n    });\n  }\n\n  app();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?")}});
//# sourceMappingURL=main.js.map