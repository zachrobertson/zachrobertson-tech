
<h1>zachrobertson.tech</h1>
<div>
This is a site built with gatsby, and designed by me!
It is layed out the same way as any other gatsby site but let me walk you through it.

## Layout

    .
    ├── src
      ├── components
        ├── blogContainer.js
        ├── footer.js
        ├── header.js
        ├── indexHeader.js
        ├── indexLayout.js
        ├── layout.js
        └── profile.js
      ├── images
        ├── GitHubLogo.png
        ├── LinkedinLogo.png
        └── profile.jpg
      ├── markdown-pages
        └── buildingGatsbySite.md
      └── pages
        ├── blog
          └── blogTemplate.js
        ├── 404.js
        ├── blog.js
        ├── contact.js
        └── index.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    ├── README.md
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    └── package.json
    
This is the typical layout of a Gatsby project, if you have not worked with gatsby before it would be best to go take a look at their quick-start <a href="https://www.gatsbyjs.com/docs/quick-start/">here</a>. 

Below is a breakdown of what each file in the src/ sub-directories is for.

> ### Components
>> This directory holds all of the JavaScript files that produce resuable react components. This means these files can be imported and used to add new features or style to a page or another componnet.
>> #### blogContainer.js
>>> Used on the index and blog pages to hold excerpts of blog posts for cleaner display and search.
>> #### footer.js
>>> This is just a classic footer, imported in the layout componnet for easy use on all pages
>> #### header.js
>>> A non standard header. This is actually the left-side navbar and hanburger menu but it serves as my header. It is imported in the layout component for easy use on all pages.
>> #### indexHeader.js
>>> A special version of the header to be used on the index page only. The only difference is the default showHeader variable is set to true instead of false.
>> #### indexLayout.js
>>> A special layout for the index page so that we can use the indexHeader component instead of the standard header. The only difference between this and the standard layout is the header.
>> #### layout.js
>>> This is the standard layout component, it gives the style and extra functionality to all the pages other than the index page. 
>> #### profile.js
>>> A react component for the picture on the index page.
</div>