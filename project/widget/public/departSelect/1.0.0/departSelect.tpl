<h2>请选择部门</h2>
<div class="select-text">
    <ul>
        <%if(str!=''){%><%=str%><%}%>
    </ul>
</div>
<div class="select-title">
    <%if(!title)%><span data-id="0">HOME</span><%else{%><%=title%><%}%>
</div>
<div class="select-content">
    <%if(type =='1'){%>
    <div class="select-all">
        <label><input type="checkbox" <%if(flag){%>checked="<%=flag%>"<%}%>/>全选</label>
    </div>
    <%}%>
    <ul class="select-content-ul">
        <%for(var i = 0;i<data.length;i++){%>
        <li><input type="checkbox" <%if(data[i].checked){%>checked="<%=data[i].checked%>"<%}%>/>
            <a class="item" href="javascript:void(0);" data-name="<%=data[i].name%>" data-id="<%=data[i].id%>" data-num="<%=data[i].num%>"><%=data[i].name%><%if(data[i].num>0){%><span class="right"><%=data[i].num%> &gt;</span><%}%></a></li>
        <%}%>
    </ul>
</div>
<div class="select-foot">
    <button class="confirm">确定</button>
    <button class="cancel">取消</button>
</div>