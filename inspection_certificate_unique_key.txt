function uniquenumber() {
  var sheet = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
  var ss = sheet.getSheetByName("Inspection_Certificate")
  var lastRow = ss.getLastRow();
  var num1 = ss.getRange(lastRow, 2).getValue();
  var num2 = ss.getRange(lastRow, 3).getValue();
  var newnum1 = num1 + 1; //G2300821/G023005360
  var newnum2 = num2 + 1;
  ss.getRange(lastRow+1,1).setValue("G2300"+newnum1+"/G02300"+newnum2)
  ss.getRange(lastRow+1,2).setValue(newnum1);
  ss.getRange(lastRow+1,3).setValue(newnum2);
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet2.getSheetByName("Inspection Certificate");
  ss1.getRange(3,23).setValue("G2300"+newnum1+"/G02300"+newnum2);
}
function uniquenumber3() {
  var sheet = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
  var ss = sheet.getSheetByName("Inspection_Certificate2")
  var lastRow = ss.getLastRow();
  var num1 = ss.getRange(lastRow, 2).getValue();
  var newnum1 = num1 + 1; //G2300821/G023005360
  var sheet2 = SpreadsheetApp.openById("136UaXKRpGCHIh-n3QINbGHUjZ1I8HtjZE0TWyjoDIsk");
  var ss1 = sheet2.getSheetByName("Inspection Certificate");
  var data1 = ss1.getRange("W6").getValue();
  if (data1 != previousdata){
    var formattedDate = Utilities.formatDate(data1, 'IST', 'yyyyMMdd');
    ss.getRange(lastRow+1,1).setValue("G"+formattedDate.toString()+newnum1.toString())
    ss.getRange(lastRow+1,2).setValue(newnum1);
    ss1.getRange(4,32).setValue("G"+formattedDate.toString()+newnum1.toString());
  }
  var previousdata = data1;
  
}

function uniquenumber2(){
  var sheet = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
  var ss = sheet.getSheetByName("Inspection_Certificate1")
  var lastRow = ss.getLastRow();
  // var columnLetter = "B"; // Replace with the desired column letter
  // var range = ss.getRange(lastRow, ss.getRange(columnLetter + "1").getColumn());
  var num1 = ss.getRange(lastRow, 2).getValue();
  var num2 = ss.getRange(lastRow, 4).getValue();
  var newnum1 = num1 + 1; //G2300821/G023005360 //XB12343400-XXXX
  var newnum2 = num1 + 2;
  var newnum3 = num1 + 3;
  var newnum4 = num1 + 4;
  var newnum5 = num1 + 5;
  var newnum11 = num2 + 1; //G2300821/G023005360 //XB12343400-XXXX
  var newnum22 = num2 + 2;
  var newnum33 = num2 + 3;
  var newnum44 = num2 + 4;
  var newnum55 = num2 + 5;
  ss.getRange(lastRow+1,1).setValue("XB12343400"+newnum1)
  ss.getRange(lastRow+2,1).setValue("XB12343400"+newnum2)
  ss.getRange(lastRow+3,1).setValue("XB12343400"+newnum3)
  ss.getRange(lastRow+4,1).setValue("XB12343400"+newnum4)
  ss.getRange(lastRow+5,1).setValue("XB12343400"+newnum5)
  ss.getRange(lastRow+1,3).setValue("512"+newnum11)
  ss.getRange(lastRow+2,3).setValue("512"+newnum22)
  ss.getRange(lastRow+3,3).setValue("512"+newnum33)
  ss.getRange(lastRow+4,3).setValue("512"+newnum44)
  ss.getRange(lastRow+5,3).setValue("512"+newnum55)
  ss.getRange(lastRow+1,4).setValue(newnum11)
  ss.getRange(lastRow+2,4).setValue(newnum22)
  ss.getRange(lastRow+3,4).setValue(newnum33)
  ss.getRange(lastRow+4,4).setValue(newnum44)
  ss.getRange(lastRow+5,4).setValue(newnum55)
  ss.getRange(lastRow+1,2).setValue(newnum1);
  ss.getRange(lastRow+2,2).setValue(newnum2);
  ss.getRange(lastRow+3,2).setValue(newnum3);
  ss.getRange(lastRow+4,2).setValue(newnum4);
  ss.getRange(lastRow+5,2).setValue(newnum5);

  var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet2.getSheetByName("Inspection Certificate");
  ss1.getRange(13,1).setValue("XB12343400"+newnum1);
  ss1.getRange(14,1).setValue("XB12343400"+newnum2);
  ss1.getRange(15,1).setValue("XB12343400"+newnum3);
  ss1.getRange(16,1).setValue("XB12343400"+newnum4);
  ss1.getRange(17,1).setValue("XB12343400"+newnum5);
  ss1.getRange(13,4).setValue("512"+newnum11);
  ss1.getRange(14,4).setValue("512"+newnum22);
  ss1.getRange(15,4).setValue("512"+newnum33);
  ss1.getRange(16,4).setValue("512"+newnum44);
  ss1.getRange(17,4).setValue("512"+newnum55);
}



