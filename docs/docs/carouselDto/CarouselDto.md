## Description

A simple carousel

![Breadcrumb](images/carousel.jpg)

```twig
{{ component('proglab_carousel', {
    id: 'carousel1',
    with_controls: true,
    control_next: 'Next',
    control_previous: 'Previous',
    with_indicators: true,
    fade: true,
    dark: false
}) }}
```

## How to use

create a proglab_components.yaml in your `config/packages` directory

```yml
services:
  Proglab\Components\Service\CarouselServiceAbstract:
    class: App\Service\CarouselService
    public: true
    autoconfigure: true
    autowire: true
```

create a class in `src/Service/CarouselService.php`

```php
namespace App\Service;

use Proglab\Components\Dto\Carousel\Caption;
use Proglab\Components\Dto\Carousel\Image;
use Proglab\Components\Service\CarouselServiceAbstract;

class CarouselService extends CarouselServiceAbstract
{

    /**
     * @return Image[]
     */
    public function findAll(): array
    {
        ...
    }
}
```

this function must return a array of `Proglab\Components\Dto\Carousel\Image`

## Parameters
### General

| Parameter          | Type      | Description            | Default Values |
|--------------------|-----------|------------------------|----------------|
| `id`               | `string`  | The id of the carousel | null           |
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
{{ component('proglab_carousel_dto') }}
```