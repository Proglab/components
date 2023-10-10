<?php

namespace Proglab\Components\Service;

use Proglab\Components\Dto\Carousel\Image;

abstract class CarouselServiceAbstract
{
    /**
     * @return Image[]
     */
    abstract public function findAll(): array;
}