# Bartr

## Online Marketplace
## React portfolio piece

I'm finally working on my first big project for my portfolio. Initially I wanted to make a simple Craigslist clone but I've decided to create a site based on what I envision as a very simple way to buy and sell goods online.

I'm planning on supporting user profiles/accounts which will each have their own collection of items, a history of all actions and a reputation scoring system sort of like ebay. 

I want to use Mongo for the db but Firebase is still being considered. I also need to figure out how I can store the images for each item. I don't think it'll be too challenging since I have a VPS. I'm guessing I'll set it up to upload the image to a directory on the server then store the location link in the database.

I've already setup redux for the state but I still have a long way to go. I want the main focal point of this site to be the search feature. I'm trying to merge craigslist with quora or yahoo answers. Basically I want the search input to be front and center so the user can very quickly browse what's for sale. 

This is just a portfolio piece and I don't plan on actually creating a userbase. I will be deploying it and it will be fully functional once complete. 

I'm using create-react-app as a boilerplate.

### November 21, 2017

> First upload to github. I've began some initialy frameworking including setting up the redux store and one  action (addItem). I'm currently just displaying the state unfiltered on the buy page. React Router has also been used. Basic styling has only been added to the header and the 'SuperSearch' component.

### November 22, 2017

> The good news is that I don't feel boxed in anymore. I've also set up an express backend with API calls to a local mongoDB that I have set up. It took a long time to get this functioning correctly. The first method I tried was using express generator then cloning my react app into it but I eventually realized that was overkill. I set up an express api server within my create-react-app project and I'm using `axios` to make http requests whiles inside react. I need to get a better grasp on state management and updating/reading from the db. Currently the app can read and write to the db but once I add delete/edit functionality I'm confident I'll understand when the best times are to update state with db info. It was a lot of hard work today but once the API calls worked it was an amazing feeling. I definitely am happy about the progress so far although I hope to gain a deeper understanding of redux + using a DB soon.

### November 24, 2017

> I created a new collection for accounts on the mongoDB along with setting up api routes, requests, a create account component + form and some validation. Managing redux state alongside db api calls are both making a lot more sense now. The biggest thing I'm learning so far is dealing with express routing and handeling http requests. I wasn't familiar at all with any of this before but I've learned so much already. I'm going to need to orginize state managment later but it's working as intended which is pretty awesome.

> I want to work on the app recognizing a logged in user next. I also need to figure out how I'll orginize created items. I'm considering adding a new property to specifiy which user created each item. Then if that user account matches the user logged in I'll permit update/delete functions. I still need to figure out how users will upload images which might be the hardest task yet. As far as time is concerned, I'm pretty happy with my progress! After I implement image uploading I only have to set up the filter functions for the super search component. I don't expect that to be a challenge at all so I'll save it for last.

### November 25th, 2017

> I spent way too much time today trying to figure out why the NavBar component's `active-class` wouldn't update. Fortunately I narrowed it to down and found a solution. I had redux connections on the same level so the component which had the NavBar in it was being passed through connect. I don't know exactly what the issue is but broke away the  account actions from the nav into a new component and connected that instead. It solved the issue perfectly but more importantly I realized I need to focus more on how and why I create components. Realizing these issues is really helping me internalize component structure as in if they should dictate style or execute actions. I read an article on this topic but this ordeal has really jumpstarted my thought process on understanding it better. So now the client side log in system is good enough...for now..

>I also implemented a filter for items. I only filter by text for now but the framework is in place. I still need to work on image uploads for items and for account avatars. I've been doing research on the side and it's making a lot more sense now. At the same time I want to rework the backend for the API. Backend is my weakest understanding but this project alone has greatly increased my knowlegde about it. Overall I'm very satisfied with what I'm learning, my progress and the app so far. 

### Concerns
1. ~~My project structure is going to be pretty terrible. I feel boxed in from using create-react-app but I still have a components folder. This leads to another big issue...~~
2. I'm using CSS. I really want to use SASS and later on down the road I'll probably have to sort it out. Right now I'm not doing much styling so it's not a big issue.
3. Things will get interesting once I get to a point where I want to set up mongodb. ~~I have minimal experience with firebase so I have a nice foundation of understanding for promises. I've never hooked mongodb up to a project but I've had it set up and working on my computer sicne the beginning. That doesn't help much but I understand a little bit about it and I know it's the direction I want to go. If any serious issues arise I'll just use firebase.~~ `update: I hooked up mongoDB using a seperate express server just for API calls. :)`
4. Image uploads will most likely be the most challenging aspect. I think I have to use multer to upload the image to a folder in the project/server(when deployed) whiles saving the uploaded img file location as a property on the items db. Then I can easily render the image by calling that property for each item. All of this seems easy except for the uploading aspect. After I spend some time learning how multer works I'll have a better grasp on this task. 

## ^-^

Thanks for reading and I appreciate any advice. This is my first solo project that will actually involve a lot of work. Everythin else I've ever made has only taken me a day. I spent a lot of time planning this app out and I'm happy that I'm finally starting it! I'm going to give myself a 2 week deadline!