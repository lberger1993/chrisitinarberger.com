
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
      		body_info: "Mediums: pastels ", 
          insp: "Inspiration: We were assigned to wrinkle a piece of cloth in various ways and detail how the light catches each crease. I was inspired by the colors of the cloth and the way that the light created numerous shades of blue."

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
      		date_info: "DATE OF COMPLETION: August 2014",
      		body_info: "Mediums: Watercolors ", 
          insp: "Inspiration: Watercolor piece was inspired by the way nature looks in the summertime. Also, painting was inspired by a camping trip in Vermont."

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
      		body_info: "Mediums: Oil Paints, Wolf-Kahn Inspired ", 
          insp: "Inspiration: Wolf Kahn and the nature in northern Michigan.."

      	});
      	$(".sidemenu").openMenu();
      });
      $(".three").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Water Color Wonder",
          image:"images/abstract.jpg",
          date_info: "DATE OF COMPLETION: July 2014",
          body_info: "Mediums: Watercolor ", 
          insp: "Inspiration: This piece was inspired by the colors of woodland in the summertime."

        });
        $(".sidemenu").openMenu();
      });
      $(".four").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Spring Trees",
          image:"images/woods_shot.jpg",
          date_info: "DATE OF COMPLETION: April 2016",
          body_info: "Mediums: Oil Pastels & Water Color ", 
          insp: "Inspiration: Wolf Kahn and photograph taken of tree and orchard in Northern California. Combination of oil pastel in all objects in piece and watercolor in background."
        });
        $(".sidemenu").openMenu();
      });
});
