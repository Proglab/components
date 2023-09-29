<?php
namespace Proglab\Components\Components\Atoms;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;
use Symfony\Component\OptionsResolver\OptionsResolver;

#[AsTwigComponent('proglab_button', template: '@ProglabComponents/components/atoms/button.html.twig')]
class Button
{
    public string $style;
    public ?String $size = null;
    public bool $disabled = false;
    public string $label;

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
            $data['class'] .= ' btn-'.$data['style'];
        } else {
            $data['class'] .= ' btn-primary';
        }

        if (!empty($data['size'])) {
            $data['class'] .= ' btn-'.$data['size'];
        }

        $data['class'] = trim($data['class']);
        return $data;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['style' => 'primary', 'size' => null, 'disabled' => false, 'type' => 'button', 'class' => null]);
        $resolver->setRequired(['label', 'type']);

        $resolver->setAllowedTypes('label', 'string');
        $resolver->setAllowedTypes('type', 'string');
        $resolver->setAllowedTypes('size', ['null', 'string']);
        $resolver->setAllowedTypes('disabled', 'bool');

        $resolver->setAllowedValues('size', ['lg', 'sm', null]);
        $resolver->setAllowedValues('style', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']);
    }
}