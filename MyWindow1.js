Ext.define('MyWindow1',
{
    extend: 'Ext.window.Window',
    title: 'MyWindows',
    closable:true,
    closeAction: 'hide',
    width: 600,
    minWidth: 350,
    height: 350,
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'}],                 // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
}
);
