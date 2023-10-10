<?php

namespace Proglab\Components\Dto\Carousel;

class Image
{
    public string $url;
    public ?string $alt = null;
    public ?int $interval;
    public ?Caption $caption;
}