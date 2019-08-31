$( document ).ready(function() {
    // initial state
    $('.image-section').hide();
    $('#btn-upload').hide();
    $('#prediction').hide();
    $('#btn-predict').hide();
    $('.loader').hide();
     
    // Upload Preview
     function preview_image(event) 
     {
      var reader = new FileReader();
      reader.onload = function()
      {
       var output = document.getElementById('previewImage');
       output.src = reader.result;
       console.log(render.result)

      }
      reader.readAsDataURL(event.target.files[0]);
     }

    // after user chooses an image give them an option to upload it to the app
    $("#imageUpload").change(function () {
        $('#btn-upload').show();
        $('.image-section').hide();
        $('#prediction').hide();
        $('#btn-predict').hide();
        $('.loader').hide();
    });

    // show the image once they choose to upload it   
    $("#btn-upload").click(function (){ 
        $('.image-section').show();
        $('#btn-predict').show();
        $('.loader').hide();
    });

    const img = document.getElementById('previewImage');

  // Load the model.
  //   perform prediction
  $('#btn-predict').click(function(){
    $('.loader').show();
    cocoSsd.load().then(model => {
        
        // detect objects in the image.
        model.detect(img).then(predictions => {
          console.log('Predictions: ', predictions);
          console.log(predictions[0].class);
          $('.loader').hide();
          $('#prediction').html(`Result:  ${predictions[0].class}`);
          $('#prediction').show();

        });
      });
  })
});
