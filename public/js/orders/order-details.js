$(document).ready(function () {
  console.log("page is ready :)");

  var full_url = document.URL;
  var url_array = full_url.split("/");
  var temp_id = url_array[url_array.length - 1];
  var frames1 = [];
  var frames2 = [];

  class FrameSpecs {
    constructor(
      id, order_id, temp_id,
      image_height, image_width, mat_size, float_size, face_width, frame_depth,
      drymount_cost, drymount_cost_type, extras_cost, float_cost, flush_cost,
      glazing_cost, glazing_cost_type, mat_cost, material_cost, spacer_cost,
      strainer_cost, frame_extra_cost, frame_discount_percent) {
      this.id = id;
      this.order_id = order_id;
      this.temp_id = temp_id;
      this.image_width = image_width;
      this.image_height = image_height;
      this.mat_size = mat_size;
      this.float_size = float_size;
      this.face_width = face_width;
      this.frame_depth = frame_depth;
      this.drymount_cost = drymount_cost;
      this.drymount_cost_type = drymount_cost_type;
      this.extras_cost = extras_cost;
      this.float_cost = float_cost;
      this.flush_cost = flush_cost;
      this.glazing_cost = glazing_cost;
      this.glazing_cost_type = glazing_cost_type;
      this.mat_cost = mat_cost;
      this.material_cost = material_cost;
      this.spacer_cost = spacer_cost;
      this.strainer_cost = strainer_cost;
      this.frame_extra_cost = frame_extra_cost;
      this.frame_discount_percent = frame_discount_percent;
    }
  };

  class Frame {
    constructor(id, window_width, window_height, frame_size, united_inch, frame_subtotal, frame_total) {
      this.id = id;
      this.window_width = window_width;
      this.window_height = window_height;
      this.frame_size = frame_size;
      this.united_inch = united_inch;
      this.frame_subtotal = frame_subtotal;
      this.frame_total = frame_total;
    }
  };

  $.ajax({
    url: "/api/frames/temp/" + temp_id,
    method: "GET"
  }).done(function (response) {
    for (i = 0; i < response.length; i++) {
      let newFrame1 = new FrameSpecs(
        response[i].id,
        response[i].order_id,
        response[i].temp_id,
        response[i].image_width,
        response[i].image_height,
        response[i].mat_size,
        response[i].float_size,
        response[i].window_width,
        response[i].window_height,
        response[i].face_width,
        response[i].frame_depth,
        response[i].drymount_cost,
        response[i].drymount_cost_type,
        response[i].extras_cost,
        response[i].float_cost,
        response[i].flush_cost,
        response[i].glazing_cost,
        response[i].glazing_cost_type,
        response[i].mat_cost,
        response[i].material_cost,
        response[i].spacer_cost,
        response[i].strainer_cost,
        response[i].frame_extra_cost,
        response[i].frame_discount_percent
      );

      // calculate window_width;
      let window_width = getWindowWidth(response[i].image_width, response[i].mat_size, response[i].float_size);
      // calculate window_height;
      let window_height = getWindowHeight(response[i].image_height, response[i].mat_size, response[i].float_size);
      // calculate frame_outer_width;
      let frame_outer_width = getFrameWidth(window_width, response[i].face_width);
      // calculate frame_outer_height;
      let frame_outer_height = getFrameHeight(window_height, response[i].face_width);
      // calculate frame size;
      let frame_size = getFrameSize(window_height, window_width, response[i].face_width);
      // calculate united_inch;
      let united_inch = getUnitedInch(frame_size);
      // check for sizing minimums and oversize costs
      checkMinimum(united_inch);
      checkOversize(united_inch);
      // calculate frame_subtotal;
      let over_size_percent = checkOversize();
      // calculate frame_total;
      let frame_subtotal = getSubtotal(united_inch,
        response[i].drymount_cost,
        response[i].drymount_cost_type,
        response[i].extras_cost,
        response[i].float_cost,
        response[i].flush_cost,
        response[i].glazing_cost,
        response[i].glazing_cost_type,
        response[i].mat_cost,
        response[i].material_cost,
        response[i].spacer_cost,
        response[i].strainer_cost,
        response[i].frame_extra_cost);
      // calculate frame_total;
      let frame_total = getTotal(frame_subtotal,over_size_percent, response[i].frame_discount_percent);

      let newFrame2 = new Frame(response[i].id, window_width, window_height, frame_outer_width, frame_outer_height, frame_size, united_inch, frame_subtotal, frame_total);

      frames1.push(newFrame1);
      frames2.push(newFrame2);
    };
    console.log(frames1);
    console.log(frames2);
  });


  $("#submit-order-details-button").click(function () {

    console.log(temp_id);

    // $.ajax({
    //     url: "/api/temp/orders/" + temp_id,
    //     type: "PUT",
    //     data: {

    //     },
    //     dataType: "json",
    //     beforeSend: function (x) {
    //         if (x && x.overrideMimeType) {
    //             x.overrideMimeType("application/j-son;charset=UTF-8");
    //         }
    //     }
    // }).done(function(response) {
    //     console.log(response)
    // })

  });

  getWindowWidth = function (image_width, mat_size, float_size) {
    window_width = image_width + (mat_size * 2) + (float_size * 2);
  };

  getWindowHeight = function (image_height, mat_size, float_size) {
    window_height = image_height + (mat_size * 2) + (float_size * 2);
  };

  getFrameWidth = function (window_width, face_width) {
    frame_outer_width = window_width + (face_width * 2);
  };

  getFrameHeight = function (window_height, face_width) {
    frame_outer_height = window_height + (face_width * 2);
  };

  roundHalf = function (num) { return (Math.round(num * 2) / 2) };

  getFrameSize = function (window_height, window_width, face_width) {
    frame_size = roundHalf(window_height + window_width + (2 * face_width));
  }

  getUnitedInch = function (frame_size) {
    united_inch = roundHalf((frame_size) / 6);
  };

  checkMinimum = function (united_inch) {
    if (united_inch < 5) {
      united_inch = 5;
    }
  };

  checkOversize = function (united_inch) {
    if (united_inch >= 15 && united_inch <= 19.5) {
      over_size_percent = 1.2;
    } else if (united_inch >= 20 && united_inch <= 24.5) {
      over_size_percent = 1.3;
    } else if (united_inch >= 25) {
      over_size_percent = 1.4;
    } else {
      over_size_percent = 1;
    };
  };

  getSubtotal = function (united_inch, drymount_cost, drymount_cost_type, extras_cost, float_cost, flush_cost, glazing_cost, glazing_cost_type, mat_cost, material_cost, spacer_cost, strainer_cost, frame_extra_cost) {
    if (drymount_cost_type != "per foot") {
      frame_extra_cost = frame_extra_cost + drymount_cost;
      drymount_cost = 0;
    };

    if (glazing_cost_type != "per foot") {
      frame_extra_cost = frame_extra_cost + glazing_cost;
      glazing_cost = 0;
    };

    subtotal = (united_inch * (drymount_cost + extras_cost + float_cost + flush_cost + glazing_cost + mat_cost + material_cost + spacer_cost + strainer_cost)) + frame_extra_cost;
  };

  getTotal = function (subtotal, frame_discount_percent, over_size_percent) {
    frame_total = subtotal * frame_discount_percent * over_size_percent
  };

});