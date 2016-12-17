Ext.require([
    'Ext.form.field.ComboBox',
    'Ext.form.FieldSet',
    'Ext.tip.QuickTipManager',
    'Ext.data.*'
]);

// Define the model for a State
Ext.define('State', {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'abbr'},
        {type: 'string', name: 'name'},
        {type: 'string', name: 'slogan'}
    ]
});


var myStore = Ext.create('Ext.data.Store', {
     model: 'State',
     proxy: {
         type: 'ajax',
         url: '/State.json',
         reader: {
             type: 'json',
             root: 'States'
         }
     },
     autoLoad: true
 });

Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();

    // Simple ComboBox using the data store
    var simpleCombo = Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select a single state',
        renderTo: 'simpleCombo',
        displayField: 'name',
        width: 320,
        labelWidth: 130,
        store: myStore,
        queryMode: 'local',
        typeAhead: true
    });

});


