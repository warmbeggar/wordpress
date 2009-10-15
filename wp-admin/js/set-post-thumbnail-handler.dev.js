function WPSetThumbnailHTML(html){
	jQuery('#postthumbnaildiv .inside').html(html);
}

function WPSetThumbnailID(id){
	if ( jQuery('input[value=_thumbnail_id]').size() > 0 ) {
		jQuery('#meta\\[' + jQuery('input[value=_thumbnail_id]').attr('id').match(/[0-9]+/) + '\\]\\[value\\]' ).text(id);
	}
}

function WPRemoveThumbnail(){
	jQuery.post(ajaxurl, {
		action:"set-post-thumbnail", post_id: jQuery('#post_ID').val(), thumbnail_id: -1, cookie: encodeURIComponent(document.cookie)
	}, function(str){
		if ( str == '0' ) {
			alert( setPostThumbnailL10n.error );
		} else {
			WPSetThumbnailHTML(str);
		}
	}
	);
}
