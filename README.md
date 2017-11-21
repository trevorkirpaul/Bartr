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

### Concerns
1. My project structure is going to be pretty terrible. I feel boxed in from using create-react-app but I still have a components folder. This leads to another big issue...
2. I'm using CSS. I really want to use SASS and later on down the road I'll probably have to sort it out. Right now I'm not doing much styling so it's not a big issue.
3. Things will get interesting once I get to a point where I want to set up mongodb. I have minimal experience with firebase so I have a nice foundation of understanding for promises. I've never hooked mongodb up to a project but I've had it set up and working on my computer sicne the beginning. That doesn't help much but I understand a little bit about it and I know it's the direction I want to go. If any serious issues arise I'll just use firebase.

## ^-^

Thanks for reading and I appreciate any advice. This is my first solo project that will actually involve a lot of work. Everythin else I've ever made has only taken me a day. I spent a lot of time planning this app out and I'm happy that I'm finally starting it! I'm going to give myself a 2 week deadline!