<?php
namespace Proglab\Components\Components\Molecules;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;
use Symfony\Component\OptionsResolver\OptionsResolver;

#[AsTwigComponent('proglab_alert', template: '@ProglabComponents/components/molecules/alert.html.twig')]
class Alert
{
    public string $style;
    public string $text;
    public bool $dismissing = false;

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
            $data['class'] .= ' alert-'.$data['style'];
        } else {
            $data['class'] .= ' alert-primary';
        }

        if ($data['dismissing']) {
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