/**
 * Simple Resume v1.0.0
 * Copyright 2015 Alltech Coder
 **/


var callback = function(){

$('.progress-bar').each(function() {
            var item = $(this);
            var maxValue = item.attr("aria-valuenow");
            item.css('width', (0)+'%');
            var progressValue = 0;

            setInterval(function() {
                while(progressValue < maxValue)
                {
                    progressValue +=1;
                    item.css('width', (progressValue)+'%');
                }
            }, 300);

        });
};


var sizeChange;
window.onresize = function() {
  clearTimeout(sizeChange);
  sizeChange = setTimeout(function(){
  callback();
  }, 300);
};

$(document).ready(callback);
