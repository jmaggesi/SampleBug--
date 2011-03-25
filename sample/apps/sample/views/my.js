// ==========================================================================
// Project:   Sample.MyView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Sample.MyView = SC.View.extend(SC.ContentDisplay, {

	
	classNames: ['list-articolo'],
	
	displayProperties: 'isSelected' .w(),
	
	contentDisplayProperties: 'dc_title dc_creator numCitazioni dc_publisher' .w(),
	
	render: function(context, firstTime) {
		var content = this.get('content');
		var dc_title = content.get('dc_title');
		var dc_creator = content.get('dc_creator');
		var dc_publisher = content.get('dc_publisher');
		var numCitazioni = content.get('numCitazioni');
		var dc_date = content.get('dc_date');
		var dc_language = content.get('dc_language');
		
		var isSelected = this.get('isSelected');
		var isFiltered = content.get('isFiltered');
		
		var	standard = !isSelected;
		var selected = isSelected;
		var classes = {'standard': standard, 'selected': selected};
		
		
		// Inizio parte del titolo e delle citazioni
		context = context.begin().addClass('top').setClass(classes);
		context = context.begin('p').addClass('titolo').push(dc_title).end();
		
		// Inizio parte del numero di citazioni
		context = context.begin().addClass('right');
		context = context.begin('p').addClass('cit').push(numCitazioni).end();
		
		context = context.end(); 
		context = context.end();
		
		// Inizio parte sotto
		context = context.begin().addClass('bottom').setClass(classes);
		
		// Inizio parte autori
		context = context.begin('p').addClass('item').addClass('autori');
		context = context.begin('span').addClass('label').push('Autori:').end();
		
		//Attenzione Controllare che i dati che ritorna la vista poi siano corretti
		// Funzioncina per eliminare la virgola dalla visualizzazione
		var cambio = new Array();
		for(i=0; i<dc_creator.length;i++){
			cambio[i]=dc_creator[i].replace(',','');
			//console.log(cambio[i]);
		}
		
		//context = context.begin('span').addClass('value').push(dc_creator).end();
		context = context.begin('span').addClass('value').push(cambio).end();
		context = context.end();
		
		// Inizio parte editore
		context = context.begin('p').addClass('item').addClass('altri');
		context = context.begin('span').addClass('label').push('Editore:').end();
		context = context.begin('span').addClass('value').push(dc_publisher).end();
		context = context.end();
		
		//Inizio parte Data
		context = context.begin('p').addClass('item').addClass('altri');
		context = context.begin('span').addClass('label').push('Pubblicato nel:').end();
		context = context.begin('span').addClass('value').push(dc_date).end();
		context = context.end();
		
		//Inizio parte Linguaggio
		context = context.begin('p').addClass('item').addClass('altri');
		context = context.begin('span').addClass('label').push('Lingua:').end();
		context = context.begin('span').addClass('value').push(dc_language).end();
		context = context.end();
		
		// Inizio parte della stringa Cit.
		context = context.begin().addClass('cap');
		context = context.begin('p').addClass('cap').push('Cit.').end();
		context = context.end();
		
		// Fine della parte sotto
		context = context.end();
		
		sc_super();
	
	
	}

});