function sendMail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shipment");

  const unique_id = sheet.getRange(2,4).getValue().toString()

  const data_time = sheet.getRange(3,4).getValue()
  const date_time_f = Utilities.formatDate(data_time, "GMT+05:30", 'E MMM/dd/yyyy hh:mm:ss');
  
  const com_mail_id = sheet.getRange(3,2).getValue().toString()
  const contact_person = sheet.getRange(4,2).getValue().toString()

  const file_name = unique_id
  const pdfFolder = DriveApp.getFolderById("1ZKErUldZlwn3In-7HtGRLobzmodCeQ8S")
  const tempDoc = DriveApp.getFileById("1dxxd2Dr-apGdbB1vMFXiQsgneUa_A03PrtnYHGN5Nd4")
  const tempfolder = DriveApp.getFolderById("1Dvd29Y5riBwhdzoHBtJfYXmWjUFNmzae")

  const newTempFile = tempDoc.makeCopy(tempfolder);
  const namedoc = newTempFile.setName(file_name+date_time_f);

  const blobPDF = sheet.getAs(MimeType.PDF);
  const pdfFile = pdfFolder.createFile(blobPDF).setName(file_name+date_time_f);
  const url = pdfFile.getId()

  const pdffile_id = DriveApp.getFileById(url)

  var massage = "Dear Recipient" + ",\n\n"
  massage += "Sending you our new enquiry." + "\n\n"
  massage += "Kindly check attached file and share your best quotation for the same." + "\n\n"
  massage += "Thanks and Regards" + "\n" + "Raj Bhagel" + "\n" + "9106116710"

  GmailApp.sendEmail(com_mail_id,"Shipment_ID. "+ file_name,massage,{
    attachments:[pdffile_id],
    name : "Operation Executive"
  })

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

  return pdfFile;

}

