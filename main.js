Ext.require(["*"]);
Main = function(){
    var configPanel = Ext.create('ConfigPanel');
    configPanel.render(Ext.getBody());
}

Ext.onReady(Main);
