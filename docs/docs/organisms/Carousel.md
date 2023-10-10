## Description

A simple carousel

![Breadcrumb](./images/carousel.jpg)

```twig
{{ component('proglab_carousel', {
    id: 'carousel1',
    images: [
        {url: 'https://picsum.photos/id/1/200/300', alt: 'image 1', caption: {title: 'This is a carousel', text: 'ceci est un texte'}},
        {url: 'https://picsum.photos/id/2/200/300', alt: 'image 2', interval:3000}
    ],
    with_controls: true,
    control_next: 'Next',
    control_previous: 'Previous',
    with_indicators: true,
    fade: true,
    dark: false
}) }}
```
## Parameters
### General

| Parameter          | Type      | Description            | Default Values |
|--------------------|-----------|------------------------|----------------|
| `id`               | `string`  | **Required**           | null           |
| `images`           | `array`   | Images (see next)      | null           |
| `with_controls`    | `bool`    | See controls           | false          |
| `control_next`     | `?string` | The label for next     | 'Next'         |
| `control_previous` | `?string` | The label for previous | 'Previous'     |
| `with_indicators`  | `bool`    | See indicators         | false          |
| `fade`             | `bool`    | Fade effect            | false          |
| `dark`             | `bool`    | Controls in dark mode  | false          |

### Images

| Parameter  | Type      | Description                  | Default Values |
|------------|-----------|:-----------------------------|----------------|
| `url`      | `string`  | **Required**                 | null           |
| `alt`      | `string`  | The image alternative        | null           |
| `caption`  | `array`   | The image caption (see next) | null           |
| `interval` | `?string` | The image slide interval     | null           |

### Caption

| Parameter | Type     | Description              | Default Values |
|-----------|----------|:-------------------------|----------------|
| `title`   | `string` | The title of the caption | null           |
| `text`    | `string` | The text of the caption  | null           |


## Usage/Examples

```twig
{{ component('proglab_carousel', {
    id: 'carousel1',
    images: [
        {url: 'https://picsum.photos/id/1/200/300', alt: 'image 1'},
        {url: 'https://picsum.photos/id/2/200/300', alt: 'image 2'}
    ],
}) }}
```