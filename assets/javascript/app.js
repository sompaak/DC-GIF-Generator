



$(document).ready(function() {  

   var movies = ["superman","Batman","Barry allen"];

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var myButton = $("<button>");
          // Adding a class
          myButton.addClass("btn")

          // Adding a data-attribute with a value of the movie at index i
          myButton.attr("data-name", movies[i]);
          // Providing the button's text with a value of the movie at index i
          myButton.text(movies[i]);
          // Adding the button to the HTML
          $("#buttons").append(myButton);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var movie = $("#movie-input").val().trim();
        // The movie from the textbox is then added to our array
        movies.push(movie);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();






     function getinfo(){

    
      // Grabbing and storing the data-animal property value from the button
      var gif = $(this).attr("data-name");

      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        gif + "&limit=10&api_key=dc6zaTOxFJmzC";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .then(function(response) {
          

          console.log(response);
           var results = response.data;
           console.log(results)
          // storing the data from the AJAX request in the results variable


          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var gif = $("<div>")
          
            // Creating and storing an image tag
            var GifImage = $("<img>");
            GifImage.addClass("alignment")
            
            // Setting the src attribute of the image to a property pulled off the result item
            GifImage.attr("src", results[i].images.fixed_height_small.url);

            // Appending the paragraph and image tag to the animalDiv
            
           gif.append(GifImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs").prepend(gif);
          }
        
        });

      }

  
  $(document).on("click", ".btn", getinfo);
      













  });