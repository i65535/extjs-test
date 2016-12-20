Ext.onReady(function(){
new Ext.Panel({
renderTo:"hello",
title:" 面板头部 header",
width:300,
height:200,
html:'<h1> 面板主区域 </h1>',
tbar:[{text:' 顶部工具栏 topToolbar'}],
bbar:[{text:' 底部工具栏 bottomToolbar'}],
buttons:[{text:" 按钮位于 footer"}]
});
});