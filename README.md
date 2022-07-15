# My Personal Web Page

This repository contains the source codes of my personal web page. Available as open source subject to license terms. Please contribute to fix bugs and improve the application.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/aytacmalkoc)


## Installation


```bash
npm install
```

### Run Application


```bash
npm run dev
```

### Build Application
    
```bash
npm run build
```

## Deployment

I am getting an error Could not resolve './Layout' from src/components/index.jsx during deployment with Github workflows. You can open a pull request for a solution.

You can follow the steps below to deploy manually.
    
```bash
npm run deploy
```
## Formatting

### 📝 Lint

```bash
yarn lint
```

### 👀 Watch changes

```bash
yarn prettier-watch
```

### ✒️ Format Document

```bash
yarn prettier-format
```


## Octokit Usage

I used the Octokit package as public. If you are going to use it with auth, please copy the .env.example file as .env and assign your access token value to the VITE_GITHUB_ACCESS_TOKEN key.

```bash
cp .env.example .env
```

## Dependencies

| **Package**                     | **Version** |
|---------------------------------|-------------|
| contrast                        | 1.0.1       |
| github-lang-colors              | 1.0.4       |
| octokit                         | 2.0.3       |
| gh-pages                        | 4.0.0       |
| @aytacmallkoc/react-use-storage | 1.0.4       |
| react-ga                        | 3.3.1       |
| vite-plugin-html-purgecss       | 0.1.1       |


## TODOS

- [x] Add Google Analytics.
- [ ] Add a 404 page.
- [x] Add download resume button.
- [ ] Add a contact section.
- [ ] Update the useStorage hook to run time dependent.
- [ ] Fix responsive design issues.
- [ ] Setting up purge css package.

## License
The MIT License (MIT). Please see [License File](https://github.com/aytacmalkoc/aytacmalkoc.github.io/blob/main/LICENSE.md) for more information.