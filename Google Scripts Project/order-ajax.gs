function doGet() {
  var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName('ajax');
  var data = sheet.getDataRange().getValues();
  var jsData = convertDataToJson(data);
  var response = ContentService
    .createTextOutput(JSON.stringify(jsData))
    .setMimeType(ContentService.MimeType.JSON);
  return response;
}

function convertDataToJson(data) {
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
  return jsData;
}


// function doGet(e) {
//   var sheet = SpreadsheetApp.openById("1WGuLUNe1dm3yML4PABCJ2X8rLPMTeMxnTVqPBChI4k0").getSheetByName('ajax');
//   var data = sheet.getDataRange().getValues();

//   const headers = data.shift();
//   const jsData = data
//     .map((r) => {
//       const tempObject = {};
//       headers.forEach((header, i) => {
//         tempObject[header] = r[i];
//       });
//       return tempObject;
//     });

//   var userMailID = Session.getActiveUser().getEmail(); // Get the user's mail from the URL parameter

//   var filteredData = jsData.filter(function(row) {
//     return row[20].trim().includes(userMailID);
//   });

//   var response = ContentService
//     .createTextOutput(JSON.stringify(filteredData))
//     .setMimeType(ContentService.MimeType.JSON);

//   return response;
// }

// function convertDataToJson(data) {
//   const headers = data.shift();
//   const jsData = data
//     .map((r) => {
//       const tempObject = {};
//       headers.forEach((header, i) => {
//         tempObject[header] = r[i];
//       });
//       return tempObject;
//     });

//   return jsData;
// }
