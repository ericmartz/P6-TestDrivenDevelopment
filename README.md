## There was a lot of instructions from Udacity as it pertains to this project, but I deleted them.

On the last test, I used the following references:
- https://discussions.udacity.com/t/last-test-in-the-project/15118/2
- https://discussions.udacity.com/t/project-6-final-test-issue/17187

There are a couple options to run this project:
1). Clone the project, or download the project, and then open index.html.  Results of the tests are at the bottom of the page
2). Visit the hosted pages at http://ericmartz.github.io/P6-TestDrivenDevelopment

There are 9 tests that run against the existing application:
1. RSS Feeds are defined.
2. RSS Feeds has a URL.
3. RSS Feeds URL is not empty.
4. RSS Feeds has a name.
5. RSS Feeds name is not empty.
6. The Menu is hidden by default.
7. The Menu changes visibility when clicked.
8. Initial Entries contains an entry.
9. New Feed Selection content changes on selection.

There is a describe block that holds several xit blocks.
The xit blocks are pending tests for future functionality.
1. Future Functionality should show content snippet.
  - This tests that a contentSnippet is added to each entry
  - In the AJAX response, there is a description field and a summary field. 
    - Either of these could be used to provide a contentSnippet
2. Future Functionality should load content as an AJAX request
  - This is just a test stub, not test exists yet.
  - The idea is that when an entry is clicked, content is obtained from the link
    which is then added to the Feed Reader.  This way the user can get the content
    without leaving the Feed Reader.
