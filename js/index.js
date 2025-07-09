function closeByClickOutside(element, button, callback) {
  $(document).click(function (event) {
    if (!$(event.target).closest(`${element},${button}`).length) {
      $(button).removeClass("active")
      $(element).removeClass("active")
      // or
      //$(element).hide()
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(button).removeClass("active")
      $(element).removeClass("active")
      // or
      //$(element).hide()
    }
  })

  if (callback instanceof Function) {
    callback()
  }
}


$(document).ready(function () {

	function cardImagesSlider(){hoverSlider.init({})}				
cardImagesSlider();
  closeByClickOutside(
    "[data-toggleblock='suggestions-list']",
    "[data-togglefocus='suggestions-list']"
  )
  closeByClickOutside(
    "[data-toggleblock='select-guests__main']",
    "[data-toggleclick='select-guests__main']"
  )

  $("[data-togglefocus='suggestions-list']").on("focus", function () {
    $("[data-toggleblock='suggestions-list']").addClass("active")
  })

  $(".search-widget-select-city .val").on("click", function () {
    $("input#suggest").val($(this).text())
  })
  $("[data-toggleclick='select-guests__main']").on("click", function () {
    $('[data-toggleblock="select-guests__main"]').toggleClass("active")
  })

 $("[data-toggleblock='select-guests__main'] [data-toggleclick='select-guests__main']").on("click", function (e) {
e.preventDefault()
    $('[data-toggleblock="select-guests__main"]').removeClass("active")
  })

  $('.suggestions-list-elem').on("click", function() {
    $('.suggest-input').val($(this).find('.suggestions-list-elem--title').text().replace(/,/g, ''))
    $("[data-toggleblock='suggestions-list']").removeClass("active")
  })
  $('.btnfilter').on("click", function() {
    $(".side-menu").toggleClass("active")
  })
  $('.side-menu .icon-app-arrow-left').on("click", function() {
    $(".side-menu").toggleClass("active")
  })

  $('[data-quantitybtn="plus"]').on('click', function() {
    
    let current =  +parseFloat($(this).closest('[data-quantity]').find('[data-quantitytext]').text()) + 1
    console.log(current)
    $(this).closest('[data-quantity]').find('[data-quantitytext]').text(current)
    $(this).closest('[data-quantity]').find('[data-quantityvalue]').val(current)
    changeAdultChild()
  })
  $('[data-quantitybtn="minus"]').on('click', function() {
    let current =  +parseFloat($(this).closest('[data-quantity]').find('[data-quantitytext]').text()) - 1
    if (current > -1) {
      $(this).closest('[data-quantity]').find('[data-quantitytext]').text(current)
      $(this).closest('[data-quantity]').find('[data-quantityvalue]').val(current)
    }
    changeAdultChild()
   
  })

  $(('input#23304df336f9f8a')).on('change', function() {
    changeAdultChild()
  })

  function changeAdultChild() {
    const $result = $('.select-guests--btn div:not([class])')
    let adult = "взрослых"
    let child = "без детей"
    let pets = ""
    const adultVal = +$('[data-quantitytext="adults"]').text()
    const childtVal = +$('[data-quantitytext="child"]').text()
    if (adultVal === 1) {
      adult = adultVal + " взрослый"
    } 
    if (adultVal === 0) {
      adult = " без взрослых"
    } 
    if (adultVal > 1) {
      adult = adultVal + " взрослых"
    }
    if (childtVal === 1) {
      child = childtVal + " ребенок"
    } 
    if (childtVal > 1) {
      child = childtVal + " детей"
    } 
    if (childtVal === 0) {
      child = " без детей"
    } 
    if ($('input#23304df336f9f8a').is(':checked')) {
      pets = ", с питомцами"
    } else {
      pets = ""
    }
    let value = adult + ", " + child + pets
    $result.text(value)
  }




  if (jQuery("#sliderprice1").length) {



  jQuery("#sliderprice1").slider({
    min: +jQuery("input#limitMin1").val(),
    max: +jQuery("input#limitMax1").val(),
    values: [+jQuery("input#limitMin1").val(), +jQuery("input#limitMax1").val()],
    range: true,
    stop: function (event, ui) {
      jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values", 0));
      jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values", 1));

      //var val1 = $test1.prop("value");
      //$test1.prop("value", prettify(val1));

      if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
        jQuery("input#minCost1").addClass('notchanged');
      } else {
        jQuery("input#minCost1").removeClass('notchanged');
      }

      if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
        jQuery("input#maxCost1").addClass('notchanged');
      } else {
        jQuery("input#maxCost1").removeClass('notchanged');
      }


    },
    slide: function (event, ui) {
      jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values", 0));
      jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values", 1));

      if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
        jQuery("input#minCost1").addClass('notchanged');
      } else {
        jQuery("input#minCost1").removeClass('notchanged');
      }

      if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
        jQuery("input#maxCost1").addClass('notchanged');
      } else {
        jQuery("input#maxCost1").removeClass('notchanged');
      }


      //var val1 = $test1.prop("value");
      // $test1.prop("value", prettify(val1));
    }
  });


  jQuery("input#maxCost1").change(function () {

    var value1 = jQuery("input#minCost1").val();
    var value2 = jQuery("input#maxCost1").val();

    if (value2 > (+jQuery("input#limitMax1").val())) {
      value2 = +jQuery("input#limitMax1").val();
      jQuery("input#maxCost1").val(+jQuery("input#limitMax1").val())
    }


    jQuery("#sliderprice1").slider("values", 1, value2);
    $test1.prop("value", prettify(val1));
    var val1 = $test1.prop("value");

    $test1.prop("value", prettify(val1));

    if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
      jQuery("input#minCost1").addClass('notchanged');
    } else {
      jQuery("input#minCost1").removeClass('notchanged');
    }

    if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
      jQuery("input#maxCost1").addClass('notchanged');
    } else {
      jQuery("input#maxCost1").removeClass('notchanged');
    }

  });

  jQuery("input#minCost1").change(function () {

    var value1 = jQuery("input#minCost1").val();
    var value2 = jQuery("input#maxCost1").val();

    if (value2 < (+jQuery("input#limitMin1").val())) {
      value2 = +jQuery("input#limitMin1").val();
      jQuery("input#minCost1").val(+jQuery("input#limitMin1").val())
    }


    jQuery("#sliderprice1").slider("values", 0, value1);
    var val1 = $test1.prop("value");
    $test1.prop("value", prettify(val1));

    var val1 = $test1.prop("value");
    $test1.prop("value", prettify(val1));

    if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
      jQuery("input#minCost1").addClass('notchanged');
    } else {
      jQuery("input#minCost1").removeClass('notchanged');
    }

    if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
      jQuery("input#maxCost1").addClass('notchanged');
    } else {
      jQuery("input#maxCost1").removeClass('notchanged');
    }

  });
}
})
