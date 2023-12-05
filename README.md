# StartPage

This project is a customizable home page containing useful widgets.
Each widget connects to an API to bring the latest news, weather, Lord of the Rings quotes, 
recommended sites, and trivia to your start page.

StartPage is deployed [on Render](https://group-1-sswd-project.onrender.com/#gsc.tab=0).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Packages
This project uses react with axios and cypress packages.
Be sure to install these packages if you do not already have them installed.

## Widgets

### Recommended Sites
This widget pulls the url and website icon from the user Config json file.
There are popular websites already pre-loaded into the start page.

**To customize the recommended sites**: simply update the userConfig json file with your favorite website URLs.
Follow the examples in userConfig to utilize icon.horse to get the website's logo.

### Weather
This widget pulls the lates weather information from WeatherAPI.
The current temperature and forecast are displayed in the widget.
The widget also uses your local time to display the appropriate icon for the daytime or nighttime.
This widget also displays the accurate moon phase.

**To customize the Weather widget**: update the userConfig json file with your zip code.

### News
This widget pulls the latest top news headlines from the GNews API.
The current top headlines display the image associated with the article.
When clicked, each headline will take you to the article's website in a new tab for easy reading.

### Trivia
This widget generates fun trivia questions from Open Trivia DB.
Answer options are shuffled, and answers will display green or red as correct or incorrect.
New questions will be continue to be populated as you answer trivia items.

### LOTR Quote Generator
This widget generates a randomized LOTR quote from The One API at the bottom of the start page.

### Google Search Bar
This widget uses Google's Search API to bring a quick and easy way to search the web right to the start page.

## Customization
It is recommended that the Weather and Recommended Sites widgets be customized for a personalized experience.

### Updating the userConfig json file
**Updating your name** into the userConfig file will allow the start page to greet you.
**Updating your zip code** in the userConfig file will enable accurate weather informattion based on your location.
**Updating the recommended sites list** with your personal favorite website URLs will bring your favorite websites
to your start page.
**Updating the background image** is another customization option. You can change the background image by pasting
the image URL in the background image URL location in the userConfig file.

## Adding the start page to FireFox
Paste the StartPage URL into the `Homepage and new windows` option in FireFox Settings.
Follow the [home page guide](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page) for help with this step.

## The Start Page Devs:

See more projects from James [on GitHub](https://github.com/allencpsc).
See more projects from Nick [on GitHub](https://github.com/n1999ck).
See more projects from Maria [on GitHub](https://github.com/TaoMaru).


Startpage was created for Server-Side Web Development at Columbus State University by James Cox, Maria Jackson, and Nick Miller.