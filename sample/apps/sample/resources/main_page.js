// ==========================================================================
// Project:   Sample - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

// This page describes the main user interface for your application.  
Sample.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
   mainPane: SC.MainPane.design({
    //childViews: 'topView middleView bottomView'.w(),
    childViews: 'topView middleView bottomView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 50},
      childViews: 'titolo' .w(),
      anchorLocation: SC.ANCHOR_TOP,
      
      titolo: SC.LabelView.design({
      	layout: {centerY: 0, left: 8, height: 25, width: 200},
      	controlSize: SC.LARGE_CONTROL_SIZE,
      	fontWeight: SC.BOLD_WEIGHT,
      	value: "Simple Bug ?"
      }),
 
    }),
  
  	middleView: SC.ScrollView.design({
		hasHorizontalScroller: YES,
		layout: {top: 50, bottom: 50, left: 0, right: 0},
		backgroundColor: 'white',
		
		contentView: SC.ListView.design({
			layout: {left: 0, right: 0, top: 0, bottom: 0},
			contentBinding: 'Sample.artRecordArray.arrangedObjects',
			selectionBinding:'Sample.artRecordArray.selection',
			selectOnMouseDown: YES,
			canDeleteContent: YES,
			rowHeight: 35,
			exampleView: Sample.MyView,
			recordType: Sample.Model,
			target: "Sample.mainPage.detailPane",
			action: "showDetail"
		})
	}),
 
  	bottomView: SC.ToolbarView.design({
		layout: { bottom: 0, left: 0, right: 0, height: 50},
		//childViews: 'numArticoli hIndex gIndex eIndex' .w(),
		childViews: 'Hello' .w(),
		anchorLocation: SC.ANCHOR_BOTTOM,

		Hello: SC.LabelView.design({
			layout: {centerY: 0, height: 18, left: 590, right: 20},
			value: 'HELLO !!!'
		})
		
	})
  
  	
  
  }),
  
  detailPane:SC.PanelPane.create({
  		layout: { width: 1000, height: 500, centerX: 0, centerY: 0 },
  		
  		contentView: SC.View.extend({
  			childViews: 'titoloView titolo autori close' .w(),
  			
  			titoloView: SC.LabelView.design({
  				layout:{ left: 425, width: 150, top: 17, height: 30 },
  				fontWeight: SC.BOLD_WEIGHT,
  				value:'Dettagli dell\'articolo'
  			}),
  			
  			titolo: SC.View.design({
  				layout:{ left: 20, top: 40, centerY: 0 },
  				childViews: 'titoloLabel fieldTitolo' .w(),
 				 			
  			
  				titoloLabel: SC.LabelView.design({
  					layout:{ left: 20, width: 50,  height: 30, top:5  },
  					value:'Titolo:'
  				}),
  			
  				fieldTitolo: SC.TextFieldView.design({
  					layout:{ width: 250, height: 22,  left: 80, top:5, centerY: 0 },
                valueBinding:'Sample.artSingleRecord.dc_title'
  				}),
  			
  			}),
  			
  			autori: SC.View.design({
  				layout: { left: 20, top: 80, bottom: 150, centerY: 0 },
  				childViews: 'ListAutori' .w(),
  				
  				ListAutori: SC.ScrollView.design({
  					hasHorizontalScroller: NO,
  					//layout: {top: 0, bottom: 100, left: 20, right: 800},
  					layout: {top: 0, left: 20, right: 800},
  					backgroundColor: 'white',
  					
  					contentView: SC.ListView.design({
  						layout: {left: 0, right: 0, top: 0, bottom: 0}, 
						contentBinding: 'Sample.artSingleRecord.dc_creator',
						selectionBinding:'Sample.artSingleRecord.selection',
                        canDeleteContent: YES,
						canEditContent: YES
  						
  					})
  					
  				})
  				
  			}),
  			
  			close: SC.ButtonView.design({
  				layout: {left:20, bottom: 20, width: 120, height:50 },
  				title: 'close',
  				target: "Sample.mainPage.detailPane",
  				action:'close'
  			})
  			
  			
  		}),
  // Questa parte mi permette di mostrare il pannello quando si 
  // fa un doppio click	sulla listItem	
  		visibile: NO,
  		
  	/**
     * Osservatore che mi permette di aggiungere e nascondere 
     * il pannello
     */
    detailIsVisibleDidChange: function() {
      var panel = Sample.mainPage.get('detailPane');
      if (this.get('visibile')) {
        // aggiunge il pannello alla pagina
        panel.append();
        
      }
      else {
        // Hide
        panel.remove();
      }
    }.observes('visibile'),
    
    /*
    * Mostra il pannello 
    */
    showDetail:function() {
    	this.set('visibile', YES);
    },
    
    close:function() {
    	this.set('visibile', NO);
    }
  })
});

