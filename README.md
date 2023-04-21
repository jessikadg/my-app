# Angular Assingment

Criteria from Assigment:

The Angular 15 application acquires and displays a table with all the users loaded from users.json. 

Requirements:
 -  one view of all the users in a table
 -  the list can be sorted on name or id
 -  clicking on a user displays a detailed view of that user
 -  the user data can be edited & stored in the browser
 -  one custom directive is used (some styling)
 -  one custom pipe is used (-> sorting or making the Full Name look okay.)
 -  code will be available on a GitHub repo
 -  attach a README that will contain information about the project (short explanation on thinking process, use of extra packages, possible improvements, struggles etc.)

Optional:
 - write a few test cases
 - publish your result on GitHub Pages

You are free to use any packages of choice.


---


# Resolution: MyApp - Angular Assignment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

All commits and deveopment history can be checked on Commits of this repo, with titles and descriptions.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


---

## Thought Process and Resolution

For the implementation, first I checked the Node versions and compatibility with Angular 15, and created the project locally. 

I decided to start with the part that could be the most tricky: displaying and updating the user data, and later to add the custom Pipe and Directive.

Creating two components: Table and Details looked like the most clear, consive and clean approach to the project. Creating a `User.model.ts` also seemed to be the smart thing to do, considering I'd be passing a lot of props with that.

Starting with the Table Component., I first made sure I could import the users from the JSON file, and display them.

Then I created the table, using a `*ngFor` for the roles, generating one row per user.

For the Details page, I decided to go with the Angular Router, which would lead to a cleaner code than using Directives or Props passed to display or not display the details and Form to change the Data.

In order to have a centralised place for the Data, as the "source of truth" for both components, I created a Data Service component, and added the `getUsers` from there.

As per our last conversation, RxJS was also something in use, so I used it to subscribe to the Data Service for both Components.

Once the Navigation was implemented, I added the `id` to the URL on clicking on "View User Details", so the Details component could get this ID and call `getUserById` to the Data Service. 

Creating the Details Component, at first I just displayed the data using that call with the ID. 

After that, I implemented the Form, where the User Data can be updated. I opted for a Template-Driven approach, which seemed to the the most appropriate to work with the Service.

The Form calls the Data Service with `updateUserById`, which I also had to create on the Data Service.

Once that was done, I added a subscription to the Table component, to get the most recent data from the service, and the cycle was complete.

For the Pipe, I went with getting the initials and displaying it on the table.

For the Directive, highlithing the row on mouse hover on the table.

Unfortunately I didn't have time to implement Tests, considering other work I had to do, but I'll try to publish the Page on Github Pages.


## Struggles, extra packages, improvements, etc

Getting typescript and the JSON file to link to each other was surprisingly tricky, but some persistance it was done. The Forms were also a bit tricky to connect with the Data Service correctly, and the RxJS part was a bit challenging for me, but it got easier when I understood some similarities between that and useReducer from React. 

I used no extra packages for this project beyond the ones from Angular itself. I didn't see the need for it. And as a good practice, the least packages to get the job done, the less changes for maintenance headaches in the future. So I didn't add any.

Improvements-wise, I'd like to have had the time to implement some Tests, even if simple ones. If I could, I would first give a try for the tests that already come with Angular itself, and see how that goes.


## Final Comments

I appreciate the opportunity to demonstrate my Angular skills in this assignment, and I hope I have sufficiently documented my thought process and decision-making. Thank you for your time, and looking forward to hearing your feedback.

