
# Proglab\Components

Des composants twig dans le style d'atomic design

## Installation

Install with composer

```bash
  composer require Proglab\Components
```

## Tech Stack

**Client:** Bootstrap 5, Stimulus

**Server:** Symfony 6.3, Symfony UX Twig components 2.6, Symfony UX Live components 2.8

## Documentation

https://proglab.github.io/components/

## How to update the docs ?

The doc is generated with docusaurus.

You must install npm dependencies

```batch
cd docs
npm install
```

Go to the **docs directory** and run the dev server :

```batch
cd docs
npx docusaurus start
```

After update it, run the site generator :


```batch
npx docusaurus build
```

and commit the updates.