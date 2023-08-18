function afterFormSubmit(e) {

  const info = e.namedValues;
  const pdfFile = createPDF(info);

  const entryRow = e.range.getRow();
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Freight Certificate");
  ws.getRange(entryRow,12).setValue(pdfFile.getUrl());
  ws.getRange(entryRow,11).setValue(pdfFile.getName());

  sendEmail(e.namedValues['Email address'],pdfFile);
}

function sendEmail(email,pdfFile){
  GmailApp.sendEmail(email, "FREIGHT CERTIFICATE " + pdfFile.getName(), "Your PDF is Atteched.",{
    attachments: [pdfFile],
    name: "MIS Dept"
  });
}


function createPDF(info) {

  const pdfFolder = DriveApp.getFolderById("1E8qxA3-YG4Gv4vGl3m4FwHbefkK5CBx_")
  const tempfolder = DriveApp.getFolderById("1w0xh5RbIwxZZG6FvEwlgwAEIaCwFUc-C")
  const tempDoc = DriveApp.getFileById("1MJWbJIZnKoNuhkif9v1L0URxl1Wx8-LAGQhpnaKAWD8")

  const newTempFile = tempDoc.makeCopy(tempfolder);

  const openDoc = DocumentApp.openById(newTempFile.getId());
  const body = openDoc.getBody();

  body.replaceText("{Timestamp}", info['Timestamp'][0]);
  body.replaceText("{SHIPPER}", info['SHIPPER'][0]);
  body.replaceText("{CONSIGNEE}", info['CONSIGNEE'][0]);
  body.replaceText("{POL}", info['Port of Loading'][0]);
  body.replaceText("{POD}", info['Port of Discharge'][0]);
  body.replaceText("{HBL}", info['HBL NUMBER'][0]);
  body.replaceText("{MBL}", info['MBL NUMBER'][0]);
  body.replaceText("{Weight}", info['WEIGHT'][0]);
  body.replaceText("{EX_WORKS}", info['EX WORKS'][0]);

  openDoc.saveAndClose();

  const blobPDF = newTempFile.getAs(MimeType.PDF);
  const pdfFile = pdfFolder.createFile(blobPDF).setName(info['SHIPPER'][0]);
  tempfolder.removeFile(newTempFile);

  return pdfFile;

}
