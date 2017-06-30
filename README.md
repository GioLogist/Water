# Water

<p align="center">
  <a href="#">
    <img height="250" width="250" src="docs/assets/img/logo.png">
  </a>
  <p align="center">A front-end boilerplate that just flows.</p>
  <p align="center">
  <a target="_blank" href="http://gulpjs.com/" title="Gulp - Automate and enhance your workflow"><img height="80" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"></a>
    <a target="_blank" href="http://https://twig.sensiolabs.org/" title="Twig - The flexible, fast, and secure template engine for PHP"><img height="80" src="https://twig.sensiolabs.org/images/twig-logo.png"></a>
    <a target="_blank" href="http://sass-lang.com" title="Sass: Syntactically Awesome Style Sheets"><img height="80" src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"></a>
    <a target="_blank" href="http://bradfrost.com/blog/post/atomic-web-design/" title="Atomic Design - Design Methodology"><img height="80" src="http://rewrites.atomicdesign.bradfrost.com/images/atomic-design.svg"></a>
   </p>
</p>

## What is Water?

- **Atomic Design** - [Atomic design](http://bradfrost.com/blog/post/atomic-web-design) methodology out-the-box, keeping you organized & ready-to-go.
- **Automation** - Using tools like [Gulp](http://gulpjs.com/) and [Sass](http://sass-lang.com) in order to optimize your workflow, Water takes care of the little (but annoying) stuff.
- **Living Styleguide** - Water scans comments from your existing components and **automagically** creates (and updates) a style guide for you, using [KSS StyleSheets](http://warpspire.com/kss/styleguides/).
- **Twig Templating** - Water uses [Twig](http://https://twig.sensiolabs.org/), the most reliable template engine.

## Gulp Tasks
Here's the list of gulp tasks included:

- **lint** - Detect JS Errors
- **sass** - Compile & Concat Sass
- **scripts** - Minify & Concat JS
- **twig** - Compile Twig templates
- **watch** - Watch js, scss & twig files for changes and automatically refresh browser.
- **styleguide-build** - Compile & automatically create a styleguide
- **styleguide-watch** - Watch for all StyleGuide related changes
- **styleguide** - Runs both styleguide-build and styleguide-watch

Note: Running **gulp** alone, performs all of the above.

## Installation
```sh
git clone git@github.com:giologist/Water
npm install
gulp
```
