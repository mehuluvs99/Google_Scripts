function sendEndOfDayEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Msg");
  var dataRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()); // Adjust column indices accordingly
  var dataValues = dataRange.getValues();

  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DND");
  var dataRange2 = sheet2.getRange(2, 1, sheet2.getLastRow() - 1, sheet2.getLastColumn()); // Adjust column indices accordingly
  var dataValues2 = dataRange2.getValues();

  for (var i = 0; i < dataValues.length; i++) { // Start the loop from index 0
    var email = dataValues[i][2].toString(); // Adjust the column index for the email
    var message = "<html><body><p>Dear recipient,</p><br><p>This is a Step Done List:</p><br><table><tr><th>TimeStamps</th><th>Enquiry No</th><th>Unique No</th><th>Step Name</th></tr>";//<table border = '1'
    for (var j = 0; j < dataValues2.length; j++) { // Start the loop from index 0
      var v = dataValues[i][0].toString();
      var x = dataValues2[j][6].toString();
      if (v === x) { // Adjust the column indices for comparison
        var timestamp = Utilities.formatDate(dataValues2[j][0], "ISD", "dd/MM/yyyy HH:mm:ss");
        var time_stamp = Utilities.formatDate(dataValues2[j][0], "ISD", "dd/MM/yyyy");
        var enquiryno = dataValues2[j][1].toString();
        var unique = dataValues2[j][4].toString();
        var stepname = dataValues2[j][2].toString();
        message += "<tr><td>" + timestamp + "</td><td>" + enquiryno + "</td><td>" + unique + "</td><td>" + stepname + "</td></tr>";
      }
    }
    message += "</table>";
    message += "</p><br><p>Thank you</p></body></html>";

    if (email !== "") {
      MailApp.sendEmail({
        to: email,
        subject: "Today Step Done List " + time_stamp,
        htmlBody: message
      });
    }
  }

  
}
