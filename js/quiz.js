jQuery(document).ready(function(){
    var vocab = [];
    var currentIndex = 0;
    var score = 0;
    var total = 0;

    jQuery.getJSON('data/vocab.json', function(data){
        vocab = shuffleArray(data);
        total = vocab.length;
        showQuestion();
        updateScore();
    }).fail(function(){
        jQuery('#question').text('Error loading vocabulary data.');
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showQuestion() {
        if (currentIndex < vocab.length) {
            jQuery('#question').text('What is the English translation of: ' + vocab[currentIndex].russian + '?');
            jQuery('#answer').val('');
            jQuery('#feedback').text('');
        } else {
            jQuery('#question').text('Quiz completed!');
            jQuery('#answer').hide();
            jQuery('#submit').hide();
            jQuery('#next').hide();
        }
    }

    function updateScore() {
        jQuery('#score').text('Score: ' + score + ' / ' + total);
    }

    jQuery('#submit').click(function(){
        var userAnswer = jQuery('#answer').val().toLowerCase().trim();
        var correctAnswer = vocab[currentIndex].english.toLowerCase().trim();
        if (userAnswer === correctAnswer) {
            jQuery('#feedback').text('Correct!').css('color', 'green');
            score++;
        } else {
            jQuery('#feedback').text('Incorrect. The correct answer is: ' + vocab[currentIndex].english).css('color', 'red');
        }
        updateScore();
        jQuery('#submit').hide();
        jQuery('#next').show();
    });

    jQuery('#next').click(function(){
        currentIndex++;
        showQuestion();
        jQuery('#submit').show();
        jQuery('#next').hide();
    });

    jQuery('#restart').click(function(){
        currentIndex = 0;
        score = 0;
        vocab = shuffleArray(vocab);
        showQuestion();
        updateScore();
        jQuery('#answer').show();
        jQuery('#submit').show();
        jQuery('#next').hide();
    });

    jQuery('#next').hide(); // Initially hide next button
});