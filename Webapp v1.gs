function doGet() {
  var ss = SpreadsheetApp.openById("1yokSY8vCd3eU6lfgByu3LK9VXOgdGm9zMzOXq_Iz2ws");
  var sheet = ss.getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  
  var doerMailId = Session.getActiveUser().getEmail();
  var filteredData = data.filter(function(row) {
    if (row[15].includes(doerMailId)) {
      return doerMailId;
    }
    
  });
  
  var template = HtmlService.createTemplateFromFile('index');
  template.filteredData = filteredData;
  
  var htmlOutput = template.evaluate();
  htmlOutput.setTitle("Dispatch Data");
  
  return htmlOutput;
  
}
