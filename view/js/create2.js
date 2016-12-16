$('document').ready(function(){
    $('select').on('change', function() {
  		if(this.value == 'written'){
  			$('#author-section').hide();
  		} else {
  			$('#author-section').show();
  		}
	});
	$('select').val('book');
	$('#image-chooser').change(function() {
		var file = this.files[0];
		
		var reader = new FileReader();

  		reader.onload = function(event) {
    		the_url = event.target.result
    		$('#image').attr('src', the_url);
  		}
 
  		reader.readAsDataURL(file);
		var pi = $("#placeholderImage");
		pi.hide();
	});
	$('#backButton').click(function(){
   		window.history.back();
	})
}); 
