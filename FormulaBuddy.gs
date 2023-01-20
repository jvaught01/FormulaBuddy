function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Formula Buddy')
      .addItem('Generate Formula', 'generateFormula')
      .addItem('Follow on TikTok', 'openCreatorProfile')
      .addToUi();
}


// Define the function to generate formulas
function generateFormula() {
  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSheet();

  // Get the selected cell
  var selectedCell = sheet.getActiveCell();
  
  // Get the value of the cell with the text instructions
  var instructions = selectedCell.getValue();

  // clear the input in the selected cell
  selectedCell.setValue("");
  
  // Build the request body
  var request = {
    prompt: "generate excel formula: " + instructions + "for google sheets. start with =",
    temperature: 0.2,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  
  // Set the request options
  var options = {
    "method" : "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR-API-KEY"
    },
    "payload": JSON.stringify(request)
  };
  
  // Make the request to the OpenAI API
  var response = UrlFetchApp.fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", options);
  
  // Parse the response
  var data = JSON.parse(response);
  
  // Get the generated formula from the response
  var formula = data.choices[0].text;

  // remove the carriage returns from the formula
  formula = formula.replace(/(\r\n|\n|\r:)/gm,"");

  // // remove :
  // formula = formula.replace(/:/,"");
  
  //  // remove =
  // formula = formula.replace(/=/,"");

  // Set the formula in the specified cell
  selectedCell.setValue(formula);
}
//Open creator profile on tiktok
function openCreatorProfile() {
  var url = "https://www.tiktok.com/@juliovaught8";
  var html = '<script>window.open("' + url + '","_blank");</script>';
  var userInterface = HtmlService.createHtmlOutput(html);
  SpreadsheetApp.getUi().showModelessDialog(userInterface, 'Loading...');
}
