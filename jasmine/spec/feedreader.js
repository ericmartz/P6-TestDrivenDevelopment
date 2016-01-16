/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* NOTE TO REVIEWER:
 * So what I am finding is that there are so many different ways
 * to test values and to ensure you're getting what you want.
 * if you have any other ideas while running through the tests
 * I wrote I would love to hear them.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO[Complete]: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         /* For modularity, I separated the tests that the URL is 
          * defined and that the URL is not empty.
          * Mostly, It looks like making tests unique and testing
          * one item is a good idea, even if it has multiple expectations.
          */
        it('has URL', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
            });
        });

        it('URL is not empty', function(){
            allFeeds.forEach(function(feed){
                /* I wanted a way to ensure the URL was not NULL, but I also
                 * wanted to ensure the URL has a value. I thought testing that
                 * the URL contains 'http://' would be a good idea.
                 */
                expect(feed.url).not.toBeNull();
                expect(feed.url).toContain("http://");
            });
        });

        /* TODO[Complete]: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
            });
        });

        it('name is not empty', function(){
            allFeeds.forEach(function(feed){
                /* I wanted a way to ensure that feed.name was not NULL,
                 * but I also want to ensure it has a value. I originally
                 * used not.toBeNull(), but then added toBeTruthy() to ensure
                 * that the feed.name has a value. Since NULL evaluates
                 * to FALSE, I took out not.toBeNull().
                 * It is interesting looking through the different matchers
                 * and realizing how they can be used in interesting ways.
                 */ 
                // expect(feed.name).not.toBeNull();
                expect(feed.name).toBeTruthy();
            });
        });
    });

    /* TODO[Complete]: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO[Complete]: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            /* Performing this test two ways,
             * although they test the same thing.
             * First we just get all the html and
             * see if menu-hidden is in there.
             * Then I am also utilizing jasmine-jQuery to 
             * get see if the body element has a certain class.
             * I like the 2nd way better, but I wasn't sure about
             * using jasmine-jQuery as part of this project.
             * Although, it would be nice to see if the menu has an
             * xPosition of -12em. 
             */
            $html = $('html').html();
            $body = $('body');

            expect($html).toContain('menu-hidden');
            expect($body).toHaveClass('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when clicked', function(){

            /* Gots to store some DOM elements.
             * At first, I thought I would need to get the body DOM element
             * after doing the clicks, but tried moving it up here and it 
             * still works.
             */
            $body = $('body');
            $menu = $('.menu-icon-link');

            /* First we test that when the menu is clicked, it makes the
             * menu visible.
             */
            $menu.click();
            expect($body).not.toHaveClass('menu-hidden');

            /* Second we're going to test that when the menu is clicked it 
             * becomes not-so visible.
             */
            $menu.click();
            expect($body).toHaveClass('menu-hidden');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
