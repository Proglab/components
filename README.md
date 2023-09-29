
# Proglab\Components

Des composants twig dans le style d'atomic design

## Installation

Install with composer

```bash
  composer require Proglab\Components
```

## Documentation

### Atomics

#### Button

```twig
  {{ component('proglab_button', {
          type: 'success',
          label: 'Ceci est un bouton 3'
      }) 
  }}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | **Required**.<br> **Accepted Values** : 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link' |
| `label` | `string` | **Required**.|
| `size` | `?string` | **Accepted Values** : 'sm', 'gd', null |
| `disabled` | `bool` | **Accepted Values** : true, false |


## Usage/Examples

```twig
  {{ component('proglab_button', {
          type: 'success',
          label: 'Ceci est un bouton 3',
          disabeld: true,
          size: 'lg'
      }) 
  }}
```

## How to overide any templates :

- Create a `bundles/ProglabComponentsBundle/` directory in your template directory
- Copy/paste the original file (for exemple the `templates/components/atoms/button.html.twig` to your `templates/bundles/ProglabComponentsBundle/components/atoms/button.html.twig`)
- Update it with your own twig code