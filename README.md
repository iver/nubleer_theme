# Nubleer-theme

Another theme for [Hugo](http://gohugo.io/) but used by Nubleer team.

![](images/screenshot.jpg)


## Features

- Layout with Material Design by [Materialize](http://materializecss.com/)
- Pagination
- Twitter, Facebook, GitHub, Google+, LinkedIn links (optional)
- Tags
- Categories
- Cover image (optional)
- Highlighting source code

## Installation

From git as submodule

```shell
$ git init
$ git submodule add https://github.com/ivan-iver/nubleer_theme.git themes/nubleer
```

As clone repository

```shell
$ mkdir themes
$ cd themes
$ git clone https://github.com/ivan-iver/nubleer_theme.git themes/nubleer 
```

## Configuration

config.toml

```toml
theme="nubleer"
baseurl = "Your Site URL"
languageCode = "en-us"
title = "Your Site Title"
MetaDataFormat = "toml"
paginate = 9 # To specify a multiple of 3
copyright = "© 2015 Copyright Text"

[params]
  description = "Your Site Description" # optional
  twitter = "Your Twitter Name" # optional
  github = "Your Github Name" # optional
  facebook = "Your facebook Name" # optional
  gplus = "Your Google+ profile name" # optional
  linkedin = "Your LinkedIn Name" # optional
  headerCover = "images/headerCover.png" # optional
  footerCover = "images/footerCover.png" # optional

[permalinks]
  post = "/:year/:month/:day/:title/" # optional
```

## Copyright and license

***

Copyright (c) 2015 Iván Jaimes. See [LICENSE](LICENSE) for details.

