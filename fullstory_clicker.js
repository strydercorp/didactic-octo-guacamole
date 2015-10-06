check_video_done = function() {
  setTimeout(function() {
    is_showing = document.getElementsByClassName('playButton replay')[0].className.indexOf("show");
    if (is_showing > -1){
      document.getElementById("segmentsBtn").click(); /* Go back to the index */
      select_video();
    }
    else {
      check_video_done(); /* Check it again */
    }
  }, 2000);
}

select_video = function() {
  setTimeout(function() { /* Wait a few seconds for DOM to load - jank but I don't care */
    videos = document.getElementsByClassName('autoplay')
    videos[Math.floor(Math.random()*videos.length)].click();
    check_video_done();
  }, 5000);
}

select_video();
