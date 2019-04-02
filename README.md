# OurTube

While building certain types of mobile apps, you might need to have media files displayed in the app.  In this tutorial, we will see how to integrate media from youtube into our mobile apps.

## WHAT WE'LL BE BUILDING
We’ll be building a simple mobile app using React Native called `OurTube` which will pull videos from the new trailers on Rotten Tomato youtube channel via the Youtube API and display them to the user. After displaying, we should also be able to tap on a video and have it play inside the app.


[View tutorial](#)

## Getting Started
Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:samuelayo/OurTube.git
```

If you use https, use this instead

```
git clone https://github.com/samuelayo/OurTube.git
```

Change directory into the newly cloned project and install dependencies

```
cd OurTube
npm install
```

### Prerequisites

#### Setup Youtube

To get started, the first step would be to obtain our developer API key from the developer console. If you prefer a video tutorial, Google has put up a very good and detailed video tutorial on how to obtain your developer API keys for youtube here.
After obtaining your API key that should look like `AIzaSy****DjoCmWdzH*****cZYjOVg8o******`. 

Replace the value of `API_KEY` on line 7 of screens/Home.js with the new key you have obtained.


And finally, build the application:


To build for Android

```
$ react-native run-android
```

To build for iOS

```
$ react-native run-ios
```


## Built With

* [React Native](https://facebook.github.io/react-native/) - Build native mobile apps using JavaScript and React


