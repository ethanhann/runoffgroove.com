<!-- Fetzer Design Formulas  -->
jQuery(document).ready(function() {
    var calculateFetzerValues = function() {
        var vp = Math.abs(jQuery('#input-vp').val()),
            idss = Math.abs(jQuery('#input-idss').val()) / 1000,
            vcc = Math.abs(jQuery('#input-vcc').val());

        jQuery('#output-rs').text(0.83 * vp / idss);
        jQuery('#output-rd').text(0.9 * (vcc - 2 * vp) / idss);
        jQuery('#output-vs').text(vp * (0.37 * vcc - 0.65 * vp) / (vcc - 2 * vp));
        jQuery('#output-vd').text(0.6 * vcc + 0.7 * vp);
        jQuery('#output-id').text(idss * (444 * vcc - 778 * vp) / (vcc - 2 * vp));
        jQuery('#output-av').text(0.542 * (vcc / vp - 2));
        jQuery('#output-av-db').text(20 * Math.log(0.542 * (vcc / vp - 2)) / Math.log(10));
        jQuery('#output-vo').text(vcc - 2 * vp);
        jQuery('#output-cp').text(1000000000 / (0.83 * vp / idss * 6.283 * 1000));
    };

    var resetFetzerInputs = function() {
        jQuery('#input-vp').val(0.83);
        jQuery('#input-idss').val(0.64);
        jQuery('#input-vcc').val(9);
    };

    jQuery('#fetzer-calculate-button').click(function(e) {
        e.preventDefault();
        calculateFetzerValues();
    });

    jQuery('#fetzer-reset-button').click(function(e) {
        e.preventDefault();
        resetFetzerInputs();
        calculateFetzerValues();
    });

    resetFetzerInputs();
    calculateFetzerValues();
});
