# My Personal Web Page

This repository contains the source codes of my personal web page. Available as open source subject to license terms. Please contribute to fix bugs and improve the application.


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

## Octokit Usage

I used the Octokit package as public. If you are going to use it with auth, please copy the .env.example file as .env and assign your access token value to the VITE_GITHUB_ACCESS_TOKEN key.

```bash
cp .env.example .env
```


## Dependencies

| **Package**        | **Version** |
|--------------------|-------------|
| contrast           | 1.0.1       |
| github-lang-colors | 1.0.4       |
| octokit            | 2.0.3       |
| gh-pages           | 4.0.0       |



## TODOS

- [ ] Add a 404 page.
- [ ] Add download resume button.
- [ ] Add a contact section.
- [ ] Update the useStorage hook to run time dependent.
- [ ] Fix responsive design issues.
- [ ] Setting up purge css package.

## License
The MIT License (MIT). Please see [License File](https://github.com/aytacmalkoc/aytacmalkoc.github.io/blob/main/LICENSE.md) for more information.