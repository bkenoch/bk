var args = require('./args');
var filepath = require('./filepath');
var XLSX = require('xlsx');
var settings_json = require("../data/settings.json");

var arg_obj = new args(); //參數物件

if (!arg_obj.isok) {
    console.log(arg_obj.msg);
    return;
}

//args ok, do something
var myFilepath = settings_json.importpath + arg_obj.filename;
var fp_obj = new filepath(myFilepath);
//var fp_obj = new filepath(); fp_obj.setPath(myFilepath);
if (!fp_obj.isok) {
    console.log(fp_obj.msg);
    return;
}
//console.log(fp_obj);

//if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile(myFilepath);
var first_sheet_name = workbook.SheetNames[1];
var ws = workbook.Sheets[first_sheet_name];
var mysheet_items = XLSX.utils.sheet_to_csv(ws, { header: 0 });
//console.log(JSON.stringify(mysheet_items[1]))

//console.log(mysheet_items);
var csv_items = new Array();
csv_items = mysheet_items.split('\n');
console.log(csv_items);

console.log('顆顆')