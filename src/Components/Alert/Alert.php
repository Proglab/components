<?php

declare(strict_types=1);

namespace Proglab\Components\Components\Alert;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;

#[AsTwigComponent('proglab_alert', template: '@ProglabComponents/components/alert/alert.html.twig')]
class Alert
{
    public string $style;
    public string $text;
    public bool $dismissable = false;

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
            $data['class'] .= ' alert-' . $data['style'];
        } else {
            $data['class'] .= ' alert-primary';
        }

        if ($data['dismissable']) {
            $data['class'] .= ' alert-dismissible fade show';
        }

        $data['class'] = trim($data['class']);

        return $data;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['style' => 'primary', 'class' => null, 'text' => null, 'dismissing' => false]);
        $resolver->setRequired(['text']);

        $resolver->setAllowedTypes('text', 'string');
        $resolver->setAllowedTypes('style', 'string');
        $resolver->setAllowedTypes('dismissing', 'bool');

        $resolver->setAllowedValues('style', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']);
    }
}
