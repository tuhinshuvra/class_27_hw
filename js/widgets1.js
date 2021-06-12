// Draggable default
$(document).ready(function(){
// 	$( "#dragg" ).draggable();

// // Draggable events
// // $( function() {
//     var $start_counter = $( "#event-start" ),
//       $drag_counter = $( "#event-drag" ),
//       $stop_counter = $( "#event-stop" ),
//       counts = [ 0, 0, 0 ];
 
//     $( "#draggable" ).draggable({
//       start: function() {
//         counts[ 0 ]++;
//         updateCounterStatus( $start_counter, counts[ 0 ] );
//       },
//       drag: function() {
//         counts[ 1 ]++;
//         updateCounterStatus( $drag_counter, counts[ 1 ] );
//       },
//       stop: function() {
//         counts[ 2 ]++;
//         updateCounterStatus( $stop_counter, counts[ 2 ] );
//       }
//     });
 
//     function updateCounterStatus( $event_counter, new_count ) {
//       // first update the status visually...
//       if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
//         $event_counter.addClass( "ui-state-hover" )
//           .siblings().removeClass( "ui-state-hover" );
//       }
//       // ...then update the numbers
//       $( "span.count", $event_counter ).text( new_count );
//     }
//   // } );

// // Dropable default
//   // $( function() {
//     $( "#dragble" ).draggable();
//     $( "#dropble" ).droppable({
//       drop: function( event, ui ) {
//         $( this )
//           .addClass( "ui-state-highlight" )
//           .find( "p" )
//             .html( "Dropped!" );
//       }
//     });

// // Dropable photo manager start

//  // There's the gallery and the trash
//     var $gallery = $( "#gallery" ),
//       $trash = $( "#trash" );
 
//     // Let the gallery items be draggable
//     $( "li", $gallery ).draggable({
//       cancel: "a.ui-icon", // clicking an icon won't initiate dragging
//       revert: "invalid", // when not dropped, the item will revert back to its initial position
//       containment: "document",
//       helper: "clone",
//       cursor: "move"
//     });
 
//     // Let the trash be droppable, accepting the gallery items
//     $trash.droppable({
//       accept: "#gallery > li",
//       classes: {
//         "ui-droppable-active": "ui-state-highlight"
//       },
//       drop: function( event, ui ) {
//         deleteImage( ui.draggable );
//       }
//     });
 
//     // Let the gallery be droppable as well, accepting items from the trash
//     $gallery.droppable({
//       accept: "#trash li",
//       classes: {
//         "ui-droppable-active": "custom-state-active"
//       },
//       drop: function( event, ui ) {
//         recycleImage( ui.draggable );
//       }
//     });
 
//     // Image deletion function
//     var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
//     function deleteImage( $item ) {
//       $item.fadeOut(function() {
//         var $list = $( "ul", $trash ).length ?
//           $( "ul", $trash ) :
//           $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
 
//         $item.find( "a.ui-icon-trash" ).remove();
//         $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
//           $item
//             .animate({ width: "48px" })
//             .find( "img" )
//               .animate({ height: "36px" });
//         });
//       });
//     }
 
//     // Image recycle function
//     var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
//     function recycleImage( $item ) {
//       $item.fadeOut(function() {
//         $item
//           .find( "a.ui-icon-refresh" )
//             .remove()
//           .end()
//           .css( "width", "96px")
//           .append( trash_icon )
//           .find( "img" )
//             .css( "height", "72px" )
//           .end()
//           .appendTo( $gallery )
//           .fadeIn();
//       });
//     }
 
//     // Image preview function, demonstrating the ui.dialog used as a modal window
//     function viewLargerImage( $link ) {
//       var src = $link.attr( "href" ),
//         title = $link.siblings( "img" ).attr( "alt" ),
//         $modal = $( "img[src$='" + src + "']" );
 
//       if ( $modal.length ) {
//         $modal.dialog( "open" );
//       } else {
//         var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
//           .attr( "src", src ).appendTo( "body" );
//         setTimeout(function() {
//           img.dialog({
//             title: title,
//             width: 400,
//             modal: true
//           });
//         }, 1 );
//       }
//     }
 
//     // Resolve the icons behavior with event delegation
//     $( "ul.gallery > li" ).on( "click", function( event ) {
//       var $item = $( this ),
//         $target = $( event.target );
 
//       if ( $target.is( "a.ui-icon-trash" ) ) {
//         deleteImage( $item );
//       } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
//         viewLargerImage( $target );
//       } else if ( $target.is( "a.ui-icon-refresh" ) ) {
//         recycleImage( $item );
//       }
 
//       return false;
// });

// // Dropable photo manager end

// //Resizable
// $( "#resizable" ).resizable({
//       animate: true
// });

// // Selectable
// $( "#selectable" ).selectable();

// // Sortable
// $( "#sortable" ).sortable();
//   $( "#sortable" ).disableSelection();


// accordion
$( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
});

// autocomplete
var tagList = [ "ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang",
"Fortran", "Groovy","Haskell", "Java", "JavaScript","jQuery","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"];

$( "#tags" ).autocomplete({
      source: tagList
});

// button
$( ".btnn, .inpt, .anc" ).click( function( event ) {
      event.preventDefault();
} );

// checkboxradio
$( "input" ).checkboxradio();

});
