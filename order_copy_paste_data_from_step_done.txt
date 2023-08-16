function o_copyAndPaste() {
  
  // const info = e.namedValues;
  // const entryRow = e.range.getRow();

  var sourceSpreadsheet = SpreadsheetApp.openById("1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA"); // Replace with the ID of the source spreadsheet
  var sourceSheet = sourceSpreadsheet.getSheetByName("Step_Done"); // Replace with the name of the source sheet
  
  var destinationSpreadsheet = SpreadsheetApp.openById("10wmasPpgQL9VFLn3fbGoJDYiEdOAYIFyaw1_UdgyfMs");
  var destinationSheet = destinationSpreadsheet.getSheetByName("Status_Done"); // Replace with the name of the destination sheet
  
  var rangeToCopy = sourceSheet.getRange("A1:I4000"); // Replace with the range you want to copy
  var destinationRange = destinationSheet.getRange("A1:I4000"); // Replace with the top-left cell of the destination range
  
  var valuesToCopy = rangeToCopy.getValues();
  destinationRange.setValues(valuesToCopy);

  var sourceSpreadsheet = SpreadsheetApp.openById("1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA"); // Replace with the ID of the source spreadsheet
  var sourceSheet = sourceSpreadsheet.getSheetByName("Lead_Time"); // Replace with the name of the source sheet
  
  var destinationSpreadsheet = SpreadsheetApp.openById("10wmasPpgQL9VFLn3fbGoJDYiEdOAYIFyaw1_UdgyfMs");
  var destinationSheet = destinationSpreadsheet.getSheetByName("Lead_Time"); // Replace with the name of the destination sheet
  
  var rangeToCopy = sourceSheet.getRange("A1:F1000") // Replace with the range you want to copy
  var destinationRange = destinationSheet.getRange("A1:F1000"); // Replace with the top-left cell of the destination range
  
  var valuesToCopy = rangeToCopy.getValues();
  destinationRange.setValues(valuesToCopy);


  // var rangeToCopy1 = sourceSheet.getRange(entryRow,1); // Replace with the range you want to copy
  // var rangeToCopy2 = sourceSheet.getRange(entryRow,2); // Replace with the range you want to copy
  // var rangeToCopy3 = sourceSheet.getRange(entryRow,3); // Replace with the range you want to copy
  // var rangeToCopy4 = sourceSheet.getRange(entryRow,4); // Replace with the range you want to copy
  // var rangeToCopy5 = sourceSheet.getRange(entryRow,5); // Replace with the range you want to copy
  // var rangeToCopy6 = sourceSheet.getRange(entryRow,6); // Replace with the range you want to copy
  // var rangeToCopy7 = sourceSheet.getRange(entryRow,7); // Replace with the range you want to copy
  // var rangeToCopy8 = sourceSheet.getRange(entryRow,8); // Replace with the range you want to copy

  // destinationSheet.getRange(entryRow,1).setValue(rangeToCopy1.getValue());
  // destinationSheet.getRange(entryRow,2).setValue(rangeToCopy2.getValue());
  // destinationSheet.getRange(entryRow,3).setValue(rangeToCopy3.getValue());
  // destinationSheet.getRange(entryRow,4).setValue(rangeToCopy4.getValue());
  // destinationSheet.getRange(entryRow,5).setValue(rangeToCopy5.getValue());
  // destinationSheet.getRange(entryRow,6).setValue(rangeToCopy6.getValue());
  // destinationSheet.getRange(entryRow,7).setValue(rangeToCopy7.getValue());
  // destinationSheet.getRange(entryRow,8).setValue(rangeToCopy8.getValue());

}



// function o_copyAndPaste() {
//   var sourceSpreadsheetId = "1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA"; // Replace with the ID of the source spreadsheet
//   var destinationSpreadsheetId = "10wmasPpgQL9VFLn3fbGoJDYiEdOAYIFyaw1_UdgyfMs"; // Replace with the ID of the destination spreadsheet

//   var sourceSheetName = "Step_Done"; // Replace with the name of the source sheet
//   var destinationSheetName = "Status_Done"; // Replace with the name of the destination sheet

//   var sourceSpreadsheet = SpreadsheetApp.openById(sourceSpreadsheetId);
//   var sourceSheet = sourceSpreadsheet.getSheetByName(sourceSheetName);

//   var destinationSpreadsheet = SpreadsheetApp.openById(destinationSpreadsheetId);
//   var destinationSheet = destinationSpreadsheet.getSheetByName(destinationSheetName);

//   var rangeToCopy = sourceSheet.getRange("A1:I4000");
//   var valuesToCopy = rangeToCopy.getValues();

//   var destinationRange = destinationSheet.getRange(1, 1, valuesToCopy.length, valuesToCopy[0].length);
//   destinationRange.setValues(valuesToCopy);


//   var sourceSpreadsheetId = "1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA"; // Replace with the ID of the source spreadsheet
//   var destinationSpreadsheetId = "10wmasPpgQL9VFLn3fbGoJDYiEdOAYIFyaw1_UdgyfMs"; // Replace with the ID of the destination spreadsheet

//   var sourceSheetName = "Lead_Time"; // Replace with the name of the source sheet
//   var destinationSheetName = "Lead_Time"; // Replace with the name of the destination sheet

//   var sourceSpreadsheet = SpreadsheetApp.openById(sourceSpreadsheetId);
//   var sourceSheet = sourceSpreadsheet.getSheetByName(sourceSheetName);

//   var destinationSpreadsheet = SpreadsheetApp.openById(destinationSpreadsheetId);
//   var destinationSheet = destinationSpreadsheet.getSheetByName(destinationSheetName);

//   var rangeToCopy = sourceSheet.getRange("A1:F400");
//   var valuesToCopy = rangeToCopy.getValues();

//   var destinationRange = destinationSheet.getRange(1, 1, valuesToCopy.length, valuesToCopy[0].length);
//   destinationRange.setValues(valuesToCopy);

// }
