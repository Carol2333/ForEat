<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String userPhone = (String) session.getAttribute("userPhone");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,height=device-height initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>用户订单列表</title>
	<link rel="stylesheet" href="css/UserDefault.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/UserForList.css">
</head>
<body class="container-fluid">
	<div id="nav">
        <a href="ShopList.jsp"><i class="icon-food"></i></a>
        <a href="UserOrderList.jsp"><i class="icon-list-alt selected"></i></a>
        <a href="UserCenter.jsp"><i class="icon-user"></i></a>
	</div>
	<div id="Content">
		<ul id="logo"></ul>
		<div id="list">
			<%--<div class="list">--%>
				<%--<img src="img/Starbucks.jpg" alt="商家logo" />--%>
				<%--<div class="list-wrap">--%>
					<%--<div class="list-part">--%>
						<%--<p class="name">FoodName Pizza</p>--%>
						<%--<p class="time">2016.7.1</p>--%>
					<%--</div>--%>
					<%--<div class="list-part">--%>
						<%--<p class="orderId">2016070113777841037</p>--%>
						<%--&lt;%&ndash;<button onclick="" class="btn-confirm">确认收货</button>&ndash;%&gt;--%>
					<%--</div>--%>
				<%--</div>--%>
			<%--</div>--%>

		</div>
	</div>
    <script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
	<script type="text/javascript">
        var baseUrl = '<%=basePath%>';
        var clientJson = new Object();
        clientJson.userPhone = '<%=userPhone%>';
	</script>
    <%--业务处理--%>
    <script type="text/javascript" src="js/UserOrderList.js"></script>
</body>
</html>