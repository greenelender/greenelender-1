/**
 * Custom JS
 *
 */
jQuery(document).ready(function( $ ) {
	
	// Add dropdown caret to menu item with children
	$('.sub-menu').before('<span class="modern-pics dropdown-caret">Ï</span>');
	
	// Toggle mobile menu
	if ($(window).width() <= 768) {
		$('li.menu-item-has-children > span').click(function() {
			$(this).parent().find('.sub-menu').slideToggle('fast');
		});
	}
		
});