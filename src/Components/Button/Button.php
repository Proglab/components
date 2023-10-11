<?php

declare(strict_types=1);

namespace Proglab\Components\Components\Button;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;

#[AsTwigComponent('proglab_button', template: '@ProglabComponents/components/button/button.html.twig')]
class Button
{
    public string $style;
    public ?String $size = null;
    public bool $disabled = false;
    public string $label;
    public ?string $icon_before;
    public ?string $icon_after;

    #[PreMount]
    public function preMount(array $data): array
    {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $data = $resolver->resolve($data);

        if (!isset($data['class'])) {
            $data['class'] = '';
        }

        if (!empty($data['style'])) {
            $data['class'] .= ' btn-' . $data['style'];
        } else {
            $data['class'] .= ' btn-primary';
        }

        if (!empty($data['size'])) {
            $data['class'] .= ' btn-' . $data['size'];
        }

        $data['class'] = trim($data['class']);

        return $data;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['style' => 'primary', 'size' => null, 'disabled' => false, 'type' => 'button', 'class' => null, 'icon_before' => null, 'icon_after' => null]);
        $resolver->setRequired(['label', 'type']);

        $resolver->setAllowedTypes('label', 'string');
        $resolver->setAllowedTypes('type', 'string');
        $resolver->setAllowedTypes('size', ['null', 'string']);
        $resolver->setAllowedTypes('disabled', 'bool');
        $resolver->setAllowedTypes('icon_before', ['null', 'string']);
        $resolver->setAllowedTypes('icon_after', ['null', 'string']);

        $resolver->setAllowedValues('size', ['lg', 'sm', null]);
        $resolver->setAllowedValues('style', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']);
        $resolver->setAllowedValues('type', ['button', 'submit', 'reset']);
    }
}
