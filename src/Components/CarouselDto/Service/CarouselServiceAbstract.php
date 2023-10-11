<?php

declare(strict_types=1);

namespace Proglab\Components\Components\CarouselDto\Service;

use Proglab\Components\Components\CarouselDto\Dto\Image;

abstract class CarouselServiceAbstract
{
    /**
     * @return Image[]
     */
    abstract public function findAll(): array;
}
