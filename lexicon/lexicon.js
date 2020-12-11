(function(){
    //gett all the video elements on the document
    var vids = document.video('_autoplay_vid'); 
    
    //loop through all the video elements
    for (var i = vids.length - 1; i >= 0; i--) {
    	//pause all the videos by default
    	vids[i].pause();
    }
    
    //triger an anonymous function that handles the playy, pause video actions
    window.onscroll = function(){
        for (var i = vids.length - 1; i >= 0; i--) {
            
            //get current scrol position
            var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
            
    		if ( currentYpos >= vids[i].offsetTop 
    		    && currentYpos <= vids[i].offsetTop + vids[i].offsetHeight 
    		   ) {
    		    //Play video if the current scroll position 
    		    //is between the top and bottom of the video element
    			vids[i].play();
    		}else{
    		    //else pause the video 
    			vids[i].pause();
    		}
    	}
    };