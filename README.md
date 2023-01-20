Formula Generation Script using GPT-3 in Google Sheets


This script uses GPT-3 to generate formulas from text instructions in Google Sheets.



Prerequisites
	•	A Google account
	•	An OpenAI account
Setup
	1	Go to the Google Cloud Console.
	2	Select your project or create a new one.
	3	Click on the hamburger menu and select "APIs & Services"
	4	Click on "Enable APIs and Services"
	5	Search for "Google Sheets API" and enable it.
	6	Go to the OpenAI website and create an account.
	7	After you've logged in, go to the API section and create a new API key.
	8	Copy and past that API key in the script on line 39 called "Authorization"
	9	You will need to give the script permission to run! Follow onscreen instructions!
	10	In the Script Editor, click on the "Run" menu and select the “genenerateFormula function.
	11	In the Google Sheet, refresh the sheet and you will see the new menu called “FormulaBuddy”
	12	Select the cell you want to generate formula for, click on “FormulaBuddy” and select “Generate Formula"


Note:
	•	The script will only work if the API key is added to line 39 called "Authorizations".
	•	The script is using the davinci-002 engine.
	•	You can change the prompt in the script to adjust the instruction to generate the formula.
