// ==========================================================================
// Project:   Sample.artSingleRecord
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

/** @class

  (Document Your Controller Here)

  @extends ObjectController
*/
Sample.artSingleRecord = SC.ObjectController.create(
/** @scope Sample.artSingleRecort.prototype */ {

  contentBinding: SC.Binding.single('Sample.artRecordArray.selection'),
  	
  	isEditable: YES

}) ;
