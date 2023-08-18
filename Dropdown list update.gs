var ssId = "122wXTLEwq_J3-lkTpx82aaEAqBvxLNwJ38o-yrPScyA";

var formID = "19OCzqWqFuB_UNTEdMbPaVyCA2KxmmbS2JNMuYWk8TW0";


var wsData = SpreadsheetApp.openById(ssId).getSheetByName("Company_list");

var form = FormApp.openById(formID);

function main() {

  var labels = wsData.getRange(1,1,1,wsData.getLastColumn()).getValues()[0];
  Logger.log(labels);

  labels.forEach(function(label,i){
    Logger.log(label);
    var options = wsData
                  .getRange(2, i + 1,wsData.getLastRow()-1,1)
                  .getValues()
                  .map(function(o){return o[0]})
                  .filter(function(o){return o !== ""});
    updateDropDownusingTitle(label,options);
  })
}

function updateDropDownusingTitle(title,values) {

  var items = form.getItems();
  var titles = items.map(function(item){
    return item.getTitle();
  });
  // Logger.log(titles.indexOf(title));

  var position = titles.indexOf(title);
  if(position !== -1){
    var item = items[position];
    var itemID = item.getId();
  // Logger.log(position.toString())
  // Logger.log(item.toString())
  // Logger.log(itemID.toString())
  // Logger.log(values.toString())

    updateDropdown(itemID,values);
  }
}

function updateDropdown(id, values) {
  var item = form.getItemById(id);
  // var values = ["a","v"];
  item.asListItem().setChoiceValues(values);
  // Logger.log(item.getType());
  // var items = form.getItems();
  // Logger.log(items[1].getId().toString());

}
