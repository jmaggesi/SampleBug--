// ==========================================================================
// Project:   Sample.Model
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

/** @class

  Sample Model

  @extends SC.Record
  @version 0.1
*/
Sample.Model = SC.Record.extend(
/** @scope Sample.Model.prototype */ {

    primaryKey: 'id',


    id: SC.Record.attr(String),
	dc_title: SC.Record.attr(String),
	dc_creator: SC.Record.attr(Array),
    dc_publisher: SC.Record.attr(Array),
    dc_language: SC.Record.attr(String),
    dc_date: SC.Record.attr(String),
    numCitazioni: SC.Record.attr(Number)
    
}) ;
