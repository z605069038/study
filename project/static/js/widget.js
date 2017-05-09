$(document).on('click', '.left-side-item', function(){
	var modName = $(this).attr('data-mod');
	$('.visible').removeClass('visible');
	$('[data-mod="'+ modName +'"]').addClass('visible');
})
$('.left-side-item[data-mod="departSelect.js"]').click();