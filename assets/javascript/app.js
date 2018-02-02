var movies = ["superman","Batman","Barry allen"];

// takes prexisting values as well as new values gained from the user-input and renders them as buttons on the page 
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
    }

    $("#add-movie").on("click", function(event) 
    {
    
    event.preventDefault();
    var movie = $("#movie-input").val().trim();
    movies.push(movie);

    renderButtons();
  });

}

// gets Giphy API info and renders gifs on the the page

function getinfo()
{
  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  gif + "&limit=10&api_key=dc6zaTOxFJmzC";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

  .then(function(response) 
  {
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


$(document).ready(function() 
{  
  renderButtons();
  $(document).on("click", ".btn", getinfo); 
});