#WINDRIVE app

## Summary
The WINDRIVE app is a reimplementation of an existing Android and iOS app.
It will be based on the Cordova platform to allow one codebase for the three platforms Android, iOS and Windows Phone.
Additionally new major features will be implemented.

## Proof of concept
Before starting the full project development a proof-of-concept is needed to test/showcase two major components of the app regarding usability, performance and portability to the three platforms.

### Framework
The intended target framework consists of the following components (latest stable release):

* [Cordova](https://cordova.apache.org/)
* [Backbone](http://backbonejs.org/)
* [RequireJS](http://requirejs.org/)
* [jQuery Mobile](https://jquerymobile.com/)

Suggestions for better, faster or more maintainable frameworks are welcome.

### Commandline build
It has to be possible to control the build process from the commandline. Preferably one of the popular tools like [grunt](http://gruntjs.com/) or [gulp](http://gulpjs.com/) should be used.
At the least every Cordova target platform needs to be build in production and development mode.
Ideally a local development mode (browser based) is supported.
Differences in platform (like app icons) should be handled via configuration files and the build tool.

### Calendar view
The main view of the app will be a calendar-like list (one day view) of events and empty time slots.
There are different event types. Based on the type certain properties have to be shown/hidden.
A long click on an event entry (or time slow) should present the user with different actions that can be executed on the event (based on the event type & properties).

For the proof-of-concept it is enough to prepare a static list of events/activities and render the view dynamically based on that list.
A sample JSON array of activities is defined in _calendar_activities.json_.
For performance testing it should be possible to add more (static) elements to the view (even if it does not make sense, as a day has only 24 hours).

### Signature view
A certain type of event can be signed (with finger or pen).
The signature view displays the properties of the event and one large canvas where the user can sign.
There should be actions to clear the canvas, abort the signing and confirm the signature.
When confirming the signature the data from the canvas has to be stored in a vector based format.

For the proof-of-concept dump the data to console.

### Screenshots
The provided screenshots are from the current Android app and are *not* a design reference but only a hint at the target functionality.

### Other goals
* code has to be maintainable
* performance matters
* design with jQuery Mobile staying compatible to the theme roller
* show off your skills and experience by thinking ahead and implementing solid best practices

## Coding style
* use a consistent coding style following industry best practices
* format and lint the code
* use meaningful names for variables, methods etc.
* document complex/confusing parts, quirks, workarounds etc.
* be firm with Git, branching and continuous integration


