# Formula Generation Script using GPT-3 in Google Sheets

## Prerequisites
- A Google account
- An OpenAI account

## Setup
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Select your project or create a new one.
3. Click on the hamburger menu and select "APIs & Services"
4. Click on "Enable APIs and Services"
5. Search for "Google Sheets API" and enable it.
6. Go to the [OpenAI website](https://openai.com/) and create an account.
7. After you've logged in, go to the [API section](https://beta.openai.com/account/api-keys) and create a new API key.
8. Copy and past that API key in the script on line 39 called "Authorization"
9. In the Script Editor, click on the "Run" menu and select the "onOpen" function.
10. In the Google Sheet, refresh the sheet and you will see the new menu "Formula Generation"
11. Select the cell you want to generate formula for, click on "Formula Generation" and select "generate formula"
12. You will need to give the script permission to run! Follow onscreen instructions!
Note: 
- The script will only work if the API key is added to line 39 called "Authorizations".
- The script is using the `davinci-codex` engine.
- You can change the `prompt` in the script to adjust the instruction to generate the formula.
