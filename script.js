jQuery(document).ready(function ($) {
  var counter = 1;
  var maxCounter = 20; // Define the maximum counter value

  $(".rmorris-circle-slider-nav-prev").click(function () {
    counter--;
    if (counter < 1) {
      counter = maxCounter; // Set counter to maxCounter when it goes below 1
    }
    updateCounter(counter);
  });

  $(".rmorris-circle-slider-nav-next").click(function () {
    counter++;
    if (counter > maxCounter) {
      counter = 1; // Reset to 1 when it exceeds maxCounter
    }
    updateCounter(counter);
  });

  function updateCounter(value) {
    $(".rmorris-circle-slider")
      .removeClass()
      .addClass("rmorris-circle-slider")
      .addClass("rmorris-circle-slider-" + value);
  }
});
jQuery(document).ready(function ($) {
  $(".rmorris-circle-slider-nav-next").on("click", function () {
    moveSlider(false); // Move slider to previous item
  });

  $(".rmorris-circle-slider-nav-prev").on("click", function () {
    moveSlider(true); // Move slider to next item
  });

  function moveSlider(isNext) {
    var activeItem = $(".rmorris-circle-slider-item-active");
    var targetItem;

    if (isNext) {
      targetItem = activeItem.next(".rmorris-circle-slider-item");
      if (targetItem.length === 0) {
        targetItem = $(".rmorris-circle-slider-item").first();
      }
    } else {
      targetItem = activeItem.prev(".rmorris-circle-slider-item");
      if (targetItem.length === 0) {
        targetItem = $(".rmorris-circle-slider-item").last();
      }
    }

    $(".rmorris-circle-slider-item").removeClass("rmorris-circle-slider-item-active");
    targetItem.addClass("rmorris-circle-slider-item-active");

    // Handling other active classes
    var activeClasses = ["active-bt1", "active-bt2", "active-tp2", "active-tp1"];
    activeClasses.forEach(function (classSuffix) {
      var activeClassItem = $(".rmorris-circle-slider-item").filter(".rmorris-circle-slider-item-" + classSuffix);
      var targetClassItem;

      if (isNext) {
        targetClassItem = activeClassItem.next(".rmorris-circle-slider-item");
        if (targetClassItem.length === 0) {
          targetClassItem = $(".rmorris-circle-slider-item").first();
        }
      } else {
        targetClassItem = activeClassItem.prev(".rmorris-circle-slider-item");
        if (targetClassItem.length === 0) {
          targetClassItem = $(".rmorris-circle-slider-item").last();
        }
      }

      $(".rmorris-circle-slider-item").removeClass("rmorris-circle-slider-item-" + classSuffix);
      targetClassItem.addClass("rmorris-circle-slider-item-" + classSuffix);
    });
  }
});
jQuery(document).ready(function ($) {
  var degree = 0;

  function rotateCircle() {
    if ($(window).width() <= 767) {
      degree = -90;
    } else {
      degree = 0;
    }
    $(".rmorris-circle").css("transform", "rotate(" + degree + "deg)");
  }

  rotateCircle();

  $(".rmorris-circle-slider-nav-next").on("click", function () {
    degree += 18;
    $(".rmorris-circle").css("transform", "rotate(" + degree + "deg)");
  });

  $(".rmorris-circle-slider-nav-prev").on("click", function () {
    degree -= 18;
    $(".rmorris-circle").css("transform", "rotate(" + degree + "deg)");
  });

  $(window).resize(function () {
    rotateCircle();
  });
});
jQuery(document).ready(function ($) {
  // Next button click event handler
  $(".rmorris-circle-slider-nav-next").click(function () {
    var $activeImg = $(".rmorris-circle-slider-images-inner .rmorris-circle-slider-img-active");
    var $nextImg = $activeImg.next("img");

    // Check if there's a next image
    if ($nextImg.length) {
      $activeImg.removeClass("rmorris-circle-slider-img-active");
      $nextImg.addClass("rmorris-circle-slider-img-active");
    } else {
      // If no next image, loop back to the first image
      $activeImg.removeClass("rmorris-circle-slider-img-active");
      $(".rmorris-circle-slider-images-inner img:first-child").addClass("rmorris-circle-slider-img-active");
    }
  });

  // Previous button click event handler
  $(".rmorris-circle-slider-nav-prev").click(function () {
    var $activeImg = $(".rmorris-circle-slider-images-inner .rmorris-circle-slider-img-active");
    var $prevImg = $activeImg.prev("img");

    // Check if there's a previous image
    if ($prevImg.length) {
      $activeImg.removeClass("rmorris-circle-slider-img-active");
      $prevImg.addClass("rmorris-circle-slider-img-active");
    } else {
      // If no previous image, loop back to the last image
      $activeImg.removeClass("rmorris-circle-slider-img-active");
      $(".rmorris-circle-slider-images-inner img:last-child").addClass("rmorris-circle-slider-img-active");
    }
  });
});
