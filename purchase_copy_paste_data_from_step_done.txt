function p_copyAndPaste() {

  var sourceSpreadsheet = SpreadsheetApp.openById("1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA"); // Replace with the ID of the source spreadsheet
  var sourceSheet = sourceSpreadsheet.getSheetByName("Step_Done"); // Replace with the name of the source sheet

  var destinationSpreadsheet = SpreadsheetApp.openById("1vF_JU20t2FpDLWcrZHtHM4Km7y9eI6gUK3_vhMxJ5wQ");
  var destinationSheet = destinationSpreadsheet.getSheetByName("Status_Done"); // Replace with the name of the destination sheet
  
  var rangeToCopy = sourceSheet.getRange("A1:I4000"); // Replace with the range you want to copy
  var destinationRange = destinationSheet.getRange("A1:I4000"); // Replace with the top-left cell of the destination range
  
  var valuesToCopy = rangeToCopy.getValues();
  destinationRange.setValues(valuesToCopy);

  var sourceSpreadsheet = SpreadsheetApp.openById("1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA"); // Replace with the ID of the source spreadsheet
  var sourceSheet = sourceSpreadsheet.getSheetByName("Lead_Time"); // Replace with the name of the source sheet
  
  var destinationSpreadsheet = SpreadsheetApp.openById("1vF_JU20t2FpDLWcrZHtHM4Km7y9eI6gUK3_vhMxJ5wQ");
  var destinationSheet = destinationSpreadsheet.getSheetByName("Lead_Time"); // Replace with the name of the destination sheet
  
  var rangeToCopy = sourceSheet.getRange("A1:F1000"); // Replace with the range you want to copy
  var destinationRange = destinationSheet.getRange("A1:F1000"); // Replace with the top-left cell of the destination range
  
  var valuesToCopy = rangeToCopy.getValues();
  destinationRange.setValues(valuesToCopy);
}
