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

        })
    },
    navSearch: function () {
        $.ajax({
            url: "../../nav-list-g.json",
            dataType: "json",
            success: function (data) {
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                    const item = data[i];
                    $(".product").append(`<li><a class="aca" href="${item.url}">${item.title}</a></li>`);
                }
            }
        })
    },
    lis:function () {
        $.ajax({
            url: "../../nav-list-g.json",
            dataType: "json",
            success: function (data) {
                $(".aca ").on("mouseover",function () {
                    $(".content_list").css("display","none");




                    // if ($(this).parent().index()==0) {
                    //     $(this).parent().append(`
                    //     <div class="content_list">
                    //         <ul>
                    //             <li>
                    //                 <a href="${data[0].url}">
                    //                     <img src="${data[0].items[0].indexImg}" alt="">
                    //                     <p>${data[0].items[0].name}</p>
                    //                 </a>
                    //             </li>
                    //             <li>
                    //                 <a href="${data[0].url}">
                    //                     <img src="${data[0].items[1].indexImg}" alt="">
                    //                     <p>${data[0].items[1].name}</p>
                    //                 </a>
                    //             </li>
                    //             <li>
                    //                 <a href="${data[0].url}">
                    //                     <img src="${data[0].items[2].indexImg}" alt="">
                    //                     <p>${data[0].items[2].name}</p>
                    //                 </a>
                    //             </li>
                    //         </ul>
                    //     </div>
                    // `)
                    //     $(this).parent().children().eq(1).css("display","block")
                    //
                    // }
                    // if ($(this).parent().index()==1) {
                    //     $(this).parent().append(`
                    //     <div class="content_list">
                    //         <ul>
                    //             <li>
                    //                 <a href="${data[1].url}">
                    //                     <img src="${data[1].items[0].img}" alt="">
                    //                     <p>${data[1].items[0].name}</p>
                    //                 </a>
                    //             </li>
                    //             <li>
                    //                 <a href="${data[1].url}">
                    //                     <img src="${data[1].items[1].img}" alt="">
                    //                     <p>${data[1].items[1].name}</p>
                    //                 </a>
                    //             </li>
                    //         </ul>
                    //     </div>
                    // `)
                    //     // $(this).parent().children().eq(1).css("display","block")
                    // }
                    // if ($(this).parent().index()==2) {
                    //     $(this).parent().append(`
                    //     <div class="content_list">
                    //         <ul>
                    //             <li>
                    //                 <a href="${data[2].url}">
                    //                     <img src="${data[2].items[0].img}" alt="">
                    //                     <p>${data[2].items[0].name}</p>
                    //                 </a>
                    //             </li>
                    //             <li>
                    //                 <a href="${data[2].url}">
                    //                     <img src="${data[2].items[1].img}" alt="">
                    //                     <p>${data[2].items[1].name}</p>
                    //                 </a>
                    //             </li>
                    //             <li>
                    //                 <a href="${data[2].url}">
                    //                     <img src="${data[2].items[0].img}" alt="">
                    //                     <p>${data[2].items[2].name}</p>
                    //                 </a>
                    //             </li>
                    //             <li>
                    //                 <a href="${data[2].url}">
                    //                     <img src="${data[2].items[1].img}" alt="">
                    //                     <p>${data[2].items[3].name}</p>
                    //                 </a>
                    //             </li>
                    //         </ul>
                    //     </div>
                    // `)
                    //     // $(this).parent().children().eq(1).css("display","block")
                    // }
                })
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
    common:function () {
        $(".product").on("mouseover",".aca",function () {
            $(this).parent().siblings().find(".aca").removeClass("active");
            $(this).addClass("active")

        })
    }
}

page.navSwiper();
page.login();
page.exit();
page.navSearch()
page.lis()
page.cart()
page.goods()
page.detail()
page.common()
