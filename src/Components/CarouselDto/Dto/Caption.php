<?php

namespace Proglab\Components\Components\CarouselDto\Dto;

use Symfony\Component\Config\Definition\Exception\InvalidTypeException;

class Caption
{
    public function __construct(public ?string $title = null, public ?string $text = null)
    {
    }

    public static function createFrom(array|object $data)
    {
        if (is_array($data)) {
            return new self($data['title'] ?? null, $data['text'] ?? null);
        }

        if (is_object($data)) {
            return new self($data->title ?? null, $data->text ?? null);
        }

        throw new InvalidTypeException('you must pass an object or an array');
    }
}