// ==========================================================================
// Project:   Sample.artRecordArray
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

/** @class

  (Document Your Controller Here)

  @extends ArrayController
*/
Sample.artRecordArray = SC.ArrayController.create(SC.CollectionViewDelegate,{
    isEditable: YES,
	allowsMultipleSelection: NO,
    
    collectionViewDeleteContent: function(view, content, indexes) {
    // distrugge il record
    var records = indexes.map(function(idx) {
      return this.objectAt(idx);
    }, this);
    
    // Ricordarsi nella destroy di cancellare tutte
    // le citazioni, le statistiche e i commenti
    records.invoke('destroy');

    var selIndex = indexes.get('min') - 1;
    if (selIndex < 0) {
      selIndex = 0;
    }
    this.selectObject(this.objectAt(selIndex));
  }

}) ;
