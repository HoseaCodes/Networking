# Configuration

This page explains the key configuration options available in your MkDocs site.

## The mkdocs.yml File

The `mkdocs.yml` file is the central configuration file for your MkDocs project. It contains settings that control the appearance, behavior, and structure of your documentation site.

## Basic Settings

```yaml
# Project information
site_name: Project Documentation
site_description: Documentation template built with MkDocs
site_author: Your Name
site_url: https://yourusername.github.io/your-repo-name/

# Repository
repo_name: yourusername/your-repo-name
repo_url: https://github.com/yourusername/your-repo-name

# Copyright
copyright: Copyright &copy; 2025 Your Name
```

## Theme Configuration

This template uses the Material for MkDocs theme, which offers extensive customization options:

```yaml
theme:
  name: material
  language: en
  features:
    - navigation.tabs
    - navigation.expand
    - navigation.indexes
    - search.highlight
    - search.share
    - content.code.copy
  palette:
    - scheme: default
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    - scheme: slate
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
  font:
    text: Roboto
    code: Roboto Mono
  icon:
    repo: fontawesome/brands/github
  logo: assets/images/logo.png
  favicon: assets/images/favicon.png
```

### Color Options

You can customize the primary and accent colors. Some available options include:

- `red`
- `pink`
- `purple`
- `deep-purple`
- `indigo`
- `blue`
- `light-blue`
- `cyan`
- `teal`
- `green`
- `light-green`
- `lime`
- `yellow`
- `amber`
- `orange`
- `deep-orange`
- `brown`
- `grey`
- `blue-grey`

## Plugins

Plugins extend the functionality of MkDocs:

```yaml
plugins:
  - search
  - minify:
      minify_html: true
  - git-revision-date-localized:
      type: date
```

## Markdown Extensions

Markdown extensions enhance the capabilities of standard Markdown:

```yaml
markdown_extensions:
  - admonition
  - attr_list
  - codehilite:
      guess_lang: false
  - def_list
  - footnotes
  - meta
  - toc:
      permalink: true
      toc_depth: 3
  # Additional extensions...
```

## Navigation Structure

Define the structure of your documentation site:

```yaml
nav:
  - Home: index.md
  - Getting Started: getting-started.md
  - User Guide:
    - Configuration: user-guide/configuration.md
    - Customization: user-guide/customization.md
    - Deployment: user-guide/deployment.md
  - API Reference: api-reference/index.md
```

## Extra CSS and JavaScript

Add custom CSS and JavaScript files:

```yaml
extra_css:
  - assets/css/extra.css
extra_javascript:
  - assets/js/extra.js
```

## Environment Variables

You can use environment variables in your configuration:

```yaml
# Use !ENV to reference environment variables
site_url: !ENV [SITE_URL, 'https://yourusername.github.io/your-repo-name/']
```

## Further Resources

For more detailed information about configuration options:

- [MkDocs Configuration](https://www.mkdocs.org/user-guide/configuration/)
- [Material for MkDocs Configuration](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)