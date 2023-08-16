function checkSheetExist() {
 let ss = SpreadsheetApp.getActiveSpreadsheet()


 let setupSheet = ss.getSheetByName("Archive Setup")
 let errorSheet = ss.getSheetByName("Archive Errors")


 if (!setupSheet){
   let createArchiveSetup = ss.insertSheet("Archive Setup")
   createArchiveSetup.appendRow(["Destination Spreadsheet",  "Destination Sheet Name", "Source Sheet Name",  "Completed Status Column Number"])
 }


 if (!errorSheet) {
   let createErrorSheet = ss.insertSheet("Archive Errors")
   createErrorSheet.appendRow(["Timestamp","Error Detail"])
 }


 supplyValues()
}


function supplyValues() {
 let ss = SpreadsheetApp.getActiveSpreadsheet()
 let sheet = ss.getSheetByName("Archive Setup")
 let data = sheet.getRange(1, 1, sheet.getLastRow(), 4).getValues()


 data.forEach(function (r,index) {
   let destUrl = r[0]
   let destSheetName = r[1]
   let sourceSheetName = r[2]
   let statusColNum = r[3]-1


   if (destUrl.indexOf("https") > -1){
   if (destUrl && destSheetName && sourceSheetName && statusColNum) {
     let info = { destUrl: destUrl, destSheetName: destSheetName, sourceSheetName: sourceSheetName, statusColNum: statusColNum }
     try {
       archiveData(info)
     } catch (e) {
       logError("Error While archive data: " + e)
     }
   } else {
     logError("All Values not put into Archive Sheet on Row " + String(index+1))
   }
   }


 })
}


function logError(e){
 let ss = SpreadsheetApp.getActiveSpreadsheet()
 let sheet = ss.getSheetByName("Archive Errors")
 sheet.appendRow([new Date(),e])
}




function archiveData(info) {
 // Get the active sheet in the current document
 let ss = SpreadsheetApp.getActive();


 let sheet = ss.getSheetByName(info.sourceSheetName);


 // Get the range of cells that contain data in the active sheet
 let dataRange = sheet.getDataRange();


 // Get the values of the cells in the data range
 let values = dataRange.getValues();


 // open destination spreadsheet
 let ds = SpreadsheetApp.openByUrl(info.destUrl)


 // Create a new sheet to copy the rows to
 let newSheet = ds.getSheetByName(info.destSheetName);


 // Loop through the values array in reverse order and copy only the rows that have "Completed" in column A
 for (var i = values.length - 1; i >= 0; i--) {
   let statusCol = values[i][info.statusColNum]
   if (statusCol){
     if (statusCol.toLowerCase() == "archive") {
     // Use the setValues() method to copy the row to the new sheet
     newSheet.getRange(newSheet.getLastRow() + 1, 1, 1, values[i].length).setValues([values[i]]);


     // Use the deleteRow() method to delete the row from the original sheet
     sheet.deleteRow(i + 1);
   }
   }
  
 }


 let figureLastRow = sheet.getDataRange().getValues().filter(r => r[0]).length


 let maxRows = sheet.getMaxRows()


 let lessRows = 1000 - maxRows


 let totalRows = 1000 - figureLastRow


 sheet.insertRowsAfter(sheet.getMaxRows(), lessRows)


 let sourceRange = sheet.getRange(figureLastRow + 1, 1, 1, sheet.getLastColumn())
 let targetRange = sheet.getRange(figureLastRow + 1, 1, totalRows + 1, sheet.getLastColumn())






 sourceRange.autoFill(targetRange, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);




}
