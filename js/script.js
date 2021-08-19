$(document).ready(function () {

    var floorPath = $(".main__img path");
    var currentFloor = 2;
    var counterUp = $('.counter__btn-up');
    var counterDown = $('.counter__btn-down');

    floorPath.on("mouseover", function() {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter__text').text(currentFloor);
    });

    counterUp.on('click', function() {

        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGroupping: false });
            $('.counter__text').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
        
    });

    counterDown.on('click', function() {

        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGroupping: false });
            $('.counter__text').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
        
    });
});