# API Reference

This page provides a reference for the APIs and tools available in this MkDocs template.

## MkDocs Commands

Here are the key MkDocs commands you can use with this template:

| Command | Description |
| ------- | ----------- |
| `mkdocs new [dir-name]` | Create a new project. |
| `mkdocs serve` | Start the live-reloading docs server. |
| `mkdocs build` | Build the documentation site. |
| `mkdocs -h` | Print help message and exit. |
| `mkdocs gh-deploy` | Deploy your documentation to GitHub Pages. |

## Python Helper Functions

This template includes several Python helper functions in the `docs/assets/js/helpers.py` file that you can use to enhance your documentation.

### File Structure Generator

```python
def generate_file_structure(directory, indent=0, exclude_dirs=None, exclude_files=None):
    """
    Generate a Markdown representation of a file structure.
    
    Args:
        directory (str): The directory to start from
        indent (int): The current indentation level
        exclude_dirs (list): Directories to exclude
        exclude_files (list): Files to exclude
        
    Returns:
        str: Markdown formatted file structure
    """
    if exclude_dirs is None:
        exclude_dirs = ['.git', '__pycache__', 'venv', 'site']
    if exclude_files is None:
        exclude_files = ['.DS_Store', '*.pyc', '*.pyo', '*.pyd', '.gitignore']
    
    # Implementation...
    
    return markdown_structure
```

### Markdown Table Generator

```python
def generate_markdown_table(headers, rows):
    """
    Generate a Markdown table from headers and rows.
    
    Args:
        headers (list): List of table headers
        rows (list): List of lists containing row data
        
    Returns:
        str: Markdown formatted table
    """
    # Implementation...
    
    return markdown_table
```

## JavaScript Utilities

The template includes JavaScript utilities in the `docs/assets/js/extra.js` file:

### Code Copy Button

A button is automatically added to code blocks that allows users to copy the code with a single click:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function(codeBlock) {
        // Code copy button implementation
    });
});
```

### Dark Mode Toggle

The dark mode toggle functionality is handled by Material for MkDocs and can be customized in the `mkdocs.yml` file:

```yaml
theme:
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
```

## CSS Variables

The template defines CSS variables that you can use for consistent styling:

```css
:root {
    --md-primary-fg-color: #1a73e8;
    --md-primary-fg-color--light: #5393ff;
    --md-primary-fg-color--dark: #0d47a1;
    --md-accent-fg-color: #1a73e8;
    --md-accent-fg-color--transparent: rgba(26, 115, 232, 0.1);
}
```

## Plugin Configuration

This template includes several plugins that can be configured in the `mkdocs.yml` file:

### Search Plugin

```yaml
plugins:
  - search:
      lang: en
      separator: '[\s\-\_\.]+'
```

### Minify Plugin

```yaml
plugins:
  - minify:
      minify_html: true
      minify_js: true
      minify_css: true
      htmlmin_opts:
          remove_comments: true
```

### Git Revision Date Plugin

```yaml
plugins:
  - git-revision-date-localized:
      type: date
      fallback_to_build_date: true
      enable_creation_date: true
      enabled: true
```

## Markdown Extensions

This template includes several Markdown extensions that enhance the basic Markdown syntax:

### Admonitions

```markdown
!!! note "Note Title"
    This is a note admonition.

!!! tip "Tip Title"
    This is a tip admonition.

!!! warning "Warning Title"
    This is a warning admonition.

!!! danger "Danger Title"
    This is a danger admonition.
```

### Tabs

```markdown
=== "Tab 1"
    Content of tab 1.

=== "Tab 2"
    Content of tab 2.
```

### Code Annotations

```markdown
```python
def hello_world():
    print("Hello, world!") # (1)
```

1. This is an annotation for the code.
```

### Mathematics

```markdown
$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$
```

## Further Reading

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs Documentation](https://squidfunk.github.io/mkdocs-material/)
- [Python-Markdown Documentation](https://python-markdown.github.io/)
- [PyMdown Extensions Documentation](https://facelessuser.github.io/pymdown-extensions/)