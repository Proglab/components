<?php

declare(strict_types=1);

namespace Proglab\Components\Components\Molecules;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;

#[AsTwigComponent('proglab_breadcrumb', template: '@ProglabComponents/components/molecules/breadcrumb.html.twig')]
final class Breadcrumb
{
    public ?array $pages = null;
    public ?string $homepageUrl = null;
    public string $homepageLabel = 'Homepage';


    #[PreMount]
    public function preMount(array $data): array
    {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        return $resolver->resolve($data);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['pages' => null, 'homepageUrl' => null, 'homepageLabel' => 'Homepage']);

        $resolver->setAllowedTypes('pages', ['null', 'array']);
        $resolver->setAllowedTypes('homepageUrl', ['null', 'string']);
        $resolver->setAllowedTypes('homepageLabel', ['null', 'string']);
    }
}
