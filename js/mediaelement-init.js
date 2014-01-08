jQuery(document).ready(function(){
    jQuery('audio').mediaelementplayer({
        features: ['playpause','progress', 'duration','tracks'],
        audioWidth: 280
    });
});
