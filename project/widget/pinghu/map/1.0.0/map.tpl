<img src="<%=url%>" class='back-img'>
<%for(var i in data){%>
	<div class="prompt" style="left:<%=data[i].px%>px;top:<%=data[i].py%>px">
		<label><%=data[i].street%></label>
		<div class="prompt-content">
			<label>上传数据量：<span><%=data[i].total%></span></label>
		</div>
	</div>
<%}%>