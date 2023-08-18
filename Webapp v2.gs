function doGet() {
  var template = HtmlService.createTemplateFromFile('main.html');
  return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Indent");
}

function getData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const datarange = sheet.getRange("A1").getDataRegion();
  const data = datarange.getDisplayValues();
  const headers = data.shift();
  const userEmail = Session.getActiveUser().getEmail(); // Get the email of the user accessing the script
  const jsData = data
    .map((r) => {
      const tempObject = {};
      headers.forEach((header, i) => {
        tempObject[header] = r[i];
      });
      return tempObject;
    })
    .filter((item) => item["Mail ID"].trim().includes(userEmail)); // Filter the data based on the user's email ID
  console.log(jsData);
  return jsData;

}

function watchForDataChanges() {
  var previousData = getData();

  setInterval(function() {
    var currentData = getData();

    if (dataHasChanged(previousData, currentData)) {
      previousData = currentData;
      notifyDataChange();
    }
  }, 5000);
}

function dataHasChanged(previousData, currentData) {
  // Compare previousData with currentData to check for changes
  if (JSON.stringify(previousData) !== JSON.stringify(currentData)) {
    return true;
  }
  return false;
}

function notifyDataChange() {
  var scriptUrl = ScriptApp.getService().getUrl();
  var triggerUrl = scriptUrl + '?refresh=true';

  UrlFetchApp.fetch(triggerUrl);
}
