document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn , .btn0 , .btnop , .equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const value = button.value;

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DE') {
                display.value = display.value.toString().slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
