# Deployment

This guide covers different ways to deploy your MkDocs site.

## GitHub Pages Deployment

This template includes a GitHub Actions workflow that automatically deploys your documentation to GitHub Pages whenever you push changes to the main branch.

### Setting Up GitHub Pages

1. Go to your repository settings on GitHub.
2. Navigate to "Pages" in the sidebar.
3. Under "Build and deployment", select "GitHub Actions" as the source.

### Understanding the Workflow

The workflow is defined in `.github/workflows/deploy.yml`:

```yaml
name: Deploy MkDocs Documentation

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Deploy documentation
        run: mkdocs gh-deploy --force
```

This workflow:
1. Triggers on pushes to the main branch
2. Sets up a Python environment
3. Installs dependencies
4. Builds and deploys the documentation to the `gh-pages` branch

### Custom Domain

To use a custom domain with your GitHub Pages site:

1. Add your custom domain in your repository settings under "Pages" > "Custom domain".
2. Create a `CNAME` file in the `docs` directory with your domain:

```
www.yourdomain.com
```

3. Update your `mkdocs.yml` file to include the custom domain:

```yaml
site_url: https://www.yourdomain.com/
```

## Manual Deployment

You can also deploy your documentation site manually:

```bash
# Build the site
mkdocs build

# The site will be built in the 'site' directory
# You can deploy this directory to any web hosting service
```

## Deploying to Other Hosting Services

### Netlify

1. Push your MkDocs project to GitHub, GitLab, or Bitbucket.
2. Sign up for [Netlify](https://www.netlify.com/).
3. Create a new site from Git and select your repository.
4. Configure the build settings:
   - Build command: `mkdocs build`
   - Publish directory: `site`
5. Click "Deploy site".

### ReadTheDocs

1. Create a `.readthedocs.yml` file in your repository:

```yaml
version: 2

mkdocs:
  configuration: mkdocs.yml

python:
  version: 3.8
  install:
    - requirements: requirements.txt
```

2. Sign up for [ReadTheDocs](https://readthedocs.org/).
3. Import your repository.
4. Configure your project settings.
5. Trigger a build.

### AWS Amplify

1. Push your MkDocs project to GitHub, GitLab, or Bitbucket.
2. Sign up for [AWS Amplify](https://aws.amazon.com/amplify/).
3. Connect your repository.
4. Configure the build settings:
   - Build command: `pip install -r requirements.txt && mkdocs build`
   - Publish directory: `site`
5. Click "Save and deploy".

## Continuous Integration

You can extend the GitHub Actions workflow to include additional CI/CD steps:

- Running tests
- Checking links
- Validating Markdown
- Custom build steps

Add these steps to your `.github/workflows/deploy.yml` file.

## Further Resources

For more information on deployment:

- [MkDocs Deployment Guide](https://www.mkdocs.org/user-guide/deploying-your-docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [ReadTheDocs Documentation](https://docs.readthedocs.io/)