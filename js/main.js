$( document ).ready(function() {
    // let url="none.jpg";
    // initial state
    // $("#uploadedImage").hide()
    // $("#predictCTA").hide()
    // $("#h2").hide()
    // $("#imagePreview").hide()
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
    //    url=
      }
      reader.readAsDataURL(event.target.files[0]);
     }
    //  function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
    //             url = e.target.result;
    //             $('#imagePreview').show();
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    $("#imageUpload").change(function () {
        $('#btn-upload').show();
        $('.image-section').hide();
        $('#prediction').hide();
        $('#btn-predict').hide();
        $('.loader').hide();
        // readURL(this);
    });

    $("#btn-upload").click(function (){
        
        $('.image-section').show();
        $('#btn-predict').show();
        $('.loader').hide();
    });

    const img = document.getElementById('previewImage');

  // Load the model.
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