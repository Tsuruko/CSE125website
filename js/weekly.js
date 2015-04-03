
function popup(e) {
	var popupDoc = document.getElementById("docPopup");
	popupDoc.src = e.getAttribute("data-docSrc");
	
	var popupDocWidth = popupDoc.width;
	
	if (popupDocWidth > 1000 || popupDocWidth == 0) {
		popupDocWidth = 1000;
	}

	$('#myModalDoc').find('.modal-dialog').css({
		width: popupDocWidth
	});
}