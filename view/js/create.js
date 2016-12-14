$(document).ready(function(){
    $('select').on('change', function() {
  		if(this.value == 'written'){
  			$('#author-section').hide();
  		} else {
  			$('#author-section').show();
  		}
	});
	$('select').val('script');
}); 
