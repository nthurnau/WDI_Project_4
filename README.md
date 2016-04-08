##StyleGuide.com - WDI Project 4


style-guide.com was created by Nicole Thurnau for her final WDI project.<br><br>
####Objective <br>
style-guide.com is just the blog you want to read if you're interested in improving your home decor and personal style! style-guide.com offers easy to follow, *free* tutorials AND the things you need to make them happen. No other style blog offers both the great resources that make your life more adorable and a way to purchase the materials you need all in one place.

####Project Requirements<br>
The project requirements listed below were provided by the project markdown:

-  Build a full-stack application by making your own backend and your own front-end
- Have an API of your design
- Have an interactive front-end, preferably using a modern front-end framework
- Be a complete product, which most likely means multiple relationships and CRUD functionality for at least a couple models
- Use a database, whether that's one we've covered in class or one you want to learn
-  Implement thoughtful [user stories](https://trello.com/b/Q1aaFvVW/wdi-project-4-styleguides) that are significant enough to help you know which features to build and which to scrap
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers
- Be deployed online so it's publicly accessible

####Necessary Deliverables
- A working API, hosted somewhere on the internet
- A working front-end, hosted somewhere on the internet
- A link to your hosted working app in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
- A readme.md file with:
  - Explanations of the technologies used
  - A couple paragraphs about the general approach you took
  - Installation instructions for any dependencies
  - Link to your user stories – who are your users, what do they want, and why?
  - Link to your wireframes – sketches of major views / interfaces in your application
  - Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
- Descriptions of any unsolved problems or major hurdles you had to overcome

####MVP
- Admin log in
- Admin writes a blog post
- Blog post is viewable by a reader
 - Blog post has an id, date, author, and body
- Admin creates kits that can be purchased in a store
  - Store has kits, and they have ids, photos, descriptions, prices
- Admin has an editing suite for blog posts and store items
- Reader can only see/interact with specific areas of the site   

####Technologies Used
- MongoDB
- Express.js
- Angular.js
- Node.js
- JavaScript
- HTML5
- Materialize Styling Libraries


####Installation Instructions
If you wish to install my app and mess around with the components, you will need to:
1) Fork my github repo.<br>
2) Git clone to your local repository/workspace.<br>
3) In the terminal, you will need to navigate to your repo with my project and npm install the NPM packages that I have used (they include ...)


####Approach Taken
1) First I looked at several popular style blogs and evaluaed their strengths and weaknesses. I researched technologies they used to create their blogs and inspected their sites. I also wrote a thorough [proposal](https://www.evernote.com/shard/s172/sh/924bd298-eb0c-46e5-9635-1ea86618de43/56af7f93f77e5bb390f79898c988192c) and presented it to my instructors.<br>

2) Next, I drew [wireframes and wrote user stories](https://trello.com/b/Q1aaFvVW/wdi-project-4-styleguides) of my views for use as a guide for the design and an outline of important components that my views would need. <br>

3) Then, I built out the site, starting with the back end. I followed that by creating Angular elements and implementing Materialize and CSS for styling.   

####Roadblocks
Overall, working in MEAN stack was an exciting and intense process. The app was built out carefully and thoughtfully, however the vast amount of files and the relationships between them became confusing at times. In addition, authorization took quite a long time and ate into time that could have been used to add other features like checkout and a shopping cart.

####Future Implementations
In the future, I plan to:
- Take notes on the connections between the routes and various controllers
- Add a shopping cart into which one can collect kits for purchase
- Add Stripe for checkout
- Add tabs that contain different categories of projects/content
- Add a section of 'trending' posts for new readers
- Add a section of 'trending' kits for new readers
- Add a section for photos of reader generated projects using the kits from the site
- Add analytics to the site so the admin can see how popular the site is
