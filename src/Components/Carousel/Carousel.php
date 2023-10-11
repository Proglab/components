<?php

declare(strict_types=1);

namespace Proglab\Components\Components\Carousel;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;

#[AsTwigComponent('proglab_carousel', template: '@ProglabComponents/components/carousel/carousel.html.twig')]
class Carousel
{
    public ?string $id;
    public array $images;
    public bool $with_controls = false;
    public string $control_next = 'Next';
    public string $control_previous = 'Previous';
    public bool $with_indicators = false;
    public bool $fade = false;
    public bool $dark = false;

    #[PreMount]
    public function preMount(array $data): array
    {
        if (!isset($data['id']) || empty($data['id'])) {
            $data['id'] = $this->random_string(20);
        }

        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $data = $resolver->resolve($data);

        if ($data['dark']) {
            $data['class'] .= ' carousel-dark';
        }

        if ($data['fade']) {
            $data['class'] .= ' carousel-fade';
        }

        $data['class'] = trim($data['class']);

        return $data;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['id' => null, 'class' => null, 'images' => [], 'with_controls' => false, 'with_indicators' => false, 'control_next' => 'Next', 'control_previous' => 'Previous', 'fade' => false, 'dark' => false]);
        $resolver->setRequired(['images']);

        $resolver->setAllowedTypes('images', 'array');
        $resolver->setAllowedTypes('with_controls', 'bool');
        $resolver->setAllowedTypes('with_indicators', 'bool');
        $resolver->setAllowedTypes('fade', 'bool');
        $resolver->setAllowedTypes('dark', 'bool');
        $resolver->setAllowedTypes('control_next', ['null', 'string']);
        $resolver->setAllowedTypes('control_previous', ['null', 'string']);
        $resolver->setAllowedTypes('class', ['null', 'string']);
        $resolver->setAllowedTypes('id', ['null', 'string']);
    }

    protected function random_string(int $length): string
    {
        $key = '';
        $keys = array_merge(range('A', 'Z'), range('a', 'z'));

        for ($i = 0; $i < $length; ++$i) {
            $key .= $keys[array_rand($keys)];
        }

        return $key;
    }
}
