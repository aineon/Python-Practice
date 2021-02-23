PLACE IMAGE HERE

## [**Table of Contents**](#table-of-contents)

- [UX](#ux)
    - [Overview](#overview)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
    - [Design Process](#design-process)
        * [Colour Palette](#colour-palette)
        * [Background Images](#background-images)
        * [Typography](#typography)
        * [Development Process](#development-process)
        * [Wireframes](#wireframes)

- [Database Model](#database-model)

- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)

- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries and Frameworks](libraries-and-frameworks)
    - [Project Management](project-management)
    - [Tools](#tools)
    - [Resources](#resources)

- [Testing](#testing)
    - [Testing](#testing)

- [Bugs and Solutions](#5bugs-and-solutions)
    - [Resolved Bugs](#resolved-bugs)
    - [Still Existing](#still-existing)

- [Deployment**](#deployment)
    - [GitHub Pages](#github-pages)
    - [Locally](#locally)

- [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

[Disclaimer](#disclaimer)

---

## **UX** 
### **Overview**
A Book Review App that allows registered users to create, read, edit and delete their own content. 
Browse reviews left by other users. Save reviews made by other users. Access their own content and and reviews they've saved from their personalised profile.

### **Project Goals**
The aim of this project was to create a visually appealing, 
interactive Book Review App.  

- As an owner my goals were: 
    - to create a community if book lovers
    - to encourage users to create their own content
    - to encourage users to supply as much information in the review as possible
    - to encourage users to explore other users content
    - to help users find new books to read
    - to offer a link for users to buy books
    - to allow users to curate their own profile 

### **User Stories**
*"As a user, I want to create my own reviews."*
*"As a user, I want to be able to rate the book I am reviewing."*  
*"As a user, I want to edit reviews I have created."*  
*"As a user, I want to be able to delete reviews I have created."*  
*"As a user, I want to be able to delete my account."*  
*"As a user, I want to be able to browse reviews created by other users"*
*"As a user, I want to be to save reviews created by other users that I like"*  
*"As a user, I want to be directed to a site where I can buy a book."* 
*"As a user, I want a site that is visually appealing "*  
*"As a user, I want a site that is easy to navigate"*  

### **Design Process**
- I wanted to design an app that envoked the feeling a reading a good book and escaping into the world that book creates.
- I wanted the app to be intuitive and easy to navigate  
- I kept the amount of elements on each page to a minimum as I wanted to achieve an uncluttered
and clean aesthetic.  
- I used [Materialize CSS](https://materializecss.com/) grid for the layout throughout the site.  
- I used various [Materialize CSS](https://materializecss.com/) classes to enhance and structure different elements.
- I wanted the app to be responsive on all commonly used devices.

#### Colour Palette
- I wanted the colour scheme to be elegant and complement the background images while still be easily readable.  
   
   PUT COLOUR PALETTE HERE

##### **Primary Colour Palette**
I chose #420420, #5a052c and #fafaed as my main colour scheme. I felt these colours worked well together and were in
keeping with the overall aesthetic of the app.

     PUT IMAGE HERE
- **#42042**
    - Site wide:
        - brand logo
        - nav links
        - sidenav trigger icon
        - sidenav links
        - footer background colour
        - all button backgrounds
    - Home Page: 
        - Welcome title, subtitle and text
    - Profile Page:  
        - tab buttons
        - search button
    - Mobile Search Page:
        - title text
    
- **#5a052c**
    - Site wide:
        - body text
        - sidenav title
        - form labels/inputs 

- **#fafaed**
    - Site wide:
        - nav background
        - sidenav background
        - footer text
        - page headings
        - button text
        - flash message background

GRADIENT HERE 
   
##### **Secondary Colour Palette**
I chose these colours as I felt they worked well with the primary colour scheme and highlighted
certain elements.

PUT IMAGE HERE

- **#952055**
    - hover colour for all buttons
    - dividers
    - links
    - active inputs/labels


#### **Backgrounds Gradient** 

#### **Background Images**
I chose book related imagery that I felt envoked the magic of reading your favourite book
and discovering new books. THe feeling you get when your're in a beautiful library or bookshop.

#### **Typography**
- I wanted a handwriting style font for the brand logo, titles and headings.
- I chose [Tangerine](https://fonts.google.com/specimen/Tangerine?query=tanger&preview.text_type=custom) as I felt
it had an elegant feel, was inkeeping with the overall aesthetic while still maintaining readability.
- For the body text I chose [Roboto](https://fonts.google.com/specimen/Roboto?query=robo&preview.text_type=custom) as it complemented the [Tangerine](https://fonts.google.com/specimen/Tangerine?query=tanger&preview.text_type=custom)
font, had good readability and was listed as a popular pairing for [Tangerine](https://fonts.google.com/specimen/Tangerine?query=tanger&preview.text_type=custom).

 #### **Development Process**
 Once I decided to build a book review app, I broke the development process down into stages to help me manage the project.
 - Research existing book review sites 
 - Choose background images
 - Decide on general colour scheme
 - Decide on what and how many links I was going to have and the content of each of those links
 - Create the base.html with common elements, links and scripts
 - Design the basic layout of each page, decide on which background image would be used for each page and write the basic functionality to render each page.
 - Develop login/logout/register functionality
 - Develop CRUD logic and functionality
 - Layout and style for CRUD functionality - Reviews/forms
 - Add logic and functionality for additional features.
 - Adjust layout and styling

 #### **Wireframes**
- I used [Balsamiq](https://balsamiq.com/wireframes/) to create the wireframes for my project.
- I create 3 sets of wireframes for Desktop, Tablet and Mobile.
- To view the wireframes please click the links below:

**Desktop**  
  

**Tablet**  
 

 **Mobile**

## **Database Model**
 DB SCHEMA HERE

##### [Back to Table of Contents](#table-of-contents)
---

## **Features**
### **Existing Features** 
 #### **Site wide**
 - **_Navbar/Sidenav_** - to allow easy navigation across the app, identifies app name
 - **_Footer_** - contains copyright information 
 #### **Index.html**
 - **_Welcome Title_** - identifies the name and type of app
 - **_Welcome Text_** - information about the app
 - **_Log In_** button/link - directs user to login page  
 - **_Sign Up_** button/link - directs user to sign up page  
 #### **Profile.html**  - A personalised page for each user
 - **_Search bar_** - allows users to search for a book/review by title, author or genre and renders results on reviews.html  
 - **_My Favourites Tab_** - displays any reviews a user has added to their favourites
 - **_Remove Review_** Icon - allows users to remove a review from their favourites tab and from the favourites field in the users collection in the database
 - **_Buy_** Button - Redirects user to a site where the book can be purchased
 - **_Find Books_** button - directs user to the reviews page
 - **_My Reviews Tab_** - displays reviews created by that user
 - **_Delete_** Button - triggers a modal asking user to confirm they want to delete that review 
 - **_Modal Delete_** Button - deletes the review, removing it from the database - flash message confirms delete
 - **_Modal Cancel_** Button - closes the modal with no action being taken
 - **_Edit_** Button - redirects user to 'Edit Review' form
 - **_Add Review Tab_** - a form that allows users to create a review
 - **_Add Review_** Button - adds review to the reviews collection in the database. renders it on the 'My Reviews' tab and on Reviews.html - 
 flash message confirms review has been added, redirects user to reviews.html
 - **_Delete Account Tab_** - contains delete account button
 - **_Delete Account_** Button - triggers modal asking user to confirm they want to delete their account. 
 - **_Modal Delete_** Button - deletes users account from the database and redirects to index.html - flash message confirms delete
#### **Reviews.html** - Displays all reviews created by all users
 - **_Search bar_** - allows users to search for a book/review by title, author or genre and renders results 
 - **_Save Review_** - Not visible to review creator - allows other users to save that review to 'My Favourites' tab on thier profile - confirmed by flash message that 
 review has been 'added to favourites'. If review is already saved, flash message informs user.
 - **_Buy_** Button - Redirects user to a site where the book can be purchased  
 - **_Scroll Up_** Button - returns user to the top of the page
#### **Add Review.html** - Allows users to add reviews without navigating to profile page 
 - Contains form to add review
 - **_Add Review_** Button - adds review to the database. confirmed by flash message, redirects user to reviews.html
#### **Edit Review.html**
 - Only accessible through Edit button on users own reviews. 
 - Allows users to edit the selected review. Updates the review in the database
#### **Register.html**
 - Allows users to sign up to the site by supplying required information Adds user information to the users collection in the database
 - **_Link to login.html_** - redirects user to login.html if they already have an account
#### **Login.html** 
 - Users must sign in with username and password to access the site
 - **_Link to Register.html_** - redirects user to register.html if they don't have an account
#### **Log Out** Nav Link 
 - Logs user out of their account, confirms logout with flash message. redirects to login page 

### **Future Features**
- Implement Google Books API access so users can automatically populate book info fields
- Add logic so users can comment on other users reviews
- Add logic so users can upvote or downvote other users reviews

##### [Back to Table of Contents](#table-of-contents)
---

## **Technologies Used**
### **Languages**
- **HTML** - used to create the structure of the application
- **CSS** - used to position and style the application 
- **JavaScript** - used to for interactivity
- **Python** - used to handle backend
- **Jinja** - Python templating language

### **Libraries and Frameworks**
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
- [Werkzeug](https://werkzeug.palletsprojects.com/en/1.0.x/)
- [Materialize CSS](https://materializecss.com/) 
- [Google Fonts](https://fonts.google.com/) 
- [Font Awesome](https://fontawesome.com/) 
- [jQuery](https://code.jquery.com/) 
- [hover.css](https://ianlunn.github.io/Hover/) 

### **Project Management**
- [Git](https://git-scm.com/) 
- [Gitpod](https://gitpod.io/) 
- [Github](https://github.com/) 
- [Heroku](https://signup.heroku.com)
- [MongoDB](https://www.mongodb.com/)

### **Tools**
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) 
- [Balsamiq](https://balsamiq.com/wireframes/)
- [Am I Responsive](http://ami.responsivedesign.is/)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) 
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB)
- [Favicon](https://favicon.io/favicon-converter/) 
- [Autoprefixer](https://autoprefixer.github.io/) 
- [Compress PNG]
- [Convert Jpeg ]


### **Resources**
- [cdnjs](https://cdnjs.com/)
- [w3schools](https://www.w3schools.com/) 
- [Stack Overflow](https://stackoverflow.com/)


##### [Back to Table of Contents](#table-of-contents)
---

## **4. Testing**
### **4.1 Automatic Testing** 
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

### **4.2 Manual Testing**
 Each element was tested to ensure it was working correctly.  
 Testing on functionality was carried out throughout the build using 
 [DevTools](https://developers.google.com/web/tools/chrome-devtools) to ensure everything worked as it should and to identify
 issues/bugs.

#### **index.html**
 - **_How to Play_** Button 
    - clicked to ensure modal is triggered  
 - **_Modal_** 
    - *close* button clicked to ensure modal closes
    - *Let's Play* button takes user to game page when clicked

#### **game.html**
- **_Home_** Button 
    - returns user to home page when clicked  
- **_Restart_** Button 
    - resets game board, timer and flip counter when clicked  
- **_Flip Counter_** 
    - decrements with each card click    
    - triggers lose modal when it reaches zero
- **_Timer_** 
    - timer starts on first card click
    - counts down in seconds  
    - triggers lose modal when timer reaches zero 
- **_Game Board_**
    - displays correctly on load
    - only clicks on the cards trigger flip counter
- **_Cards_**
    - 3d flip when clicked to reveal face
    - 3d flip to return cards to starting position when not a match
    - images are displayed correctly

#### **Overlays**
- **_Win Overlay_**
    - triggered when winning conditions are met
    - *Play Again* Button resets the gameboard, timer and flip counter and hides overlay when clicked
    - *Home* Button returns user to the home screen when clicked
    - *Animations* begin as soon as overlay is visible

- **_Lose Overlay_**
    - triggered when losing conditions are met
    - *Play Again* Button resets the gameboard, timer and flip counter and hides overlay when clicked
    - *Home* Button returns user to the home screen when clicked
    - *Animations* begin as soon as overlay is visible

#### **Game Functionality**
Played the game repeatedly to test functionality
- board locks and cards cannot be clicked while check for match function is running
    - tried clicking on other cards while active cards are face up
- matching pairs stay face up
- flipped cards that are not a match are returned to starting position
    - other cards cannot be clicked until cards are flipped back  
- all pairs found with alotted time and flips triggers *Win Overlay*
- timer stops when game is won
- time/flips running out before all pairs are found triggers *Lose Overlay*
- cards stay face up long enough for user to see images
- game is winable within the alotted time and flips
- clicks anywhere outside of the game board are not counted by flip counter
- repeated clicks on cards when only one card was face up does not effect flip counter
- repeated clicks on matching pairs does not effect click counter and are only counted as one match
- matched pairs are disabled and cannot be clicked on again

#### **Responsive Design**
- Responsive design was tested throughout the build using [DevTools](https://developers.google.com/web/tools/chrome-devtools)
and [Am I Responsive](http://ami.responsivedesign.is/)
- It was also tested physically on various devices  

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

##### [Back to Table of Contents](#table-of-contents)
  ---

## **5. Bugs and Solutions**
### **5.1 Resolved Bugs**
- Game timer restarting when it got to zero 
   - changed `setInterval()` to a variable
   - added a `clearTimeout()` with the `setInterval()` variable as an argument 
   ```javascript
    timerId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (timer-- <= 0) {
                loseGame(timer);
                timer = duration;
                clearTimeout(timerId);
            }
    ```
- `onclick` attribute of `gameBoard` not removing after first click and 
 causing timer to restart with every subsequent click
    - created new gobal variable `firstClick` and incremented it
    - used `removeAttribute` to remove `onclick` while `(firstClick < 2)`
    ```javascript
     let gameBoard = document.querySelector('.board');
     gameBoard.onclick = (function() {
        firstClick++
         if (parseInt(firstClick) < 2) {
            gameBoard.removeAttribute('onclick');
            timeRemaining = 60 * 2,
                display = document.querySelector('#timer');
            gameTimer(timeRemaining, display);
        }
    });
    ```
- Win and Lose overlays not displaying when correct conditions were met    
   - was using `getElementByClassName` without supplying index
   - added `[0]` to end of `getElementByClassName`
 ```javascript
    document.getElementsByClassName('win-overlay')[0].style.display = 'block';
    document.getElementsByClassName('lose-overlay')[0].style.display = 'block';
```
- Flip counter not counting card clicks
   - created new global variable `clickCounter` and decremented it
   - created new local variable `clickCount`, added `textContent` attribute and set it as the value of `clickCounter`
  ```javascript
     function flipCount() {
        clickCounter--;
        let clickCount = document.querySelector('#flip-counter');
        clickCount.textContent = clickCounter;
    }
    ```
- 3d flip not working on `unFlip()`
   - removed `card-back`, `card-front` and `flip` classes from `previousCard` and `currentCard` variables
   ```javascript
    previousCard.classList.remove('card-back', 'card-front', 'flip');
    currentCard.classList.remove('card-back', 'card-front', 'flip');
    ```
- Win game condition `matchedCards.length === gameCards.length` never being met 
   - changed condition to `matchedCards.length === (gameCards.length / 2)`

- Game board not locking when 2 cards had been flipped
   - added `if` condition to `createBoard()`
   ```javascript
    if (flipCounter < 2) {
        flipCard(this);
        flipCount();
    }
    ```
- Game board not reseting in `resetGame()`
   - created new local variable
   ```javascript
   let node = document.getElementById('grid');
   node.innerHTML = '';
   ```
- Flip Counter not reseting in `resetGame()`
   - reset `textContent` of `clickCount` variable
   ```javascript
   let clickCount = document.querySelector('#flip-counter');
    clickCount.textContent = 98;
    ```
- Timer not reseting in `resetGame()`
   - reset `textContent` of `timer` variable and added `clearInterval(timerId)`
   ```javascript
    let timer = document.querySelector('#timer');
        timer.textContent = '00:00';
        clearInterval(timerId);
    ```
- Repeated clicks on a matching pair could trigger win conditions and were counted as legitimate clicks by click counter
  - created `disableCards()` to disable matched pairs so they cannot be 
  clicked on once they have been matched and called it in `checkForMatch()`
  ```javascript
  function disableCards(card) {
        card.classList.add('disable-card');
        card.src = card.getAttribute('data-path');
    }
  ```
- Repeated clicks on the first card flipped were counted by click counter and also broke the functionality by 
staying face up regardless of whether it was a match or not
  - added `.disable-card` to `card` in `flipCard()` to stop illegal clicks effecting game functionality
  ```javascript
  function flipCard(card) {
       card.classList.add('flip', 'card-front', 'card-back', 'disable-card');
       card.src = card.getAttribute('data-path');
       setTimeout(checkForMatch(card), 500);
    }
  ```
  - removed `.disable-card` from `previousCard` and `currentCard` in `unFlip()` so unmatched cards were back in play
  ```javascript
        previousCard.classList.remove('card-back', 'card-front', 'flip', 'disable-card');
        currentCard.classList.remove('card-back', 'card-front', 'flip', 'disable-card'); 
  ```

### **5.2 Still Existing**
- **_How to Play_** button on home page
  - pulse effect not stopping after button has been clicked or when *modal* is closed with *x*

- **_Layout_**
  - layout not responsive in landscape position on mobile/tablet devices 

- **_Delay on image displaying on card flip_**
   - slight delay on image being displayed after card is clicked
   - this is not a constant problem and is more of an issue on mobile devices
   - I compressed the images which reduced the delay slightly
   - further investigation is needed into this issue

##### [Back to Table of Contents](#table-of-contents)
---

## **6. Deployment**
### **6.1 GitHub Pages**
The live version of this site is hosted using [Github Pages](https://pages.github.com/).

To deploy **_Off The Beaten Track_** from its 
[GitHub repository](https://github.com/aineon/Off-The-Beaten-Track-Memory-Game), follow the below steps:
1. Log in to **Github**  
2. Select **aineon/Off-The-Beaten-Track-Memory-Game** from the list of repositories
3. From the menu items near the top of the page, select **Settings**
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

### **6.2 Locally**
To run this project locally, follow the below steps:

To clone this project from GitHub:
1. Click the link to the [Off The Beaten Track repository](https://github.com/aineon/Off-The-Beaten-Track-Memory-Game)
2. Under the repository name, click **Code** button
3. In the **_Clone with HTTPs_** section, copy the clone URL for the repository
4. In your local IDE open **_Git Bash_**
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone` and then paste the URL you copied in Step 3.
```console
git clone https://github.com/aineon/Off-The-Beaten-Track-Memory-Game.git
```
7. Press Enter. Your local clone will be created
8. To remove the origin link from your IDE type `git remote rm origin`

- Alternatively you can download the **ZIP folder** of this project by clicking the **Code** button *(as you did in step 2)*
and selecting **_Download ZIP_**
- It can then be unpacked into your desired location
- Open the **index.html** file to run the project locally

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

##### [Back to Table of Contents](#table-of-contents)
---

## **7. Credits**
### **7.1 Content**
- All content was created by the developer

### **7.2 Media**
**Images**
- Card face images were obtained from the below sources:
  - [Unsplash](https://unsplash.com/)
  - [Scopio](https://scop.io/)
  - [Pixabay](https://pixabay.com/)
  - [Pexels](https://www.pexels.com/)
  - Developers own photos
  - Ireland from space image on back of card was taken from 
[Pinterest](https://www.pinterest.com/pin/214835844710473737/)

### **7.3 Code**
- **`shuffleCards()`** taken from [Stack Overflow](https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
- **`gameTimer()`** taken from [Stack Overflow](https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer)
and edited to suit my needs
- **`createBoard()`** and **`unFlip()`** inspired by 
[Ania Kubow YouTube Tutorial](https://www.youtube.com/watch?v=tjyDOHzKN0w)
- **Animations and Background Gradient** inspired by 
[Web Dev Simplified YouTube Tutorial](https://www.youtube.com/watch?v=28VfzEiJgy4)
- **Vendor prefixes** were added based on [Autoprefixer](https://autoprefixer.github.io/)

### **7.4 Acknowledgements**
I would like to say a massive thank you to my mentor [Adegbenga Adeye](https://code-institute-room.slack.com/archives/D010XBPCK09) without whom this project would never have gotten finished!

I would also like to thank the CI community on the Code Institute Slack channel - 
in particular [@stevo](https://code-institute-room.slack.com/team/UM6CCB90T), [@Deborah_alumni](https://code-institute-room.slack.com/team/UC0HYGN4E), [@Ryan Guest](https://code-institute-room.slack.com/team/U016FFAFHE2) and
[@Kirsty C](https://code-institute-room.slack.com/team/U014813LKTR) for their feedback of my project in 
[#peer-code-review channel](https://code-institute-room.slack.com/archives/CGWQJQKC5)

##### [Back to Table of Contents](#table-of-contents)
---

## **8. Disclaimer**
All images and content on this website is for educational purposes only.

##### [Back to Table of Contents](#table-of-contents)
---
