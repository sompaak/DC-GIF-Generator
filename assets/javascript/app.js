 var movies = ["superman","Batman","Barry allen"];



// Renders prexisting buttons with values in array. 
//Also adds values to array if search button is clicked and renders new buttons with the corresponding values

function renderButtons() 
{
        
  $("#buttons").empty();       
 
  for (var i = 0; i < movies.length; i++) 
  {
    var myButton = $("<button>");
    myButton.addClass("btn")      
    myButton.attr("data-name", movies[i]);
    myButton.text(movies[i]);
    $("#buttons").append(myButton);

    $("#add-movie").on("click", function(event) 
      {
          event.preventDefault();
          var movie = $("#movie-input").val().trim();
          movies.push(movie);
          renderButtons();
      });
    }
} 



  //gets info from api and on the click of a button displays the gifs corresponding to the value the button contains

 function getinfo()
 {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  gif + "&limit=10&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      
      .then(function(response) {
        

        console.log(response);
         var results = response.data;
         console.log(results)

        for (var i = 0; i < results.length; i++) {
          var gif = $("<div>")
          var GifImage = $("<img>");
          GifImage.addClass("alignment")
          GifImage.attr("src", results[i].images.fixed_height_small.url);  
          gif.append(GifImage);
          $("#gifs").prepend(gif);
        }
      
     });
}


$(document).ready(function() { 

  // calls functions
  renderButtons()
  $(document).on("click", ".btn", getinfo);
      

  });