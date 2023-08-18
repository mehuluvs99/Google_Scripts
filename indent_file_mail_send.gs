function sendmail(){

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Indent_Form");

  var range = sheet.getRange(2,1,sheet.getLastRow(),9);
  var data = range.getValues();

  for (var i in data){

    var row = data[i];
    var line = parseInt(i)+2;
    console.log(row[0])
    if (row[8] != "Sent" && row[0]!=""){
      var toEmail = "manshu.malhotra@canends.com,raj.baghel@canends.com";
      var subject = "New Indent Generate " + row[1];
      var massage = "Dear " + "Raj | Manshu" +"\n\n" +"New Indent Generate ";
      massage += "Enquiry No : " + row[1] + "\n" + "PI No. / SO No. : " + row[2] + "\n" + "From : " + row[7];
      var url = row[3].toString()
      var ids = url.split("=")[1]
      Logger.log(ids)

      if (ids){
        // var att = DriveApp.getFileById(url.getId());
        var att = DriveApp.getFileById(ids);
        // to = "pcamd@canends.com,mis.amd@canends.com"
        MailApp.sendEmail(toEmail,subject,massage,{
          name: "New Indent Generat " + row[1],
          attachments:att.setName(row[1] + row[7])
          });
        sheet.getRange(line,9).setValue("Sent");
        SpreadsheetApp.flush();   
      } else {
        MailApp.sendEmail(toEmail,subject,massage,{
          name: "New Indent Generat " + row[1],
          });
        sheet.getRange(line,9).setValue("Sent");
        SpreadsheetApp.flush();  
      }
    }
  }
}


