$('doucment').ready(function () {





    $('#input-box').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            let key = "51baa663fb0ddf13f2031c7c25cd3f03";
            let cityName = $('#input-box').val();
            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
            $('#input-box').val('');

            $.ajax({

                url: URL,
                success: function (data) {

                    console.log(data);

                    $('.alert').remove();

                    $('.name').html(data.name);
                    $('#wheather').html(data.weather[0].main);
                    $('#temp').html(data.main.temp.toFixed(0) + "" + "&#8451;");
                    $('#weather').html(data.weather[0].main);


                    let date = new Date().toString().split(" ");
                    $('#date').html(date[2] + " " + date[1] + " " + date[3]);

                    $('.upper div:nth-child(1) span:nth-child(1) ').html(data.main.temp);
                    $('.upper div:nth-child(2) span:nth-child(1) ').html(data.main.temp_max);
                    $('.upper div:nth-child(3) span:nth-child(1) ').html(data.main.temp_min);


                    $('.lower div:nth-child(1) span:nth-child(1) ').html(data.main.feels_like);
                    $('.lower div:nth-child(2) span:nth-child(1) ').html(data.main.humidity);
                    $('.lower div:nth-child(3) span:nth-child(1) ').html(data.main.pressure);



                    $('.container :nth-child(1) span').html(`Deg: ${data.wind.deg}`);
                    $('.container :nth-child(2) span').html(`Speed: ${data.wind.speed}`);
                    $('.container :nth-child(3) span').html(`${data.weather[0].description}`);
                    $('.container :nth-child(4) span').html(`${data.visibility}`);
                    $('.container :nth-child(5) span').html(`${data.sys.sunrise}`);
                    $('.container :nth-child(6) span').html(`${data.timezone}`);







                    $('.for-animation').show();

                    $('.for-animation').css("visibility", "visible");
                    $('.for-animation').css("opacity", "1");

                },
                error: function (xhr, status, error) {
                    $('.alert').remove();
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    console.log("ERROR: " + errorMessage)
                    $('.in-box').append(`<div class="alert t col-md-12 mt-2  col-lg-6 alert-danger alert-dismissible fade show" role="alert">
                    <strong>City Not Found!</strong> You should check in on some of those fields below.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`)
                    $('.for-animation').hide();

                }











            });

            /*$.ajax(url).done((data) => {
                    console.log(data);

                    $('.name').html(data.name);
                    $('#wheather').html(data.weather[0].main);
                    $('#temp').html(data.main.temp.toFixed(0) + "" + "&#8451;");
                    $('#weather').html(data.weather[0].main);


                    let date = new Date().toString().split(" ");
                    $('#date').html(date[2] + " " + date[1] + " " + date[3]);

                    $('.upper div:nth-child(1) span:nth-child(1) ').html(data.main.temp);
                    $('.upper div:nth-child(2) span:nth-child(1) ').html(data.main.temp_max);
                    $('.upper div:nth-child(3) span:nth-child(1) ').html(data.main.temp_min);


                    $('.lower div:nth-child(1) span:nth-child(1) ').html(data.main.feels_like);
                    $('.lower div:nth-child(2) span:nth-child(1) ').html(data.main.humidity);
                    $('.lower div:nth-child(3) span:nth-child(1) ').html(data.main.pressure);



                })
                .fail(function (xhr, status, error) {
                    //Ajax request failed

                    alert('Error - ' + errorMessage);
                });
*/





        }
        //Stop the event from propogation to other handlers
        //If this line will be removed, then keypress event handler attached 
        //at document level will also be triggered
        event.stopPropagation();
    });



});