
      $(document).ready( function() {
      	$('.my-slider').unslider();
      	$(".zero").click(function() {
      		console.log("clicked;")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "vertical",
          closeButton: "X",
      		text: "Coil Pot",
      		image:"images/ceramics.jpg",
      		date_info: "Date of Completion: May 2016",
      		body_info: "MEDIUM: Terra Cotta Clay Coil ", 
          insp: "INSPIRATION:  Ancient Greek Coil Style Pottery"
      	});
      	$(".sidemenu").openMenu();
      });
      $(".one").click(function() {
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
      		text: "Pinch Pot Set ",
      		image:"images/ceramic_bowls.jpg",
      		date_info: "DATE OF COMPLETION: April 2016 ",
      		body_info: "Mediums: Porcelain Clay ", 
          insp: "Inspiration:  Pinch pot fitting in a “set” meaning the two pieces match and fit with one another."

      		});
      	$(".sidemenu").openMenu();
      });
      $(".two").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Love Box",
          image:"images/lovebox.jpg",
          date_info: "DATE OF COMPLETION: June 2016",
          body_info: "Mediums: Stoneware Clay", 
          insp: "Inspiration:  Slab Making Method, rolling the clay out flat with slab roller and cutting method."
          });
        $(".sidemenu").openMenu();
      });
      $(".three").click(function() {
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Mountain Slab",
          image:"images/mountainslab.jpg",
          date_info: "DATE OF COMPLETION: June 2016",
          body_info: "Mediums: Stoneware Clay", 
          insp: "Inspiration:  Slab, rolling clay out flat and cutting method. Designed inspired by the Rocky Mountains and colors of the South West."
          });
        $(".sidemenu").openMenu();
      });  
});
