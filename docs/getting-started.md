# Getting Started

This guide will help you set up and customize your MkDocs documentation site.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Python](https://www.python.org/) (version 3.7 or higher)
- [pip](https://pip.pypa.io/en/stable/installation/) (Python package installer)
- [Git](https://git-scm.com/) (for version control)

## Installation

### Create Your Repository

1. Click the "Use this template" button on GitHub to create a new repository based on this template.
2. Clone your new repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### Set Up Development Environment

1. Create a virtual environment (optional but recommended):

```bash
python -m venv venv
```

2. Activate the virtual environment:

=== "Windows"
    ```bash
    venv\Scripts\activate
    ```

=== "macOS/Linux"
    ```bash
    source venv/bin/activate
    ```

3. Install the required packages:

```bash
pip install -r requirements.txt
```

## Local Development

1. Start the local development server:

```bash
mkdocs serve
```

2. Open your browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

3. Make changes to your Markdown files in the `docs/` directory and see the changes reflected in real-time.

## Basic Configuration

The main configuration file for your MkDocs site is `mkdocs.yml`. Here are some key settings you might want to customize:

```yaml
# Basic site information
site_name: Your Project Name
site_description: A description of your project
site_author: Your Name
site_url: https://yourusername.github.io/your-repo-name/

# Repository information
repo_name: yourusername/your-repo-name
repo_url: https://github.com/yourusername/your-repo-name
```

## Adding Content

1. Create new Markdown files in the `docs/` directory.
2. Update the `nav` section in `mkdocs.yml` to include your new pages:

```yaml
nav:
  - Home: index.md
  - Getting Started: getting-started.md
  - New Page: new-page.md
  - Section:
    - Subsection Page: section/subsection-page.md
```

## Next Steps

- Learn more about [configuration options](user-guide/configuration.md)
- Explore [customization](user-guide/customization.md) possibilities
- Set up [deployment](user-guide/deployment.md) to GitHub Pages