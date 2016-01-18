## There was a lot of instructions from Udacity as it pertains to this project, but I deleted them.

I used the following references:
- https://discussions.udacity.com/t/p6-new-feed-selection-test-question-problem/15562/11
- https://discussions.udacity.com/t/last-test-in-the-project/15118/2
- https://discussions.udacity.com/t/project-6-final-test-issue/17187
- https://discussions.udacity.com/t/async-tests-beforeeach-how-does-it-really-works/41386

There are a couple options to run this project:
1). Clone the project, or download the project, and then open index.html.  Results of the tests are at the bottom of the page
2). Visit the hosted pages at http://ericmartz.github.io/P6-TestDrivenDevelopment

There are 9 tests that run against the existing application:
1. RSS Feeds are defined.
2. RSS Feeds has a URL.
3. RSS Feeds URL is not empty.
4. RSS Feeds has a name that is not empty.
5. The Menu is hidden by default.
6. The Menu changes visibility when clicked.
7. Initial Entries contains an entry.
8. New Feed Selection content changes on selection.

There is a describe block that holds several xit blocks.
The xit blocks are pending tests for future functionality.
1. Future Functionality should load content snippet.
  - This tests that a contentSnippet is defined
  - In the AJAX response, there is a description field and a summary field. 
    - Either of these could be used to provide a contentSnippet
2. Future Functionality should show a contentSnippet.
  - This tests that the contentSnippet that was defined is added to the webpage. 
