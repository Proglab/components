---
sidebar_position: 1
---
# Proglab/Components

## Introduction

Some twig components in the style of atomic design

## Install

Install with composer

```bash
  composer require Proglab\Components
```

:::info What you'll need
**Client:** Bootstrap 5, Stimulus

**Server:** Symfony 6.3, Symfony UX Twig components 2.6, Symfony UX Live components 2.8
:::


## How to overide any templates ?

- Create a `bundles/ProglabComponentsBundle/` directory in your template directory
- Copy/paste the original file (for exemple the `templates/components/atoms/button.html.twig` to your `templates/bundles/ProglabComponentsBundle/components/atoms/button.html.twig`)
- Update it with your own twig code

## How to overide any components ?

- Create a `src/Components/Button.php` file
- Extend from the Component of this bundle
- Update your `config/services.yaml`

```yaml
services:
  Proglab\Components\Components\Atoms\Button:
    class: App\Components\Button
    public: true
    autoconfigure: true
    autowire: true
```

:::success Well done
You can do what you need
:::