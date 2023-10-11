<?php

declare(strict_types=1);

namespace Proglab\Components\Components\CarouselDto\Dto;

class Caption
{
    public function __construct(public ?string $title = null, public ?string $text = null)
    {
    }

    public static function createFrom(array|object $data): self
    {
        if (\is_array($data)) {
            return new self($data['title'] ?? null, $data['text'] ?? null);
        }

        if (\is_object($data)) {
            return new self($data->title ?? null, $data->text ?? null);
        }
    }
}
