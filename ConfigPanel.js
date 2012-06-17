Ext.define('ConfigPanel',
{
    extend: 'Ext.panel.Panel',
    title:'Config',
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Start date',
        id: 'startDate'
    }, 
    {
        xtype: 'splitter'
    },
    {
        xtype: 'datefield',
        fieldLabel: 'End date',
        id: 'endDate'
    },        
    {
        xtype: 'button',
        text: 'Show Window 1',
        handler: function() {
                if (!this.up('').win1)
                {
                    this.up('').win1 = Ext.create('MyWindow1');
                }
                if (this.up('').win1.isVisible())
                {   
                    this.up('').win1.hide();
                }else{
                    this.up('').win1.show(document.body);
                }

            }
        }, 
        {
            xtype: 'button',
            text: 'Show Window 2',
            handler: function() {
                if(!this.up('').win2)
                {
                    this.up('').win2 = Ext.create('MyWindow2');
                }
                if (this.up('').win2.isVisible())
                {   
                    this.up('').win2.hide();
                }else{
                    this.up('').win2.show(document.body);
                }

            }
        },
        {
            xtype: 'button',
            text: 'Show tickets',
            handler: function(){
                if(!this.up('').tickets)
                {
                    this.up('').tickets = Ext.create('tickets');
                }
                this.up('').tickets.render(document.body);
            }
        }, 
        {
            xtype:'button',
            text: 'Load tickets',
            handler: function(){
                Ext.get('startDate');
                Ext.get('endDate');
                this.up('').tickets.set_date('toto');
                this.up('').tickets.load_infos();
            }
        }
    ],
    constuctor: function(){
        this.win1 = null;
        this.win2 = null;
        this.tickets = null;
    }
});
