var page = {

    navSwiper: function () {
        $.ajax({
            url:"../../data1.json",
            dataType:"json",
            success:function (data) {

                var swip = template("swipers",{
                    "json":data
                })
                $(".swiper-wrapper").html(swip)

                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },

                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // 如果需要滚动条
                    // scrollbar: {
                    //     el: '.swiper-scrollbar',
                    // },
                })


                var goodsData = template("goodsData",{
                    "json":data
                })
                $("#goods ul").html(goodsData)

                var goodsList = template("goodsList",{
                    "json":data
                })
                $("#goodsDetails ul").html(goodsList)

            }
        })

    },

    login: function () {
        var us = localStorage.getItem("username");

        if (us != undefined) {
            $(".message>ul>li:eq(0) a").html("欢迎您" + us)
            $(".message>ul>li:eq(0) span").html("")
            $(".message>ul").append("<li><a href='#' class='exit'>退出</a></li>")
        }
    },
    exit: function () {
        $(".exit").on("click", function () {
            localStorage.removeItem("username");
            location.href = "../pages/index.html";
            $(".message>ul>li:eq(0)").html(`<li>
                                    <a href="../pages/login.html" class="loginImp">立即登录</a>
                                    <span><i>无账号</i><a href="../pages/signIn.html">立即注册</a></span>
                                </li>`)
            $(".exit").remove()
            $(".cartSpan").hide()

        })
    },
    navSearch: function () {
        $.ajax({
            url: "../../php/showlist.php",
            dataType: "json",
            success: function (data) {
                var num = 0
                if (data.code==1) {
                    $.each(data.data,(index,item)=>{
                        num+=parseInt(item.product_num);
                        if ($("#hasUser").html()==""){
                            $(".cartSpan").html(num)
                        }else {
                            $(".cartSpan").hide()

                        }
                    })
                }
            }
        })

        $.ajax({
            url: "../../indexNav.json",
            dataType: "json",
            success: function (data) {
                var navList = template("navListTem",{
                    "json":data
                })
                $(".product").html(navList)

            }
        })


    },
    goods:function(){
        $.ajax({
            url:"../../nav-list-g.json",
            dataType:"json",
            success:function (data) {
                var str = template("goodsL",{
                    "json":data
                })
                $("#products").html(str)
            }
        })
    },
    cart:function () {
        $(".personMessage ul li:eq(0) a").mouseover(function () {
            $(".message").show()
        })
    },
    detail:function () {
        $("#products").on("click","div", function () {
            var theId = $(this).attr("id")
            location.href = `./details.html?${theId}`;
        })
    },
    flash:function(){
        $.ajax({
            url:"../../flash.json",
            dataType:"json",
            success:function (data) {
                var flash = template("flashkills", {
                    "json": data
                })
                $(".flash-main").html(flash)

                function getTime() {
                    // 设置时间到几点
                    var now = new Date();
                    var h = now.getHours()

                    var hour = 1;
                    var m = now.getMinutes();
                    m = 59 - m
                    var s = now.getSeconds();
                    s = 59 - s

                    if (m == 0 && s == 0) {
                        hour -= 1
                    }
                    if (h==0){
                        var add = h
                        $(".flashTime").html(`${add}场`);
                    }

                    var arr = [
                        hour,
                        parseInt(m),
                        parseInt(s)
                    ];
                    for (var i = 0; i < arr.length; i++) {
                        $(".timeReduce span")[i].innerHTML = arr[i]
                    }

                }
                getTime();

                setInterval(function(){
                    getTime();
                },1000)

            }
        })
    },
    common:function () {
        $(".product").on("mouseover",".aca",function () {
            $(this).parent().siblings().find(".aca").removeClass("active");
            $(this).addClass("active")
        })

        $("body").on("mouseout",".message",function () {
            $(this).hide()
        }).on("mouseover",".message",function () {
            $(this).show()
            $(".content_list").hide()
        })

        $("#products").on("mouseover","li",function () {
            $(this).siblings().removeClass("on")
            $(this).addClass("on")
        })

        $("#goodsDetails").on("mouseover","img",function () {
            $(this).parent().parent().siblings().find("img").removeClass("on")
            $(this).addClass("on")
        }).on("mouseout","img",function () {
            $(this).removeClass("on")
        })

        $("#goodsDetails ").on("mouseover",".learn",function () {
            $(this).parent().parent().siblings().find(".learn").css("color","black")
            $(this).css("color","red")
        })

        $("#goodsDetails ul").on("mouseout",".learn",function () {
            $(this).css("color","black")
        })

        $(".container").on("mouseover",".product>li",function () {
            $(this).siblings().find(".content_list").hide()
            $(this).find(".content_list").show()
        }).on("mouseout",".content_list",function () {
            $(".content_list").hide()
        })

        $(".nav-top").on("mouseout",function () {
            $(".message").hide()
        })

        $("#goTop").on("click",function () {
            $("html").animate({
                scrollTop:0
            })
        })

        $(window).scroll(function () {
            if ($(window).scrollTop()>60){
                $("#nav").addClass("fix")
            }else {
                $("#nav").removeClass("fix")
            }
        })

    }
}
$(function () {
    $(window).load(function () {
        $("#products ul li:eq(0)").addClass("on")

        if ($("#hasUser").html()==""){
            $(".cartSpan").html(num)
        }else {
            $(".cartSpan").hide()
        }
    })

})

page.navSwiper();
page.login();
page.exit();
page.navSearch()
page.cart()
page.goods()
page.detail()
page.flash()
page.common()
