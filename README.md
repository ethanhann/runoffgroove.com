# Deployment
## Install Prerequisites

Note, these directions assume you are using Windows.

1. Install Ruby 1.9.3
    - Download the installer from http://rubyinstaller.org/downloads
                - Run the installer.
                - Check "Add Ruby executables to your PATH" on the first screen of the installer.
                - Click install without changing any other options.
2. Install the Development Kit for Ruby 1.9.3
               - Download the installer from http://rubyinstaller.org/downloads
                - Run the dev kit installer and set the extraction location to C:\Ruby193DevKit
                - Open a command prompt and switch to the dev kit directory.
                                - __cd C:\Ruby193DevKit__
                - Initialize and install the dev kit using these commands:
                                - __ruby dk.rb init__
                                - __ruby dk.rb install__
3. Install Jekyll
                - At the command prompt, enter: __gem install jekyll__

4. Install Git
                - http://git-scm.com/download/win

## Build Site and Upload to Web Host

1. Open command prompt.
2. Checkout code from github.com:
                - git clone https://github.com/ethanhann/runoffgroove.com.git
3. Observe that there is now a directory called "runoffgroove.com"
4. Navigate into the new directory.
                - __cd runoffgroove.com__
5. Build the site (a new directory called _site will be created).
                - __jekyll build__
6. Upload the contents of the _site directory (and nothing else) to the document root of your web host service using FTP, SFTP, etc.

# Adding New Content
## How to add a new project

1. Copy the project post template from the _drafts directory to _posts/project.
2. Rename the copied file to reflect the desired published date and project name (this is what determines the date and text in the post's url).
3. At the top of the copied file set the title, description, date, and complexity attributes.
    - Complexity should be 1, 2, or 3.
                - If there is no complexity, then remove the entire "complexity: " attribute.
4. Replace the comments in the post body with the appropriate content.
    - Post text (Should wrap each paragraph in <p></p> tag)
                - Pedal Image (Sample markup is in template)
                - Sound Samples (Sample markup is in template)
5. Replace the word PROJECT with the name of the project in the src attribute of the schematic, perfboard, and PCB elements.
    - You need to put the corresponding files in the /images and /pdf directories.
                - If an image or PDF does not exist, just delete the relevant HTML.
                - If the PCB has a contributor, replace the word CONTRIBUTOR with the appropriate name and uncomment the HTML.

## How to add a news item
1. Copy the news post template from the _drafts directory to the _posts/news directory.
2. Rename the copied file to reflect the desired published date and news item name (this is what determines the date and text in the post's URL).
3. At the top of the copied file set the title and date attributes.

## How to add a new FAQ
In faq/index.html add a matching question (dt element) and answer (dd element) to the list (dl element). For instance:
### This code:
```
<dt>How do I do something?</dt>
<dd>
    <blockquote>
        <p>You do that by doing blah blah blah.</p>
        <p>You could also do blah blah blah.</p>
    </blockquote>
</dd>
```
### Produces:
<dt>How do I do something?</dt>
<dd>
    <blockquote>
        <p>You do that by doing blah blah blah.</p>
        <p>You could also do blah blah blah.</p>
    </blockquote>
</dd>
