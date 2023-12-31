function generateQuotationNumber() {
  const sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CE_Quotation_File");
  const name = sheet1.getRange(1,1).getValue().toString()  
  if (name == "CAN ENDS GROUP"){
    var sheet = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
    var ss = sheet.getSheetByName("CE_Qoutation_Number")
    var lastRow = ss.getLastRow();
    var lastQuotationNumber = ss.getRange(lastRow, 2).getValue();
    var newQuotationNumber = lastQuotationNumber + 1;
    var update = ss.getRange(lastRow+1,1).setValue("CE/2023/QUO/0"+newQuotationNumber)
    var update1 = ss.getRange(lastRow+1,2).setValue(newQuotationNumber)
    var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
    var ss1 = sheet2.getSheetByName("CE_Quotation_File")
    var set_value = ss1.getRange(3,2).setValue("CE/2023/QUO/0"+newQuotationNumber)
  } else {
    var sheet = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
    var ss = sheet.getSheetByName("LI_Qoutation_Number")
    var lastRow = ss.getLastRow();
    var lastQuotationNumber = ss.getRange(lastRow, 2).getValue();
    var newQuotationNumber = lastQuotationNumber + 1;
    var update = ss.getRange(lastRow+1,1).setValue("LI/2023/QUO/0"+newQuotationNumber)
    var update1 = ss.getRange(lastRow+1,2).setValue(newQuotationNumber)
    var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
    var ss1 = sheet2.getSheetByName("CE_Quotation_File")
    var set_value = ss1.getRange(3,2).setValue("LI/2023/QUO/0"+newQuotationNumber)
  }
}
