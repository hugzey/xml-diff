function toggleToolbar () {
    $('#toolbar').toggle();
    $('#toolbarToggle').toggleClass('toggle-on');
    $('#toolbarToggle svg').attr('data-icon', $('#toolbarToggle').hasClass('toggle-on') == true ? 'angle-double-up' : 'angle-double-down');
}
function compareFiles () {
    toggleToolbar();
    var impFileBefore = $('#fileBefore')[0].files[0]
    var impFileAfter = $('#fileAfter')[0].files[0]

    console.log(impFileBefore);
    console.log(impFileAfter);
}
function isFPC (filename) {
    var nameComponents = filename.split('.');
    var ext = nameComponents[nameComponents.length-1];
    if(
        ext && 
        typeof ext === 'string' &&
        ext.length > 0 && 
        ext.toLowerCase() == 'fpc'
    )
        return true;
    else
        return false;
}
function extractFPC () {
    
}
$(document).ready (function () {
    $('#toolbarToggle').on('click', toggleToolbar);
    $('#btnCompareSubmit').on('click', compareFiles)
});