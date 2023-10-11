<?php

declare(strict_types=1);

namespace Proglab\Components\Components\CarouselDto\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class Image
{
    #[Assert\NotBlank]
    public string $url;

    public function __construct(string $url, public ?string $alt = null, public ?int $interval = null, public ?Caption $caption = null)
    {
        $this->url = $url;
    }

    public static function createFrom(array|object $data): self
    {
        if (\is_array($data)) {
            return new self($data['url'], $data['alt'] ?? null, $data['interval'] ?? null, $data['caption'] ?? null);
        }

        if (\is_object($data)) {
            return new self($data->url, $data->alt ?? null, $data->interval ?? null, $data->caption ?? null);
        }
    }
}
