function sendMail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pur_Req");
  // var sss = sheet.copyTo(SpreadsheetApp.openByID("1WCx9FlLFXCuvPE7Qac7cPviZCq2P7SWVHxKSZgF8a48"));

  const enqno = sheet.getRange(2,2).getValue().toString()

  const data_time = sheet.getRange(2,7).getValue()
  const date_time_f = Utilities.formatDate(data_time, "GMT+05:30", 'E MMM/dd/yyyy hh:mm:ss');
  // Logger.log(date_time_f)
  
  const com_mail_id = sheet.getRange(4,7).getValue().toString()
  const contact_person = sheet.getRange(3,7).getValue().toString()
  // Logger.log(com_mail_id)
  
  // const doer_mail_id = sheet.getRange(22,4).getValue().toString()
  // Logger.log(doer_mail_id)


  const file_name = enqno
  // Logger.log(file_name)
  const pdfFolder = DriveApp.getFolderById("18rAY4L1eHCZcEPTSlXQgmMZ1SddUgDPo")
  const tempDoc = DriveApp.getFileById("13wn2tOVGWCINiMXawAMYqJezNV4MoW5Id3rMc9Fqi_Q")

  const tempfolder = DriveApp.getFolderById("1tSnEkCAMKeh_tQS9f7c21bx-NbKjhxxx")

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

  
  var massage = "Dear Recipient" + ",\n\n"

  massage += "Sending you our new enquiry." + "\n\n"

  massage += "Kindly check attached file and share your best quotation for the same." + "\n\n"

  massage += "Thanks and Regards" + "\n" + "Raj Bhagel" + "\n" + "9106116710"

  GmailApp.sendEmail(com_mail_id,"Purchase_Requisition_No. "+ file_name,massage,{
    attachments:[pdffile_id],
    name : "Purchase Deptartment"
  })

  var sheet3 = SpreadsheetApp.openById("1wyPItOdC5gBMxOC_Hc93IMuqB5xgeyqkc0Y6eZBXByI");
  var ss = sheet3.getSheetByName("Pur_Req_ID")
  var lastRow = ss.getLastRow();
  var lastQuotationNumber = ss.getRange(lastRow, 2).getValue();
  var newQuotationNumber = lastQuotationNumber + 1;
  var update = ss.getRange(lastRow+1,1).setValue("CE/2023/PRQ/0"+newQuotationNumber)
  var update1 = ss.getRange(lastRow+1,2).setValue(newQuotationNumber)
  var sheet4 = SpreadsheetApp.getActiveSpreadsheet();
  var ss1 = sheet4.getSheetByName("Pur_Req")
  var set_value = ss1.getRange(2,2).setValue("CE/2023/PRQ/0"+newQuotationNumber)


  return pdfFile;

}

