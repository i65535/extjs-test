Ext.require('Ext.tab.*');

Ext.onReady(function(){
    // basic tabs 1, built from existing content
    var tabs = Ext.widget('tabpanel', {
        renderTo: 'tabs1',
        width: 450,
        activeTab: 0,
        defaults :{
            bodyPadding: 10
        },
        items: [{
            contentEl:'script', 
            title: 'Short Text',
            closable: true
        },{
            contentEl:'markup', 
            title: 'Long Text'
        }]
    });

});