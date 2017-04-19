var XLSX = require('xlsx');
//if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('To正航170213-0411-a.xls');
//console.log(workbook);

var first_sheet_name = workbook.SheetNames[0];
//var address_of_cell = 'A1';
/* Get worksheet */
var ws = workbook.Sheets[first_sheet_name];

/* Find desired cell */
//var desired_cell = ws[address_of_cell];

/* Get the value */
//var desired_value = (desired_cell ? desired_cell.v : undefined);

//console.log(ws);

//var sheet_items = XLSX.utils.sheet_to_formulae(ws);
//var sheet_items = XLSX.utils.sheet_to_json(ws, {header:0, raw:true});
var sheet_items = XLSX.utils.sheet_to_json(ws);
//console.log(sheet_items);

console.log(sheet_items.length);

//var json_str = JSON.stringify(sheet_items);
//console.log(json_str);




