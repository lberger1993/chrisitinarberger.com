      $(document).ready( function() {
      	$('.my-slider').unslider();
      	$(".zero").click(function() {
      		console.log("clicked;")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "vertical",
          closeButton: "X",
      		text: "Peppers",
      		image:"images/peppers.jpg",
      		date_info: "DATE OF COMPLETION: May 2016",
      		body_info: "Mediums: Prismacolor Pencils", 
          insp: "Inspiration: Summertime and my favorite vegetable. I was inspired by the great detail in the shape and color of bell peppers."
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
      		text: "Charcoal Walker ",
      		image:"images/charcole_walker.jpg",
      		date_info: "DATE OF COMPLETION: May 2014",
      		body_info: "Mediums: Charcoal Pencil "
      		});
      	$(".sidemenu").openMenu();
      });
      $(".two").click(function() {
          console.log("clicked the second")
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Skeleton Sketch ",
          image:"images/SkeletonSketch.jpg",
          date_info: "DATE OF COMPLETION: Feb. 2014",
          body_info: "Mediums: Pencil ", 
          insp: "Inspiration: Intricacies and shadows of human skeletons. Techniques using different pencil leads."
          });
        $(".sidemenu").openMenu();
      });
      $(".three").click(function() {
          console.log("clicked the second")
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Bicycle ",
          image:"images/bike_p.jpg",
          date_info: "DATE OF COMPLETION: Oct. 2014",
          body_info: "Mediums: Colored pencil", 
          insp: "INSPIRATION: Bicycle shape and outline. Only colored in the background using yellow colored pencils."
          });
        $(".sidemenu").openMenu();
      });
      $(".four").click(function() {
          console.log("clicked the second")
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Metal Teapot ",
          image:"images/teapot.jpg",
          date_info: "DATE OF COMPLETION: March 2016",
          body_info: "Mediums: Charcol Pencil ", 
          insp: "INSPIRATION: Metal teapot. Charcoal drawing technique."

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
          body_info: "Mediums: Crayon and Oil ", 
          insp: "Wolf Kahn inspired tree using colored pencils."
        });
        $(".sidemenu").openMenu();
      });
      
});
