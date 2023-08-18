//@return Base Url
function getUrl() {
  return ScriptApp.getService().getUrl()
}
//@return Html page raw content string
function getHtml(hash) {
  return HtmlService.createHtmlOutputFromFile(hash).getContent()
}

//@return provided page in the urlquery '?page=[PAGEID]' or main index page
function doGet(e) {
  var page = e.parameter.page
  return HtmlService.createHtmlOutputFromFile(page || 'index')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('App Demo')
}

function enquiryData(formData, fileupload) {

  console.log("formData:", formData);

  var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName("Enquiry Form");
  var folder = DriveApp.getFolderById('1kAE4aEfDMWY9CsWm0XttgLhFr5eR4u55');

  var myfile = Utilities.newBlob(Utilities.base64Decode(fileupload.data), fileupload.mimeType, fileupload.file_name); // Assuming index 3 is MIME type and index 12 is the filename
  
  var fileName = formData[3]; // Assuming the file name is at index 12
  console.log("File Name : ",fileName);
  var file = folder.createFile(myfile); // Create the file using the filename and blob
  var fileUrl = file.getUrl(); 

  formData[12] = fileUrl;
  
  console.log("File URL:", fileUrl);

  sheet.appendRow(formData);
  
  console.log("Data successfully inserted.");
}

function orderData(formData) {
  var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName("Order Form");
  sheet.appendRow(formData);
  console.log("Data successfully inserted.");
}

function purchaseData(formData) {
  var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName("Purchase Form");
  sheet.appendRow(formData);
  console.log("Data successfully inserted.");
}

function dispatchData(formData) {
  var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName("Dispatch Form");
  sheet.appendRow(formData);
  console.log("Data successfully inserted.");
}


function getActiveUser() {
  console.log(Session.getActiveUser().getEmail())
  return Session.getActiveUser().getEmail();
}

function incrementSequenceNumber() {
  var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName("Enquiry Number");
  var lastrow = sheet.getLastRow()
  var year = new Date()
  var updatedNumber = "ENQ"+ Utilities.formatDate(year, "ISD", "YY") + "000" +lastrow;
  sheet.getRange(lastrow+1,1).setValue(updatedNumber);
  return updatedNumber;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function generateUDID() {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var udid = '';
  for (var i = 0; i < 16; i++) {
    udid += chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(udid); // Log to console for verification
  return udid;
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

