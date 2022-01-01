var currentURL = $(location).attr('href');

$(function(){
    var languageSelector = $('#languageSelector');
    var splitURL = currentURL.split("?locale=");
    var oldLanguageValue = splitURL[1];
    languageSelector.val(oldLanguageValue);

    var newLanguageValue;

    languageSelector.on('change', function(){
        newLanguageValue = $(this).children(':selected').val();
        changeLocale(oldLanguageValue, newLanguageValue)
    })
})

function changeLocale(oldLanguageValue, newLanguageValue){
    $(location).attr('href',currentURL.replace(oldLanguageValue, newLanguageValue));
};