function gen_shipment() {
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet2.getSheetByName("Shipment")

  var userName = Session.getActiveUser().getEmail();
  var user_name = userName.substring(0, userName.indexOf("@"));

  if (user_name == "ashish.srivastava"){
    ss1.getRange(4,4).setValue("Ashish Srivastava")
    // ss1.getRange(4,2).setValue("Operation Manager") 
    ss1.getRange(5,4).setValue(userName)
  }
  if (user_name == "jagruti.mistri"){
    ss1.getRange(4,4).setValue("Jagruti Mistri")
    // ss1.getRange(4,2).setValue("Operation Executive") 
    ss1.getRange(5,4).setValue(userName)
  }
  
  if (user_name == "mis.amd"){
    ss1.getRange(4,4).setValue("Mehul Panchal")
    // ss1.getRange(4,2).setValue("MIS Executive") 
    ss1.getRange(5,4).setValue(userName)
  }
  // if (user_name == "jagruti.mistri"){
  //   ss1.getRange(3,2).setValue("Jagruti Mistri")
  //   ss1.getRange(4,2).setValue("Operation Executive") 
  //   ss1.getRange(5,2).setValue("9316800710")}
  // if (user_name == "hcabalo"){user_name = "Rose Cabalo"}

  var sup_sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sup_ss = sup_sheet.getSheetByName("Master Data").getSheetValues(2,1,sup_sheet.getLastColumn(),sup_sheet.getLastRow());
  console.log(ss1.getRange(2,2).getValue())
  for (i in sup_ss){
    var n = parseInt(i)
    if (ss1.getRange(2,2).getValue() == sup_ss[n][0]){
      // ss1.getRange(2,3).setValue(sup_ss[n][5])
      ss1.getRange(3,2).setValue(sup_ss[n][1])
      ss1.getRange(4,2).setValue(sup_ss[n][2])
      ss1.getRange(5,2).setValue(sup_ss[n][3])

    }
  }
}

function gen_pur_req_number(){
  var sheet3 = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sheet3.getSheetByName("Shipment_ID")
  var lastRow = ss.getLastRow();
  var lastQuotationNumber = ss.getRange(lastRow, 2).getValue();
  var newQuotationNumber = lastQuotationNumber + 1;
  ss.getRange(lastRow+1,1).setValue("CE/2023/SHPENQ/00"+newQuotationNumber)
  ss.getRange(lastRow+1,2).setValue(newQuotationNumber)
  var sheet4 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet4.getSheetByName("Shipment")
  ss1.getRange(2,4).setValue("CE/2023/SHPENQ/00"+newQuotationNumber)
  
}
