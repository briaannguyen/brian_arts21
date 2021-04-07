$(function() {
  let $clockText = $('#clock-text');
  let $hour = $('#hour');
  let $minute = $('#minute');
  let $second = $('#second');
  
  function updateClock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();
    let clockUpdateSpeed = 30; // speed in milliseconds

    $clockText.html(h + ":" + m + ":" + s + ":" + ms);
    $hour.css('transform', 'rotate(' + (360/24 * h) + 'deg)');
    $minute.css('transform', 'rotate(' + (360/60 * m) + 'deg)');
    $second.css('transform', 'rotate(' + (360/60 * s) + 'deg)');

    setTimeout(updateClock, clockUpdateSpeed);
  }

  updateClock();
})