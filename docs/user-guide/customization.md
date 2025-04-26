# Customization

This guide covers various ways to customize your MkDocs site.

## Styling with CSS

You can customize the appearance of your site by adding CSS to the `docs/assets/css/extra.css` file:

```css
/* Example: Change the link color */
.md-content a {
    color: #0066cc;
}

/* Example: Customize admonition blocks */
.md-typeset .admonition.custom,
.md-typeset details.custom {
    border-color: #8e44ad;
}

.md-typeset .custom > .admonition-title,
.md-typeset .custom > summary {
    background-color: rgba(142, 68, 173, 0.1);
}

.md-typeset .custom > .admonition-title::before,
.md-typeset .custom > summary::before {
    background-color: #8e44ad;
}
```

## Adding JavaScript Functionality

Add custom JavaScript to enhance your site by editing `docs/assets/js/extra.js`:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click handler to all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function(block) {
        block.addEventListener('click', function() {
            // Do something when a code block is clicked
            console.log('Code block clicked');
        });
    });
});
```

## Custom Admonitions

You can create custom admonitions using CSS and the `admonition` extension:

```markdown
!!! custom "Custom Admonition"
    This is a custom admonition that uses our custom CSS.
```

First, add the CSS for your custom admonition to `extra.css`:

```css
.md-typeset .admonition.custom,
.md-typeset details.custom {
    border-color: #8e44ad;
}

.md-typeset .custom > .admonition-title,
.md-typeset .custom > summary {
    background-color: rgba(142, 68, 173, 0.1);
}

.md-typeset .custom > .admonition-title::before,
.md-typeset .custom > summary::before {
    background-color: #8e44ad;
    -webkit-mask-image: var(--md-admonition-icon--custom);
    mask-image: var(--md-admonition-icon--custom);
}

:root {
    --md-admonition-icon--custom: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2m4.5-6H19v2.17L17.83 8H6.17L5 6.17V4h2.5m8.5 2H8v2h10V6M4 15h16v5h-1v-1H5v1H4v-5Z"/></svg>');
}
```

## Customizing the Navigation

Customize the navigation structure in `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - Getting Started: getting-started.md
  - User Guide:
    - Configuration: user-guide/configuration.md
    - Customization: user-guide/customization.md
    - Deployment: user-guide/deployment.md
  # Add your custom sections here
  - Examples:
    - Basic Example: examples/basic.md
    - Advanced Example: examples/advanced.md
  - API Reference: api-reference/index.md
```

## Custom Theme Overrides

For more extensive customization, you can override theme templates:

1. Create a `docs/overrides` directory.
2. Update your `mkdocs.yml`:

```yaml
theme:
  name: material
  custom_dir: docs/overrides
```

3. Create template overrides in the `overrides` directory. For example, to override the footer, create `overrides/partials/footer.html`:

```html
{% import "partials/language.html" as lang with context %}

<footer class="md-footer">
  <div class="md-footer-meta md-typeset">
    <div class="md-footer-meta__inner md-grid">
      <div class="md-footer-copyright">
        {% if config.copyright %}
          <div class="md-footer-copyright__highlight">
            {{ config.copyright }}
          </div>
        {% endif %}
        Made with
        <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener">
          Material for MkDocs
        </a>
        {% block extracopyright %}
          <!-- Custom copyright text -->
          <div>Custom footer content here</div>
        {% endblock %}
      </div>
      {% include "partials/social.html" %}
    </div>
  </div>
</footer>
```

## Adding Social Links

Add social links to your documentation by updating `mkdocs.yml`:

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/yourusername
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/yourusername
    - icon: fontawesome/brands/linkedin
      link: https://linkedin.com/in/yourusername
```

## Customizing Favicon and Logo

1. Add your logo and favicon images to `docs/assets/images/`.
2. Update your `mkdocs.yml`:

```yaml
theme:
  logo: assets/images/logo.png
  favicon: assets/images/favicon.png
```

## Further Resources

For more customization options, refer to:

- [Material for MkDocs Customization](https://squidfunk.github.io/mkdocs-material/customization/)
- [MkDocs Theme Development](https://www.mkdocs.org/user-guide/custom-themes/)