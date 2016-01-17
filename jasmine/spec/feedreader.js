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
    describe('The Menu', function() {
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
             */
            $html = $('html').html();
            $body = $('body');

            expect($html).toContain('menu-hidden');
            expect($body).toHaveClass('menu-hidden');
        });

         /* TODO[Complete
         ]: Write a test that ensures the menu changes
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
    /* TODO[Complete]: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO[Complete]: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('contains an entry', function(done){
            /* I feel like this is a gimmicky way to do this, but after looking
             * at what we learned from the TDD course, and looking at what we are
             * testing for, it seems to work.  I also took out the class entry, and
             * the class entry-link from the template and the test failed.
             */
            $feed = $('.feed').html();
            $article = $('article');
            expect($feed).toContain('entry');
            /* Added this expectation after initially writing the test just to 
             * further test.
             */
            expect($article).toHaveClass('entry');
            /* After writing the tests and doing some more studying, I found
             * the code in the next line.
             * expect($('.feed .entry').length).toBeGreaterThan(0);
             * I suspect this is more in line with what was wanted, since the
             * specification says at least one entry.  But what I initially
             * wrote were the two tests above, and I figure that if it has one
             * entry then it has at least one entry. Just wanted to put my 
             * reasoning in here. I think both work, but I wanted to 
             * acknowledge that a found another way that was very clever.
             */
            done();
        });
    });
    /* TODO[Complete]: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        /* First store the feed HTML in a variable */
        var feedContentPreChange = $('.feed').html();
        
        /* Run beforeEach to load a feed other than 0, since that is what loads
         * automatically
         */
        beforeEach(function(done){
            loadFeed(1, function(){
                done();
            });
        });

        it('content changes on selection', function(done){
            /* Storing the new feed HTML in a variable */
            var feedContentPostChange = $('.feed').html();

            /* Checking if the new feed and original feed HTML is different */
            expect(feedContentPostChange).not.toEqual(feedContentPreChange);
            
            done();
        });
    });
}());
