function gen_pur_req() {
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet2.getSheetByName("Pur_Req")

  var userName = Session.getActiveUser().getEmail();
  var user_name = userName.substring(0, userName.indexOf("@"));

  if (user_name == "raj.baghel"){
    ss1.getRange(3,2).setValue("Raj Baghel")
    ss1.getRange(4,2).setValue("Purchase Executive") 
    ss1.getRange(5,2).setValue("9106116710")}
  if (user_name == "mis.amd"){
    ss1.getRange(3,2).setValue("Mehul Panchal")
    ss1.getRange(4,2).setValue("MIS Executive") 
    ss1.getRange(5,2).setValue("9998347997")}
  // if (user_name == "hcabalo"){user_name = "Rose Cabalo"}

  var sup_sheet = SpreadsheetApp.openById("17m-L2st7cfOdL0wCrF9ERUntACIQeFL4iJ_hpr-rdyw");
  var sup_ss = sup_sheet.getSheetByName("Supplier Master").getSheetValues(2,1,sup_sheet.getLastColumn(),sup_sheet.getLastRow());
  
  for (i in sup_ss){
    var n = parseInt(i)
    Logger.log(sup_ss[n])
    Logger.log(ss1.getRange(3,7).getValue(), sup_ss[n][2])
    if (ss1.getRange(3,7).getValue() == sup_ss[n][2]){
      ss1.getRange(4,7).setValue(sup_ss[n][5])
      ss1.getRange(5,7).setValue(sup_ss[n][4])

    }
  }

  
}

function gen_pur_req_number(){
  var sheet = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
  var ss = sheet.getSheetByName("Pur_Req_ID")
  var lastRow = ss.getLastRow();
  var lastQuotationNumber = ss.getRange(lastRow, 2).getValue();
  var newQuotationNumber = lastQuotationNumber + 1;
  var update = ss.getRange(lastRow+1,1).setValue("CE/2023/PRQ/0"+newQuotationNumber)
  var update1 = ss.getRange(lastRow+1,2).setValue(newQuotationNumber)
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet2.getSheetByName("Pur_Req")
  var set_value = ss1.getRange(2,2).setValue("CE/2023/PRQ/0"+newQuotationNumber)
}
