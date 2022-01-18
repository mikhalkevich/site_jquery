$(function () {
    $('.menu a').on('mouseover', function () {
        //console.log($(this).text());
        // $('#for_content').load(...);
        var text = $(this).text();
        $('#for_content').text(text);
    });
    $('.menu a').on('click', function () {
        var title = $(this).attr('data-title');
        var content = $(this).attr('data-content');
        var pic = $(this).attr('data-pic');
        var picture = 'media/img/' + pic;
        $('#title').text(title);
        $('#content').html(content);
        $('#picture').attr('src', picture);
    });
    $('#picture').click(function () {
        $(this).hide(2000, function () {
            $('#picture').show(2000);
        });
    });
});
