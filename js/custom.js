/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/

//window.onerror = function (msg, url, line, col, exception) { BX.ajax.get('/ajax/error_log_logic.php', { data: { msg: msg, exception: exception, url: url, line: line, col: col } }); }

$(document).ready(function () {
  function makeActive(element, id) {
    $(".tabs_v2 .nav-tabs > li.active").removeClass("active")
    $(`.tabs_v2 .nav-tabs > li > a[href="#${id}"]`).closest('li').addClass("active")
  }

  function isElementVisible(element, percentVisible) {
    let rect = element.getBoundingClientRect()
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
  }

  $(window).bind('mousewheel DOMMouseScroll', function () {
    const myElement = document.querySelectorAll(".tabs_v2 .tab-content .tab-pane")
    myElement.forEach((el) => {
      const elementId = el.getAttribute('id')
      if (isElementVisible(el, 50)) {
        makeActive(el, elementId)
      } 
    })
  })

 /*  document.addEventListener('scroll', function(e) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const item = entry.target.getAttribute('id')
          document.querySelector('.tabs_v2 .nav-tabs > li.active').classList.remove('active')
          document.querySelector(`.tabs_v2 .nav-tabs > li > a[href=${item}]`).classList.add('active')
        }
      })
    })

    const tabs = document.querySelectorAll('.tabs_v2 .tab-content .tab-pane')

    tabs.forEach(tab => {
      observer.observe(tab)
    })
  })
 */
  /* function showDetailCalendar() {
    $(".productinfo_v2 .search-widget").show()
    $(".productinfo_v2__selected").hide()
    $(".productinfo_v2__selected").removeClass("dates_result_v2")
  }
  function hideDetailCalendar() {
    $(".productinfo_v2 .search-widget").hide()
    $(".productinfo_v2__selected").show()
    $(".productinfo_v2__selected").addClass("dates_result_v2")
  }

  $('[data-action="showdatewidget"]').on("click", function (e) {
    e.preventDefault()
    showDetailCalendar()
  }) */

  const stickySidebar = (element, top, mobile, newid, actionTo, actionFrom) => {
    if (mobile || jQuery(document).width() > 1023) {
      if (document.querySelector(element)) {
        var a = document.querySelector(element),
          b = null,
          P = top
        window.addEventListener("scroll", Ascroll, false)
        document.body.addEventListener("scroll", Ascroll, false)

        function Ascroll() {
          if (b == null && !document.querySelector(`#${newid}`)) {
            var Sa = getComputedStyle(a, ""),
              s = ""
            for (var i = 0; i < Sa.length; i++) {
              if (
                Sa[i].indexOf("overflow") == 0 ||
                Sa[i].indexOf("padding") == 0 ||
                Sa[i].indexOf("border") == 0 ||
                Sa[i].indexOf("outline") == 0 ||
                Sa[i].indexOf("box-shadow") == 0 ||
                Sa[i].indexOf("background") == 0
              ) {
                s += Sa[i] + ": " + Sa.getPropertyValue(Sa[i]) + "; "
              }
            }
            b = document.createElement("div")
            b.setAttribute('id', newid)
            b.style.cssText =
              s + " box-sizing: border-box; width: " + a.offsetWidth + "px;"
            a.insertBefore(b, a.firstChild)
            var l = a.childNodes.length
            for (var i = 1; i < l; i++) {
              b.appendChild(a.childNodes[1])
            }
            a.style.height = b.getBoundingClientRect().height + "px"
            a.style.padding = "0"
            a.style.border = "0"
          }
          var Ra = a.getBoundingClientRect(),
            R = Math.round(
              Ra.top +
                b.getBoundingClientRect().height -
                document.querySelector("#footer").getBoundingClientRect().top +
                0
            )
          if (Ra.top - P <= 0) {
            if (top && Ra.top - P <= R) {
              b.className = "stop"
              b.style.top = -R + "px"
            } else {
              b.className = "stickybar"
              b.style.top = P + "px"
            }
            if (actionTo) {
              actionTo()
            }
          } else {
            b.className = ""
            b.style.top = ""

            if (actionFrom) {
              actionFrom()
            }
          }
          window.addEventListener(
            "resize",
            function () {
              a.children[0].style.width = getComputedStyle(a, "").width
            },
            false
          )
        }
      }
    }
  }

  stickySidebar(".detail_v2 .product-action", 30, false, 'oncebar')
  stickySidebar(
    ".tabs_v2 .tabs",
    0,
    true,
    'oncetab',
    () => $('[data-if="phototab"]').show(),
    () => $('[data-if="phototab"]').hide()
  )

  $('.tabs_v2 [data-toggle="tab"]').on("click", function (e) {
    e.preventDefault()
    const tab = $(this).attr("href").substring(1)
    const el = $(`#${tab}`)
  
    if (el && el.length) {
      let destination = el.offset().top - 130
      $("html:not(:animated),body:not(:animated)").animate(
        {
          scrollTop: destination,
        },
        400
      )
    }
  })
/*   $('[data-toggle="mapobject"]').on("click", function () {
    $('[data-toggletarget="mapobject"]').addClass("active")
  })
  $('[data-close="mapobject"]').on("click", function () {
    $('[data-toggletarget="mapobject"]').removeClass("active")
  }) */
  $(document).on("click", ".mobile_regions .city_item", function (e) {
    e.preventDefault()
    var _this = $(this)
    $.removeCookie("current_region")
    $.cookie("current_region", _this.data("id"), {
      path: "/",
      domain: "next.aspro-partner.ru",
    })
  })

  $(document).on(
    "click",
    ".region_wrapper .more_item:not(.current) span",
    function (e) {
      $.removeCookie("current_region")
      $.cookie("current_region", $(this).data("region_id"), {
        path: "/",
        domain: "next.aspro-partner.ru",
      })
    }
  )

  $(document).on("click", ".confirm_region .aprove", function (e) {
    var _this = $(this)
    $.removeCookie("current_region")
    $.cookie("current_region", _this.data("id"), {
      path: "/",
      domain: "next.aspro-partner.ru",
    })
  })

  $(document).on("click", ".cities .item a", function (e) {
    e.preventDefault()
    var _this = $(this)
    $.removeCookie("current_region")
    $.cookie("current_region", _this.data("id"), {
      path: "/",
      domain: "next.aspro-partner.ru",
    })
  })

  $(document).on("click", ".popup_regions .ui-menu a", function (e) {
    e.preventDefault()
    var _this = $(this)
    var href = _this.attr("href")
    if (typeof arRegions !== "undefined" && arRegions.length) {
      $.removeCookie("current_region")
      for (i in arRegions) {
        var region = arRegions[i]
        if (region.HREF == href) {
          $.cookie("current_region", region.ID, {
            path: "/",
            domain: "next.aspro-partner.ru",
          })
        }
      }
    }
    location.href = href
  })
})

document.addEventListener("DOMContentLoaded", function () {
  // Скрыть пункт "Анапа"
  var region = document.querySelector('.menu.middle.mobile_regions');
  if (region) region.style.display = 'none';

  // Скрыть блок с телефоном
  var phone = document.querySelector('.menu.middle.mobile-menu-contacts');
  if (phone) phone.style.display = 'none';
});
