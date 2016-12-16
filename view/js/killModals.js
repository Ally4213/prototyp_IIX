killModals = function() {
	$('#myModal2').modal('hide');
	$('#myModal').modal('hide');
	$('body').removeClass('modal-open');
	$('.modal-backdrop').remove();
}