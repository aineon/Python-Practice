#### Back to README - LINK

## **Testing**
### [**Table of Contents**](#table-of-contents)
- [Owner Goals]
- [User Stories]
- [Manual Testing]
- [Responsiveness]
- [Automated Testing]
- [Bugs]
    - [Resolved]
    - [Existing]




 #### **User Stories**
- *"As a user, I want a game that is fun to play."*  
  - Bright, vibrant colour palette, interesting images and animations, while not being too easy 
  contribute in making this a fun game to play
- *"As a user, I want a game that is challenging."* 
  - The amount of cards, time limit and flip limit add difficulty to the game 
- *"As a user, I want to be able to track my progress."*
  - The timer and flip counter allow users to track their progress throughout the game  
- *"As a user, I want to a game where I can practice my memory skills."* 
  - playing card matching games can help improve memory skills 
- *"As a user, I want a game that is easy to navigate."*
  - All button immediately identifiable, and purpose is clearly definable 
- *"As a user, I want a game that is visually appealing."*  
  - The colour palette and images give a visually appealing aesthetic
- *"As a user, I want to be able to easily find out how to play."* 
  - The *How to Play* button is clearly visible and the triggered *modal* explains clearly how to play the game
- *"As a user, I want to be able to restart the game at any point."* 
  - The reset button allows the user to reset the game at any time 
- *"As a user, I want a game that is intuitive."*  
  - Navigation throughout the application is clearly defined, how to play the 
  game would be quickly discernible without reading the instructions  


## **Manual Testing**
 Each element was tested both locally and on the live site to ensure it was working correctly.  
 Testing on functionality was carried out throughout the build using 
 [DevTools](https://developers.google.com/web/tools/chrome-devtools) to ensure everything worked as it should and to identify
 issues/bugs.

#### **Navbar/Sidenav**
 - Navbar is fixed to top of the viewport when scrolling down
 - Each link was clicked to ensure it directed user to correct page to the correct page
 - Nav brand logo clicked to ensure it returns user to index.html
 - Logged out user only has access to relevant links - 'Home', 'Login', 'Sign up'
 - Logged in user who **_is not 'admin'_** has access to - _'Home', 'My Profile', 'Reviews', 'Add Review', 'Search' 
 (on mobile devices only), 'Log Out'_
 - Logged in user who **_is 'admin'_** has access to - _Home', 'My Profile', 'Reviews', 'Add Review', 'Search' 
 (on mobile devices only), 'Manange Users, 'Log Out'_
 - _'Log Out'_ link
    - logs user out of their account
    - flash message informs user they have been logged out
    - redirects user to _'Log In'_ page
 - Hamburger icon is visible on small devices

#### **Footer**
- Is fixed at bottom of page regardless of content
- Is visible on all pages at all device sizes

#### **index.html**
 - **_Log In_** Link 
    - directs user to _'Log In'_ page
 - **_Sign Up_** Link
    - directs user to _'Sign Up'_ page
 - **_Log In_** Button
    - changes colour on hover
    - directs user to _'Log In'_ page
 - **_Sign Up_** Button
    - changes colour on hover
    - directs user to _'Sign Up'_ page

#### **register.html**
- **_Form Validation_** 
    - all fields must be completed to submit form  
    - if _username_ already exists, flash message informs the user and form is reloaded
    - if _email_ is already registered, flash message informs user and form is reloaded
    PATTERN MIN/MAX
    - _'Sign Up'_ Button 
        - changes colour on hover
        - On button click:
            - if form is filled out correctly, submits user information to the users collection
            in the database 
            - flash message informs user their registration was successful and loads user profile page
            - if form is not filled out correctly, user is informed to fill out missing field
    -  _'Log In'_ Link - redirects to Log In page
    
#### **login.html**
- **_Form Validation_** 
    - all fields must be completed to submit form 
    - if _username_ and/or _password_ are entered incorrectly flash message informs user and form is reloaded
    - _'Log In'_ Button 
        - changes colour on hover
        - On button click:
            - if form is not filled out correctly, user is informed to fill out missing field
         - if form is filled out correctly, users profile page is loaded
    - _'Sign Up'_ Link - redirects user to register.html

#### **profile.html**
- **_Seach Bar_**
    - users can perform search on all reviews by _'Title', 'Author' or 'Genre'_
    - at least 3 characters must be enterd for search to be valid
    - on click of the _'search'_ button, results are displayed on reviews.html
    - _'Search'_ button changes colour on hover
- **_Profile Title_**
    - displays the users name
- **_Tabs_**
    - the active tab button is highlighted
    - **_'My Favourites'_**
        - the _'My Favourites'_ tab opens automatically on page load.
        - _'Find Books'_ button - redirects user to reviews.html
        - any reviews that have been saved by the user are displayed in this tab along with all information related to that review
        - _'Broken heart'_ icon 
            - grows on hover
            - when clicked removes tha review from the users _'My Favourites'_ tab and from the 'favourites' field in the users collection in the database
        - _'Buy'_ button 
            - changes colour on hover
            - redirects user to a site where they can buy the book 
        - if the user has no books saved to their favourites, tab contains a heading stating 'You have no books saved'
        and a _'Find Books'_ button which redirects user to reviews.html
    - **_My Reviews_**
        - any reviews that have been created by the user are displayed in this tab along with all information related to that review
        - _'Delete'_ button 
            - changes colour on hover
            - triggers a modal to confirm review delete.
        - _'Delete Modal'_ 
            - changes colour on hover
            - Asks user to confirm they want to delete the review
        - _'Delete'_modal button
            - changes colour on hover 
            - deletes the review from the database, 
            - flash message informs user review has been deleted 
            - reloads profile page
        - _'Cancel'_ Modal button 
            - changes colour on hover
            - closes the modal
        - _'Edit'_ button 
            - changes colour on hover
            - redirects user to _Edit Review_ form 
        - if the user has not books created any reviews, tab contains a heading stating 'You have no reviews'
        and a _'Add Review'_ button which redirects user to add_review.html
    - **_Add Review_**
        - contains a form for user to add review
        - _Form Validation_ 
            - all fields except _buy link_ and _cover image link_ must be completed to submit form 
                - there are default values set up for these fields if the user leaves them blank 
            - _star ratings_ 
                - stars change colour when hovered over
                - user can chose how many stars to give a review
                - if no stars are selected, then '_No Stars Given_' is displayed
            - _'Add Review'_ button 
                - changes colour on hover
                - if form is not filled out correctly, user is informed to fill out missing field
                - if form is filled out correctly, review is added to the database 
                    - reviews.html is loaded
                    - review is added to _'My Reviews'_ tab and to reviews.html
    - **_Delete Account_** 
        - allows user to delete their profile
        - _'Delete Account'_ button
            - changes colour on hover 
            - triggers modal asking users to confirm they want to delete their Account
        - _'Delete'_modal button
            - changes colour on hover 
            - deletes the user from the database 
            - flash message informs user their account has been deleted 
            - loads index.html
        - _'Cancel'_ modal button - closes the modal
- **_Scroll Up Button_**
    - appears when the user scrolls 20px down the page
    - changes colour on hover
    - scrolls back to top of the page when clicked

#### **reviews.html** 
- **_Seach Bar_**
    - users can perform search on all reviews by _'Title', 'Author' or 'Genre'_
    - at least 3 characters must be enterd for search to be valid
    - on click of the _'search'_ button, results are displayed
    - if there are no matching results, user informed 'No Results Found'
    - _'Search'_ button changes colour on hover
    - _clear results_ button 
        - font awesome icon for '_redo_'
        - on hover:
            - button changes colour
            - tooltip appears with _'clear results'_ text  
- **_Reviews_** 
    - all reviews in the database are displayed 
        - including all info entered by the creator of the review 
        - username of user that created the review
        - date review was created
    - _'Save Review Heart'_ icon
        - only visible to user if they **_did not_** create the review
        - pulses when hovered over
        - when clicked:
            - adds review to 'My Favourites' in the users profile
            - adds review to the favourites field in the users collection
            - flash message informs user that the review has been 'saved to their favourites'
            - if review has already been saved by that user, informs the user that the 'review has already been saved'
    - _'Buy'_ button - redirects user to a site they can buy the book
- **_Scroll Up Button_**
    - appears when the user scrolls 20px down the page
    - changes colour on hover
    - scrolls back to top of the page when clicked 
- **_On Small Devices_**
    - _'Search'_ icon - returns user to search_mobile.html
    - _'Clear'_ icon 
        - clears search results
        - reloads reviews.html
        - on hover:
            - button changes colour
            - tooltip appears with _'clear results'_ text

#### **add_review.html**
- **_Add Review_**
    - contains a form for user to add review
    - allows user to add a review without having to navigate to profile page
    - _Form Validation_ 
        - all fields except _buy link_ and _cover image link_ must be completed to submit form 
            - there are default values set up for these fields if the user leaves them blank 
        - _star ratings_ 
            - stars change colour when hovered over
            - user can chose how many stars to give a review
            - if no stars are selected, then '_No Stars Given_' is displayed
        - _'Add Review'_ button 
            - changes colour on hover
            - if form is not filled out correctly, user is informed to fill out missing field
            - if form is filled out correctly, review is added to the database 
                - reviews.html is loaded
                - review is added to _'My Reviews'_ tab and to reviews.html

#### **edit_review.html**
- **_Edit Review_**
    - contains a form for user to edit their own review
    - is popluated with the original infomation added by the user
    - _Form Validation_ 
        - all fields except _buy link_ and _cover image link_ must be completed to submit form 
            - there are default values set up for these fields if the user leaves them blank 
        - _star ratings_
            - original rating is not displayed on the form
            - user must add rating again 
            - stars change colour when hovered over
            - user can chose how many stars to give a review
            - if no stars are selected, then '_No Stars Given_' is displayed
        - _'Save'_ button 
            - changes colour on hover
            - if form is not filled out correctly, user is informed to fill out missing field
            - if form is filled out correctly, review is updated in the database 
                - reviews.html is loaded
        - _'Cancel'_ button 
            - changes colour on hover
            - no changes to the form are saved
            - users profile is loaded

#### **search_mobile.html**
- only available on small devices
- **_Seach Bar_**
    - users can perform search on all reviews by _'Title', 'Author' or 'Genre'_
    - at least 3 characters must be enterd for search to be valid
    - on click of the _'search'_ button, results are displayed on reviews.html
    - _'Search'_ button changes colour on hover

#### **Responsive Design**
- Responsive design was tested throughout the build using [DevTools](https://developers.google.com/web/tools/chrome-devtools)
and [Am I Responsive](http://ami.responsivedesign.is/)
- It was also tested physically on various devices  

- [W3C Markup Validation](https://validator.w3.org/#validate_by_input) - to validate HTML
    - no errors found
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) - to vaildate CSS Code
    - no errors found
- [JShint](https://jshint.com/) - to validate Javascript code
    - no major errors found
    - below metrics provided:  

![jshint](https://i.imgur.com/YOzIU5N.png)

- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) - to identify any overflow issues
    - no overflow issues

- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)  - to test the performace of the application
Lighthouse was used to test the performance of each page on mobile and Desktop.
The following reports were generated:

#### **index.html - Desktop**
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/lHdachO.png) Report   
  - [Accessibility](https://i.imgur.com/EkqqvG3.png) Report 
  - [Best Practices & SEO](https://i.imgur.com/1Zfn2za.png) Report 
 
#### **game.html - Desktop**
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/vic64QN.png) Report 
  - [Accessibility](https://i.imgur.com/0uQNViX.png) Report
     - Lost points on accessibility due to poor contrast between background and text colour on the footer.
     - I didn't address this issue as I felt that since the only information contained in the footer was 
     copyright information it was not necessary as it did not effect the playability of the game.  
  ![imgur](https://i.imgur.com/sbtkXaN.png)  
     - Lost points due to alt attributes not present on images
     - I did not address this issue as the images were created from a javascript array  
  ![imgur](https://i.imgur.com/pR5HFJb.png)  
  - [Best Practices & SEO](https://i.imgur.com/Z8Bfwnx.png) Report 
     - Lost points due to alt attributes not present on images  
  ![imgur](https://i.imgur.com/qQeWdPa.png)

#### **index.html - Mobile**
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/CvpvaDm.png) Report
  - [Accessibility](https://i.imgur.com/B9xyM7z.png) Report    
  - [Best Practices & SEO](https://i.imgur.com/DQFFVqZ.png) Report  

#### **game.html - Mobile** 
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/LPaeg43.png) Report 
  - [Accessibility](https://i.imgur.com/K96FaZo.png) Report
     - lost points due to alt attributes missing from images  
  - [Best Practices & SEO](https://i.imgur.com/G7UKgSU.png) Report  

- [GT Metrix](https://gtmetrix.com/) - to test loading speed
 ![GTmetrix](https://i.imgur.com/Ul9R4pg.png)



##### [Back to Table of Contents](#table-of-contents)

#### Back to README - LINK