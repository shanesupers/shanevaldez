var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    $(document).ready(function () {









        $('#home').click(function () {
            $("#screen").animate({ left: '-1800px', top: '-2050px', rotate: '-30deg', scale: '1.0' }, 2000);
        });

        $('#b1').click(function () {
            $("#screen").animate({ left: '-1800px', top: '-2050px', rotate: '-30deg', scale: '1.0' }, 2000);
        });



        $('#b4').click(function () {
            $("#screen").animate({ left: '-3500px', top: '-800px', rotate: '90deg', scale: '1.0' }, 2000);
        });


        $('#b10').click(function () {
            $("#screen").animate({ left: '-900px', top: '-3800px', rotate: '-90deg', scale: '1.0' }, 2000);
        });


        $('#b24').click(function () {
            $("#screen").animate({ left: '-2200px', top: '-2150px', rotate: '90deg', scale: '1.0' }, 2000);
        });


        $('#b40').click(function () {
            $("#screen").animate({ left: '-2900px', top: '-2110px', rotate: '-90deg', scale: '1.0' }, 2000);
        });


        $('#b14').click(function () {
            $("#screen").animate({ left: '-2900px', top: '-1500px', rotate: '90deg', scale: '1.0' }, 2000)
        });


        $('#b28').click(function () {
            $("#screen").animate({ left: '300px', top: '-1950px', rotate: '0deg', scale: '1.0' }, 2000);

        });


        $('#b48').click(function () {
            $("#screen").animate({ left: '-1500px', top: '-3150px', rotate: '-90deg', scale: '1.0' }, 2000);
        });


        $('#b9').click(function () {
            $("#screen").animate({ left: '-3500px', top: '-3500px', rotate: '90deg', scale: '1.0' }, 2000);
        });


        $('#b3').click(function () {
            $("#screen").animate({ left: '-100px', top: '20px', rotate: '0deg', scale: '1.0' }, 2000);
        });


        $('#b36').click(function () {
            $("#screen").animate({ left: '-4050px', top: '-1850px', rotate: '0deg', scale: '1.0' }, 2000);
        });


        $('#b50').click(function () {
            $("#screen").animate({ left: '-3500px', top: '-1760px', rotate: '-90deg', scale: '1.0' }, 2000);
        });


        $('#b45').click(function () {
            $("#screen").animate({ left: '-3500px', top: '-3800px', rotate: '-90deg', scale: '1.0' }, 2000);
        });


        $('#b23').click(function () {
            $("#screen").animate({ left: '-450px', top: '-3285px', rotate: '0deg', scale: '1.0' }, 2000);
        });





        $('#b34').click(function () {
            $("#screen").animate({ left: '-2100px', top: '-2800px', rotate: '60deg', scale: '1.0' }, 2000);
        });


        $('#b41').click(function () {
            $("#screen").animate({ left: '-2400px', top: '-2550px', rotate: '0deg', scale: '1.0' }, 2000);
        });

        $('#b6').click(function () {
            $("#screen").animate({ left: '-1400px', top: '0px', rotate: '-30deg', scale: '1.0' }, 2000);
        });




        $('#b52').click(function () {
            // $("#screen").animate({left: '-100px', top: '20px', rotate: '0deg', scale: '1.0'}, 2000);
            $("#screen").animate({ left: '-3700px', top: '-1300px', rotate: '0deg', scale: '1.0' }, 2000);
        });














        var colors = ["#fff"];
        var myBox = document.getElementById("mybox");
        var rand = Math.floor(Math.random() * colors.length);


        $("#screen").css("display", "none");
        $("article a").css("color", colors[rand]);


        function goingHome() {




            $("body").queryLoader2({
                barColor: "#000",
                backgroundColor: "#000",
                percentage: true,
                barHeight: 30,
                completeAnimation: "grow"
            });




            if ($(document).width() >= 600) {






                $('body').addClass('.homeActive');


                $("header a").css("background", "none");

                $("nav ul li a").removeClass('.activeLink');
                $("nav").css("display", "none");
                $("nav ul li a").css("background", colors[rand]);


                $("#screen").animate({ left: '-2080px', top: '-1430px', rotate: '0deg', scale: '0.2' }, 0);


                $("body").css("background-color", "#000");


                $("body").animate({
                    backgroundColor: colors[rand]
                }, 2000, function () {



                    $("body").delay(1000).animate({
                        backgroundColor: colors[rand]
                    }, 2000, function () {
                        $("nav").fadeIn(2000, function () {
                            $("header a").css("background", colors[rand]);
                            $("nav ul li a").css("background-color", colors[rand]);
                        });

                    });









                    $("#screen").delay(1000).fadeIn(2000, function () {
                        $("#screen").animate({ left: '-1800px', top: '-2050px', rotate: '-30deg', scale: '1.0' }, 2000);

                    });





                });

            }


        }

        goingHome();



        $("#home").click(function () {
            goingHome();
        });



        $("nav ul li a").click(function () {



            $("nav ul li a").css("color", "#000");


            $("nav ul li a").removeClass('.activeLink');


            $(this).addClass('.activeLink');
            $(this).addClass('.activeLink');
            if ($(this).hasClass('.activeLink')) {


                $(this).animate({
                    color: colors[rand]
                }, 500);

            } else {
                $(this).animate({
                    color: "#000"
                }, 500);
            }





            if ($("body").hasClass('.homeActive')) {
                $("header a").css("background", "none");
                $("nav ul li a").css("background", "none");


                $("body").animate({
                    backgroundColor: "#fff"
                }, 2000, function () {

                    $("nav ul li a").css("background", "#fff");
                    $("header a").css("background", "#fff");

                });

                $("body").removeClass('.homeActive');
                $("body").addClass('.subActive');


            } else {

            }



        });










    });

}