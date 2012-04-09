
Ext.require([
	'Ext.form.field.ComboBox',
	'Ext.container.Viewport'
])
Ext.application({
    name: 'HelloExt',
    launch: function() {
	Ext.create('Ext.container.Viewport', 
		{
            		layout: 'fit',
            		items: [
                	{
                    		title: 'Hello Ext',
                    		html : 'Hello! Welcome to Ext JS.'
                	}
            		]
		}
	);


	Ext.Ajax.request(
	{
		url: 'regions',
		success: function(response, opts){
			var decoded = Ext.JSON.decode(response);
            	},
		failure: function(response, opts) {
      			console.log('server-side failure with status code ' + response.status);
   	   	}

        });
	
		},
	});
