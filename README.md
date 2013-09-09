Master Framework
================

This repo contains the pre-generated html and other files for our front-end framework. It can be used to preview how your code will work in the live site.

The framework is built on some absolute file paths, which means you'll need to run a local server at the root directory for the pages to look right in your browser.

There are several ways you could go about running a localhost server: If you've already got [Jekyll](http://jekyllrb.com/docs/quickstart/) installed for our master-build framework, simply cd to the build directory, build the site, and then serve it.

    $ jekyll serve

If you are using an IDE like [Netbeans](https://netbeans.org/) for development, you'll already have one built in. Alternatively, you could use [MAMP](http://www.mamp.info/en/index.html) (for Macs) or [XAMPP](http://www.apachefriends.org/en/xampp.html) (for Linux/Windows) to run a simple local Apache server.

Perhaps the simplest solution is to run a simple HTTP server on the command line. Here's an example of how you could do this using [Python](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python):

    $ cd /to/some/directory/master-framework
    $ python -m SimpleHTTPServer
    
Point your browser to localhost:8000
