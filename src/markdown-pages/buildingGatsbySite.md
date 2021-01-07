---
slug: "/blog/build-a-gatsby-site"
title: "How I built this website and why it matters"
date: "2020-12-18"
author: "Zach Robertson"
---
## GatsbyJS

*********************************

GatsbyJS is the JavaScript framework I used to build this website, it is advertised as a quick method to build a very fast static website. Gatsby is built with React, a JavaScript library created by Facebook to make user interfaces, which means you can leverage all the functionality of React in your website as well. As someone who had no JavaScript experience it wasn't the easiest thing to build a website from scratch, but Gatsby was probably the easiest way to do it.

I wanted to write a post about my experience learning to use Gatsby as a beginner, some tips for those people in the same positon as me, as well as the things that are still a work in progress or took me a long time to figure out.

As you can obviously see this site is not the pinnacle of beauty but it works and can be easily updated any time, so I think of it as a good starting point. If you want to see some examples of really good modern gatsby sites take a look at [this GatsbyJS showcase](https://www.gatsbyjs.com/showcase/)

### Getting Started

*********************************

After installing [NodeJS](https://nodejs.org/en/) install the [gatsby-cli](https://www.npmjs.com/package/gatsby-cli) using the npm command `npm install -g gatsby-cli`. `npm` stands for Node Package Manager and it is a simple way to install global or local node packages, the `-g` command stand for global, usually when we install node packages it will just be for the project we are currently working on but for gatsby we want to be able to use it on multiple projects if we decide we want to make more websites, or to have multiple instances of the same site for development.