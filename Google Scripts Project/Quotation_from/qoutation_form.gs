function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}

function submitForm(formObject) {
    var ss = SpreadsheetApp.openById("1cCMOq18jFaGj9R7ScjAf_33J1xNkltbGNJugRFf6leU");
    var sheet = ss.getSheetByName('CE'); // Change to your sheet name

    sheet.appendRow(formObject);

    return "Form submitted successfully!";
}




function getActiveUser() {
  console.log(Session.getActiveUser().getEmail())
  return Session.getActiveUser().getEmail();
}

function getpreparedby(){
  var user = Session.getActiveUser().getEmail();
  var name = user.split("@")[0];

  if (name === "mis.amd"){
    return "Mehul Panchal"
  } 
  if (name === "hcabalo"){
    return "Honey Rose Cabalo"
  } 
  if (name === "swati.dangi"){
    return "Swati Dangi"
  } 
  if (name === "jagruti.mistri"){
    return "Jagruti Mistri"
  } 
  if (name === "richa.sharma"){
    return "Richa Peer"
  }

}

function getUpdatedQuotation(selectedCompany) {
  console.log(selectedCompany);
  var sheet = SpreadsheetApp.openById("1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA").getSheetByName("CE_Qoutation_Number");
  var lastrow = sheet.getLastRow()
  var sheet2 = SpreadsheetApp.openById("1ighYpgK-4q-CkhkOuK6-ug44fArDUAGpJxmaaP-2bAA").getSheetByName("LI_Qoutation_Number");
  var lastrow2 = sheet2.getLastRow()
  var year = new Date()

  if (selectedCompany === "1") {
    var updatedNumber = "CE/" + Utilities.formatDate(year, "ISD", "YYYY") + "/QUO/0" + lastrow;
    sheet.getRange(lastrow + 1, 1).setValue(updatedNumber);
  } else if (selectedCompany === "2") {
    var updatedNumber = "LI/" + Utilities.formatDate(year, "ISD", "YYYY") + "/QUO/0" + lastrow2;
    sheet2.getRange(lastrow2 + 1, 1).setValue(updatedNumber);
  }
  return updatedNumber;
}


function timestamps(){
  var now = new Date();
  console.log(now);
  
  // Get the time zone offset in minutes
  var timeZoneOffset = now.getTimezoneOffset();
  
  // Convert the time zone offset to the format "GMT±HH:mm"
  var timeZoneOffsetFormatted = "GMT" + (timeZoneOffset > 0 ? "-" : "+") +
    Math.floor(Math.abs(timeZoneOffset) / 60).toString().padStart(2, "0") + ":" +
    (Math.abs(timeZoneOffset) % 60).toString().padStart(2, "0");
  
  var formattedDate = Utilities.formatDate(now, timeZoneOffsetFormatted, "dd/MM/yyyy HH:mm:ss");
  return formattedDate;
}