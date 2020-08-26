var page = {
    // 页面渲染
    pageCart:function () {
        $.ajax({
            url:"../../php/showlist.php",
            dataType:"json",
            success:function (data) {
                if (data.code == 0){
                    $(".showBuy").show();
                } else {
                    $(".showBuy").hide();
                    var htmlCart = template("cartShow",{
                        "json":data.data
                    })
                    $(".cart-container").html(htmlCart)

                }

                // 计算总价格
                page.add(data)

                //点击小叉叉 删除整栏目购物车
                page.del()

                page.addOrReduce()

            }
        })
    },
    add:function (data) {
        var arr = [];
        var addPrice = 0;
        $.each(data.data,(index,item)=>{
            var add = parseInt(item.product_num)*parseInt(item.product_price);
            addPrice+=add
            return addPrice
        })
        $(".count b").html(addPrice)
    },
    del:function () {
        $(".item").on("click",".del",function () {
            var id = $(this).parent().parent().find("img").attr("data-id");

            $.ajax({
                url: "../../php/delwq.php",
                dataType: "json",
                data:{
                    id:id
                },
                success:function () {
                    location.reload("./cart.html" + ' .cart-container')
                }
            })
        })
    },
    addOrReduce:function () {
        $(".item").on("click",".increase",function () {
            var id = $(".item img").attr("data-id");
            var type = $(".increase").attr("data-type");

            $.ajax({
                url:"../../php/updatewq.php",
                dataType:"json",
                data: {
                    id:id,
                    type:type
                },
                success:(data)=>{
                    if (data.code==1){
                        location.reload()
                    }
                }
            })
        })

        $(".item").on("click",".reduce",function () {
            var id = $(".item img").attr("data-id");
            var type = $(".reduce").attr("data-type");

            $.ajax({
                url:"../../php/updatewq.php",
                dataType:"json",
                data: {
                    id:id,
                    type:type
                },
                success:(data)=>{
                    if (data.code==1){
                        location.reload()
                    }
                }
            })
        })
    }
}

page.pageCart();