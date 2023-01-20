Formula Generation Script using GPT-3 in Google Sheets
This script uses GPT-3 to generate formulas from text instructions in Google Sheets.

Prerequisites
A Google account
An OpenAI account
Setup
Go to the Google Cloud Console.
Select your project or create a new one.
Click on the hamburger menu and select "APIs & Services"
Click on "Enable APIs and Services"
Search for "Google Sheets API" and enable it.
Go to the OpenAI website and create an account.
After you've logged in, go to the API section and create a new API key.
In the Google Sheets Script Editor, go to the "File" menu and select "Project properties".
In the "Script properties" section, add a new property called "openai_api_key" and set its value to the API key you generated in step 7.
In the Script Editor, click on the "Run" menu and select the "onOpen" function.
In the Google Sheet, refresh the sheet and you will see the new menu "Formula Generation"
Select the cell you want to generate formula for, click on "Formula Generation" and select "generate formula"
Note:

The script will only work if the API key is added to the script properties.
The script is using the davinci-codex engine.
You can change the prompt in the script to adjust the instruction to generate the formula.
