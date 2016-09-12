
      $(document).ready( function() {
      	$('.my-slider').unslider();
      	$(".zero").click(function() {
      		console.log("clicked;")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "vertical",
          closeButton: "X",
      		text: "Textured Cloth",
      		image:"images/Textured Cloth.jpg",
      		date_info: "DATE OF COMPLETION: Oct. 2014",
      		body_info: "Mediums: pastels "
      	});
      	$(".sidemenu").openMenu();
      });
      $(".one").click(function() {
      		console.log("clicked the second")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
      		text: "Splash Forest",
      		image:"images/Paint Splash Forest.png",
      		date_info: "DATE OF COMPLETION: Oct. 2014",
      		body_info: "Mediums: Watercolors "
      		});
      	$(".sidemenu").openMenu();
      });
      $(".two").click(function() {
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
      		text: "Michigan Oil",
      		image:"images/Michigan Oil Painting-Wolf Kahn Inspired.jpg",
      		date_info: "DATE OF COMPLETION: Aug. 2016",
      		body_info: "Mediums: Oil Paints, Wolf-Kahn Inspired "

      	});
      	$(".sidemenu").openMenu();
      });
      $(".three").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Abstract Water",
          image:"images/abstract.jpg",
          date_info: "DATE OF COMPLETION: Aug. 2016",
          body_info: "Mediums: Oil "

        });
        $(".sidemenu").openMenu();
      });
      $(".four").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Autumn Trees",
          image:"images/woods_shot.jpg",
          date_info: "DATE OF COMPLETION: Aug. 2016",
          body_info: "Mediums: Crayon and Oil "
        });
        $(".sidemenu").openMenu();
      });
      $(".five").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Blue Trees",
          image:"images/trees.jpg",
          date_info: "DATE OF COMPLETION: Aug. 2016",
          body_info: "Mediums: Crayon and Oil "
        });
        $(".sidemenu").openMenu();
      });
});
