Ext.define('tickets',
{
    extend: 'Ext.grid.Panel',
	stateful: true,
	width: 700,
    height: 500,
	columns: [
	  	{
	  		text: 'Title',
	  		flex: 1,
			sortable: false,
			dataIndex: 'title'				
	  	},
	  	{
 			text: "Node Id",
  			sortable: false,
  			dataIndex: 'nid'
	  	},
	  		{
	  			text: 'Priority',
	  			sortable: false,
	  			dataIndex: 'priority'
	  		},
            {
                text: 'Name',
                sortable: true,
                dataIndex: 'name'
            }
	  	],
	stripeRows: true,
	bbar: Ext.create('Ext.PagingToolbar',
	{
		pageSize: 10,
		store: this.tickets,
		displayInfo:true
	}
	),
    constructor: function(){
        this.callParent();
        this.store = Ext.create('Ext.data.ArrayStore',
		{
			pageSize: 10,
			remoteSort: true,
			fields:[
				{name: 'title'},
                {name: 'nid'},
				{name: 'priority'},
				{name: 'name'}
			],
			proxy: {
				type: 'jsonp',
				url: 'test.php'
			}
		});
    },
    load_infos: function(){
        this.store.load();
    },
    set_date: function(start_date, end_date){
        this.store.proxy.url='test.php?start_date='+start_date+'&end_date'+end_date;
        this.store.load();
    }
});

