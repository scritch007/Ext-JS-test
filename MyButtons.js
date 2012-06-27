Ext.define('MyButtons',
{
    extend: 'Ext.button.Button',
    handler: function() {
                if (!this.win)
                {
		    console.log ("GOGOGOGO");
                    this.win = Ext.create(this.WindowName);
                }
                if (this.win.isVisible())
                {
                    this.win.hide();
                }else{
                    this.win.show(document.body);
                }

            },


    constructor: function(WindowName, ButtonName){
        this.text = ButtonName;
	    this.WindowName = WindowName;
	    this.win= null;
        console.log(ButtonName);
        console.log("HERE WE ARE");
        this.callParent();
    }
});

