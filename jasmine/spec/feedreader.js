/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the test suite for the RSS Feeds */
    describe('RSS Feeds', function() {
        /* This tests that the allFeeds array is defined and not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Testing that the RSS Feeds have a URL */
        it('has a URL', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
            });
        });

        /* Testing that the URL in each RSS Feed has something in it */
        it('URL is not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /* Tests that each RSS has a name and is not empty */
        it('has a name that is not empty', function(){
            allFeeds.forEach(function(feed){
                /* toBeTruthy will test that the name is defined and has a value. */
                expect(feed.name).toBeTruthy();
            });
        });
    });

    /* Test suite for The Menu */
    describe('The Menu', function() {
        /* Test checks that the menu is hidden by default */
        it('is hidden by default', function(){
            /* I am utilizing jasmine-jQuery to 
             * see if the body element has a certain class.
             */
            var $body = $('body');
            expect($body).toHaveClass('menu-hidden');
        });

         /* Test checks that the menu is changes visibility when clicked. */
        it('changes visibility when clicked', function(){

            /* Got to store some DOM elements.
             * At first, I thought I would need to get the body DOM element
             * after doing the clicks, but tried moving it up here and it 
             * still works.
             */
            var $body = $('body');
            var $menu = $('.menu-icon-link');

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

    /* Testing Initial Entries */
    describe('Initial Entries', function(){

        /* Loading the initial entries. */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        /* Testing that the initial entry contains an entry */
        it('contains an entry', function(){
            /* Initially, I had this test working by seeing if entry was in
             * the HTML of the feed class.  However, it was pointed out that
             * this could cause a false passing expectation.
             * After my tests were passing, I had looked at some forums testing
             * that the feed entry has more than one item in it.
             * But for what I am submitting, I got information here, which is also
             * documented in the README
             * https://discussions.udacity.com/t/async-tests-beforeeach-how-does-it-really-works/41386
             */
            var $feed = $('.feed .entry');
            
            expect($feed.length).toBeGreaterThan(0);
        });
    });

    /* Testing when a new feed is selected.  */
    describe('New Feed Selection', function(){
        /* Documented this is in the README file, but I wanted to also put this
         * here in the file. Initially, I thought that I would somehow use a spy
         * to track changes being made to the feed, but it did not look like that
         * would work after reading the documentation.  After that I had trouble
         * wrapping my head around how to test this and checked the forums.
         * Got some good help from the following posts:
         * https://discussions.udacity.com/t/p6-new-feed-selection-test-question-problem/15562/11
         * https://discussions.udacity.com/t/last-test-in-the-project/15118/2
         * https://discussions.udacity.com/t/project-6-final-test-issue/17187
         * https://discussions.udacity.com/t/async-tests-beforeeach-how-does-it-really-works/41386
         */

        /* Going to try and show that I know what is going on here.
         * First of all, I am declaring the variables I want tp compare here.
         */
        var feedContentPreChange;
        var feedContentPostChange;
        
        /* Run beforeEach to load a feed 0, since that is what loads
         * automatically.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                feedContentPreChange = $('.feed').html();
                done();
            });
        });

        /* Once the done() method is called, the it block is allowed to run. */
        it('content changes on selection', function(done){
            /* Now, I need to call loadFeed again to get a new feed.
             * I am sending in a callback function, and in the callback
             * I am getting the HTML of the feed.
             * My understanding, is basically I am getting the HTML of the feed
             * on line 73 of app.js and then I run my expectation.
             * Then I call done(), which allows Jasmine to know I am done.
             */
            loadFeed(1, function(){
                feedContentPostChange = $('.feed').html();
                expect(feedContentPostChange).not.toEqual(feedContentPreChange);
                done();
            });
        });
    });

    /* Tests below are for future functionality.
     * The describe block will run.  But the tests within are xit blocks
     * which should show as pending, but will not run.
     */
    describe('Future Functionality', function(){

        /* I wrote this test looking at the template for the feeds
         * There is a place for a contentSnippet, so I figured we should
         * test for that.
         */
        xit('each feed should have a contentSnippet defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.contentSnippet).toBeTruthy();
            });
        });

        /* Assumption in this test is that the contentSnippet is loaded
         * during the loadFeed function.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });  

        xit('initial feed should show a contentSnippet', function(){
            /* Assuming the contentSnippet will have the class contentSnippet */
            var $feed = $('.feed .contentSnippet');
            expect($feed.length).toBeGreaterThan(0);    
        });
    });
}());
