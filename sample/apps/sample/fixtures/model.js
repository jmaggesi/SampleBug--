// ==========================================================================
// Project:   Sample.Model Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

sc_require('models/model');

Sample.Model.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  //
  // { guid: 2,
  //   firstName: "Dwight",
  //   lastName: "Schrute" },
  //
  // { guid: 3,
  //   firstName: "Jim",
  //   lastName: "Halpert" },
  //
  // { guid: 4,
  //   firstName: "Pam",
  //   lastName: "Beesly" },
  //
  // { guid: 5,
  //   firstName: "Ryan",
  //   lastName: "Howard" }
  
    { id: 8,
        dc_title: "Fixture di prova",
        dc_creator: ['Jonatan, Maggesi','Ivo, Avido','Maccio, Capatonda'],
        dc_publisher: ["Edizioni del Panda"],
        dc_language: 'it',
        dc_date: '2009',
        numCitazioni: 523 },
     
    { id: 9,
        dc_title: "Fixture di prova 3",
        dc_creator: ['IO','ME','GIANGI'],
        dc_publisher: ["Elsevier"],
        dc_language: 'it',
        numCitazioni: 17 },
  
    { id: 4,
  	 dc_title: "Fixture di prova 3",
  	 dc_creator: ['IO','ME','GIANGI'],
  	 dc_publisher: ["Elsevier"],
  	 dc_language: 'it',
  	 numCitazioni: 40 },
     
     { id: 2,
  	 dc_title: "Proooooooof 3",
  	 dc_creator: ['I','ME','IRENE'],
  	 dc_publisher: ["PlosONE"],
  	 dc_language: 'it',
  	 numCitazioni: 17 }
  
  
  
  

];
