'use strict';

$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Bubble",
        mp3: "/scripts/gilded-from-gold.mp3",
        // oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
      });
     },
     cssSelectorAncestor: "#jp_container_1",
     swfPath: "/js",
     supplied: "m4a, oga, mp3",
     useStateClassSkin: true,
     autoBlur: false,
     smoothPlayBar: true,
     keyEnabled: true,
     remainingDuration: true,
     toggleDuration: true,
   });
   var myPlaylist = new jPlayerPlaylist({
     jPlayer: "#jquery_jplayer_1",
     cssSelectorAncestor: "#jp_container_1"
   }, [
     {
       title:"Gilded from Gold",
       artist: "Trapfire Brothers",
       mp3:"/scripts/gilded-from-gold.mp3",
     },
     {
       title:"Kids",
       artist: "Trapfire Brothers (MGMT cover)",
       mp3:"/scripts/kids.mp3",
     },
     {
       title:"Midnight Rider",
       artist: "Trapfire Brothers (Allman Brothers Band cover)",
       mp3:"/scripts/midnight-rider.mp3",
     },
   ], {
     playlistOptions: {
       autoPlay: false,
       enableRemoveControls: true
     },
     swfPath: "/js",
     supplied: "ogv, m4v, oga, mp3",
     smoothPlayBar: true,
     keyEnabled: true,
     audioFullScreen: false // Allows the audio poster to go full screen via keyboard
   });
   $("#jquery_jplayer_1").bind($.jPlayer.event.play, function (event) {
    var current = myPlaylist.current,
    playlist = myPlaylist.playlist;
      
    $.each(playlist, function (index, obj) {
      if (index == current) {
        $('.jp-track-title').text(obj.title); 
        $('.jp-track-artist').text('by ' +  obj.artist);
      }
    });
   });
  $('.title ul li').empty();



  function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
      return true
    else  // If another browser, return 0
      return false    
  }

  
});





