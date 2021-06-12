// Draggable default
$(document).ready(function(){

// dialog box start
$( "#diabox" ).dialog({
autoOpen: false,
show: {
effect: "blind",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});

$( "#diaopen" ).on( "click", function() {
$( "#diabox" ).dialog( "open" );
});
// dialog box end

// menu  start
$( "#menu" ).menu();
// menu  end
// UI Progressbar - Download Dialog
var progressTimer,
progressbar = $( "#probardia" ),
progressLabel = $( ".progress-label" ),
dialogButtons = [{
text: "Cancel Download",
click: closeDownload
}],
dialog = $( "#prodia" ).dialog({
autoOpen: false,
closeOnEscape: false,
resizable: false,
buttons: dialogButtons,
open: function() {
progressTimer = setTimeout( progress, 2000 );
},
beforeClose: function() {
downloadButton.button( "option", {
disabled: false,
label: "Start Download"
});
}
}),
downloadButton = $( "#proDownBtn" )
.button()
.on( "click", function() {
$( this ).button( "option", {
disabled: true,
label: "Downloading..."
});
dialog.dialog( "open" );
});

progressbar.progressbar({
value: false,
change: function() {
progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
},
complete: function() {
progressLabel.text( "Complete!" );
dialog.dialog( "option", "buttons", [{
text: "Close",
click: closeDownload
}]);
$(".ui-dialog button").last().trigger( "focus" );
}
});

function progress() {
var val = progressbar.progressbar( "value" ) || 0;

progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );

if ( val <= 99 ) {
progressTimer = setTimeout( progress, 50 );
}
}

function closeDownload() {
clearTimeout( progressTimer );
dialog
.dialog( "option", "buttons", dialogButtons )
.dialog( "close" );
progressbar.progressbar( "value", false );
progressLabel
.text( "Starting download..." );
downloadButton.trigger( "focus" );
}


// Selectmenu - Product Selection
var circle = $( "#circle" );

$( "#radius" ).selectmenu({
change: function( event, data ) {
circle.css({
width: data.item.value,
height: data.item.value
});
}
});

$( "#color" ).selectmenu({
change: function( event, data ) {
circle.css( "background", data.item.value );
}
});

});