# zachrobertson.tech

This is a site built with gatsby, and designed by me!
It is layed out the same way as any other gatsby site but let me walk you through it.

## Layout

    .
    └── src
      └── components
        └── blog
            ├── blogContainer.js
            └── blogTemplate.js
        ├── footer.js
        ├── header.js
        ├── indexHeader.js
        ├── indexLayout.js
        ├── layout.js
        └── profile.js
      └── images
        ├── GitHubLogo.png
        ├── LinkedinLogo.png
        └── profile.jpg
      └── markdown-pages
        └── buildingGatsbySite.md
      └── pages
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
  
This is the typical layout of a Gatsby project, if you have not worked with gatsby before it would be best to go take a look at their quick-start [here](https://www.gatsbyjs.com/docs/quick-start/).

Below is a breakdown of what each file in the src/ sub-directories is for.

### Components

> This directory holds all of the JavaScript files that produce reusable react components. This means these files can be imported and used to add new features or style to a page or another component.

- #### Blog

##### blogContainer.js

> Used on the index and blog pages to hold excerpts of blog posts for cleaner display and search.

##### blogTemplate.js

#### footer.js

> This is just a classic footer, imported in the layout componnet for easy use on all pages

#### header.js

> A non standard header. This is actually the left-side navbar and hanburger menu but it serves as my header. It is imported in the layout component for easy use on all pages.

#### indexHeader.js

> A special version of the header to be used on the index page only. The only difference is the default showHeader variable is set to true instead of false.

#### indexLayout.js

> A special layout for the index page so that we can use the indexHeader component instead of the standard header. The only difference between this and the standard layout is the header.

#### layout.js

> This is the standard layout component, it gives the style and extra functionality to all the pages other than the index page. 

#### profile.js

>A react component for the picture on the index page.

### Images

> This is just a directory to hold all the image files we might need.

### Markdown-pages

> Markdown files are used to automatically create blog posts, if we add a markdown file in this directory it will automatically create a blog post when we rebuild the site.

### Pages

> This is the main file in our `src/` directory. If you are familiar with Gatsby you will be aware that for each file in our pages directory a page will be created at `yourcustomurl.xyz/page` where `page` is replaced by the name of the JS file (index is the home page, and sub-directory JS files do not create pages)
