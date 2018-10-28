## A03 Personal Website
A simple website using server-side:

Learning JavaScript and jQuery by interacting with a user. 

Examples include working with local storage and session storage.

# Uses
- jQuery, a JavaScript library that simplifies client-side scripting
- BootStrap, a framework for responsive web design 
- JavaScript, a scripting language for the web
- HTML, a markup language for web apps
- CSS, a style sheet language for styling markup languages such as html

# Getting Started
Visual Studio Code is recommended, but you can use Sublime, Notepad++, or any text editor to modify the code. 

- Right-click on A03 folder / "Open with Code".
- In VS Code, format code with SHIFT + ALT + f and CTRL-S to save.

# Frameworks and Libraries
- JQuery: https://jquery.com/
- QUnit: https://qunitjs.com/
- BootStrap: http://getbootstrap.com/
- BootStrap Buttons:
- BootStrap FixedTop NavBar (for the menu); https://getbootstrap.com/examples/navbar-fixed-top/

# Developer Tools
- Windows Explorer Context Menu: Add 'Open command window here as administrator'  - - http://www.sevenforums.com/tutorials/47415-open-command-window-here-administrator.html
- VS Code: https://code.visualstudio.com/
- Git for Windows: https://git-scm.com/downloads
- TortoiseGit: https://tortoisegit.org/

# Set up Mailgun
Sign up for an account at https://www.mailgun.com.
Log in.
Go to your dashboard athttps://app.mailgun.com/app/dashboard.
Scroll down to get your "Domain Name".
On the right, click the eye to view your private API key.
Create a new config.json from the config.json.example.
Set your domain name and private api key as found above.
Add your private config.json to the .gitignore file.

# Deploy to Heroku Free Hosting
Register for a free Heroku account at https://www.heroku.com/.
Download and install Heroku CLK https://devcenter.heroku.com/articles/heroku-cli.
Log in to your Heroku cloud account.
From your dashboard, click New and add a new project.
Click the new project and click the Deploy tab.
Click 'Open app' to run your app and view the Heroku URL in the browser.
Open a Windows Command Window as Administrator, and run 'heroku login'.
Open Git Bash in your project folder, add the heroku remote (Command 1 below).
In Git Bash, push to your heroku remote (Command 2 below).
git remote add heroku https://git.heroku.com/resumesite563.git
git push heroku master

# Resources
- Dillinger.io (to validate markdown like this file): http://dillinger.io/
- W3C Markup Validation Service: https://validator.w3.org/

# References
Express in Action: Writing, building, and testing Node.js applications by Evan M, https://www.manning.com/books/express-in-action
