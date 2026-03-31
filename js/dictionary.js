jQuery(document).ready(function(){
    jQuery.getJSON('data/vocab.json', function(data){
        var list = jQuery('#word-list');
        list.empty();
        jQuery.each(data, function(index, word){
            var item = jQuery('<div class="word-item" data-word="' + word.russian + '"><span class="russian">' + word.russian + '</span> - <span class="english">' + word.english + '</span></div>');
            list.append(item);
        });
    });
});