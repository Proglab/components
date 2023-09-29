<?php
namespace Proglab\Components\Components\Atoms;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;
use Symfony\Component\OptionsResolver\OptionsResolver;

#[AsTwigComponent('proglab_button', template: '@ProglabComponents/components/atoms/button.html.twig')]
class Button
{
    public string $type;
    public ?String $size = null;
    public bool $disabled = false;
    public string $label;

    #[PreMount]
    public function preMount(array $data): array
    {
        $resolver = new OptionsResolver();
        $resolver->setDefaults(['type' => 'primary']);
        $resolver->setAllowedValues('type', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']);
        $resolver->setRequired('label');
        $resolver->setAllowedTypes('label', 'string');
        $resolver->isRequired('size');
        $resolver->setDefaults(['size' => null]);
        $resolver->setAllowedTypes('size', ['null', 'string']);
        $resolver->setAllowedValues('size', ['lg', 'sm', null]);
        $resolver->setDefaults(['disabled' => false]);
        $resolver->setAllowedTypes('disabled', 'bool');
        return $resolver->resolve($data);
    }
}