$(function () {
    $.ajax({
        type: 'post',
        url: baseUrl+'index.jsp?control=Orders&method=userOrderList',
        dataType: 'json',
        data: {
            clientJson: JSON.stringify(clientJson)
        },
        success: function (sJson) {
            var data = sJson.serverJson;
            for (var i=0; i<data.length; i++){
                var list = "<div class='list'>"+
                                "<img src='img/Starbucks.jpg' alt='商家logo' />"+
                                "<div class='list-wrap'>"+
                                    "<div class='list-part' onclick='orderDetail(\""+data[i].orderId+"\")'>"+
                                        "<p class='name'>"+data[i].foodName+"</p>"+
                                        "<p class='time'>"+data[i].createTime+"</p>"+
                                    "</div>"+
                                    "<div class='list-part'>"+
                                        "<p class='orderId'>"+data[i].orderId+"</p>"+
                                        getOrderState(data[i])+
                                    "</div>"+
                                "</div>"+
                            "</div>";
                $("#list").append(list);
            }
        }
    });
});

//根据订单“状态”呈现不同的业务服务
//0 表示用户已下单
//1 表示商家已接单
//2 表示用户已收获
function getOrderState(data) {
    switch (data.state){
        case "0":
            return "<button class='btn-info'>等待接单</button>"
            break;
        case "1":
            return "<button onclick='orderConfirm(\""+data.orderId+"\")' class='btn-confirm'>确认收货</button>"
            break;
        case "2":
            return "<button onclick='orderDelete(\""+data.orderId+"\")' class='btn-danger'>删除记录</button>"
        default:
            break;
    }
}

//订单详情
function orderDetail(orderId) {
    location.href="UserOrderDetail.jsp?orderId="+orderId;
}

function orderConfirm(orderId) {
    var clientJson = new Object();
    clientJson.orderId = orderId;
    $.ajax({
        type: 'post',
        url: baseUrl+'index.jsp?control=Orders&method=orderConfirm',
        dataType: 'json',
        data: {
            clientJson:JSON.stringify(clientJson)
        },
        success: function (sJson) {
            alert(sJson.message);
            location.href="UserOrderList.jsp";
        }
    });
}

function orderDelete(orderId) {
    var clientJson = new Object();
    clientJson.orderId = orderId;
    $.ajax({
        type: 'post',
        url: baseUrl+'index.jsp?control=Orders&method=orderDelete',
        dataType: 'json',
        data:{
            clientJson:JSON.stringify(clientJson)
        },
        success: function (sJson) {
            alert(sJson.message);
            location.href="UserOrderList.jsp";
        }
    });
}