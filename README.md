# Twitter Browser Censor

This is browser plugin for Twitter to remove (hide) negative tweets

# Why do we need this?

  - Nowadays, twitter is full of negatives contents
  - Sometimes, we just want to hide this negativity, and enjoy a postive feed
  - This plugin helps you hide all the negative tweets, leaving your feed with just 100% Postivity


Contents:
  - Browser Plugin ( Works only on Firefox Currently )
  - Flask Server ( For Sentiment Anaylsis of Tweets )
  - Google Colab Notebook ( To host the code on Google Virtual Machine )


### Tech

Twitter Browser Censor uses a number of open source projects to work properly:

* [nltk] - Sentiment Analysis!
* [sklearn] - Developing Machine Learning Models
* [flask-ngrok] - To reverse tunnel the port from Google Colab
* [jQuery] - duh

### Usage

Twitter Browser Censor doesn't requires any local environment, just a browser is enough to test and use this.
1. Open *Twitter Sentiment Flask Server* notebook in Google Colab and run all the cells
2. Copy the ngrok hosted url
3. Add this url in plugin files
    - In Manifest.json file , add the url in permissions list (ending with * after slash)
    - Update the SERVER variable in *twitterCleaner.js* with this url (ending with slash)
4. Install the Browser Pluign from plugin folder as specified in this [tutorial]
5. Open Twitter and check logs to see the hidden tweets
6. Adjust the timeout in *twitterCleaner.js* to increase/decrease speed of updates




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [jQuery]: <http://jquery.com>
   [tutorial]: <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension>
   [flask-ngrok]: <https://pypi.org/project/flask-ngrok/>
   [nltk]: <https://www.nltk.org/>
   [sklearn]: <https://scikit-learn.org/stable/>


