"use strict";var page={detail:function(){$.ajax({url:"../../nav-list-g.json",dataType:"json",success:function(t){var a=location.href.split("?");a=a[1];for(var e=0;e<t[0].items.length;e++)if(a==t[0].items[e].id){console.log(t[0].items[e]);var i=template("nav-detail",{json:t[0].items[e]});$("#details-left").html(i);var l=template("main",{json:t[0].items[e]});$("#details-right").html(l)}}})},cart:function(){$("body").on("click",".leftCart",function(){var t=$(".title").html(),a=$(".bigImgLeft").attr("data-id"),e=$(".price").html().split("￥")[1],i=$(".nums").html(),l=$(".bigImgLeft").attr("src");console.log(t+"/"+a+"/"+e+"/"+i+"/"+l),$.ajax({url:"../../php/addwq.php",data:{name:t,id:a,price:e,num:i,img:l},type:"post",dataType:"json",success:function(t){}}),location.href="./cart.html"})}};page.detail(),page.cart();