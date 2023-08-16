function sendMail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CE_Quotation_File");
  const enqno = sheet.getRange(3,2).getValue().toString()

  const data_time = sheet.getRange(1,4).getValue()
  const date_time_f = Utilities.formatDate(data_time, "GMT+05:30", 'E MMM/dd/yyyy hh:mm:ss');
  // Logger.log(date_time_f)
  
  const com_mail_id = sheet.getRange(7,4).getValue().toString()
  const contact_person = sheet.getRange(5,4).getValue().toString()
  // Logger.log(com_mail_id)
  
  const doer_mail_id = sheet.getRange(22,4).getValue().toString()
  // Logger.log(doer_mail_id)


  const file_name = enqno
  // Logger.log(file_name)
  const pdfFolder = DriveApp.getFolderById("16xr3NP1xLP3Re5O913b4TFoC4xscDkRY")
  const tempDoc = DriveApp.getFileById("1ujYUZmJzCHMSNWXpkFQjTkkdtm959oXFwNuy0trkBcU")

  const tempfolder = DriveApp.getFolderById("10ukx9W8duGBCuUI6ifaCskcd-OUpT_UX")

  const newTempFile = tempDoc.makeCopy(tempfolder);
  const namedoc = newTempFile.setName(file_name+date_time_f);

  const blobPDF = tempDoc.getAs(MimeType.PDF);
  const pdfFile = pdfFolder.createFile(blobPDF).setName(file_name+date_time_f);
  const url = pdfFile.getId()
  // Logger.log(url)

  const pdffile_id = DriveApp.getFileById(url)

  // Logger.log(pdffile_id)
 

//   var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
// var blob = Utilities.newBlob('Insert any HTML content here', 'text/html', 'my_document.html');
// MailApp.sendEmail('mike@example.com', 'Attachment example', 'Two files are attached.', {
//     name: 'Automatic Emailer Script',
//     attachments: [file.getAs(MimeType.PDF), blob]
// });

  
  var massage = "Dear " + contact_person + ",\n\n"

  massage += "Hope this email finds you in good health and spirits.\n\n"

  massage += "Thank you for considering our company for your needs. It's our pleasure to provide you with a quotation for the same ,as per your requirement.\n\n"

  massage += "We believe that our quotation offers the best value for your investment, and we are confident that our product will exceed your expectations.\n\n"

  massage += "We look forward to the opportunity to work with you and provide you with exceptional products."

  GmailApp.sendEmail(com_mail_id,"Enquiry No. "+ file_name,massage,{
    attachments:[pdffile_id],
    name : "MIS Dept"
  })

  var sheet3 = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
  var ss = sheet3.getSheetByName("CE_Qoutation_Number")
  var lastRow = ss.getLastRow();
  var lastQuotationNumber = ss.getRange(lastRow, 2).getValue();
  var newQuotationNumber = lastQuotationNumber + 1;
  var update = ss.getRange(lastRow+1,1).setValue("CE/2023/QUO/0"+newQuotationNumber)
  var update1 = ss.getRange(lastRow+1,2).setValue(newQuotationNumber)
  var sheet4 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet4.getSheetByName("CE_Quotation_File")
  var set_value = ss1.getRange(3,2).setValue("CE/2023/QUO/0"+newQuotationNumber)


  return pdfFile;

}

