<?php
namespace Proglab\Components\Components\Organisms;

use Proglab\Components\Service\CarouselServiceAbstract;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PreMount;
use Symfony\Component\OptionsResolver\OptionsResolver;

#[AsTwigComponent('proglab_carousel_dto', template: '@ProglabComponents/components/organisms/carousel_dto.html.twig')]
class CarouselDto
{
    public ?string $id;
    public bool $with_controls = false;
    public string $control_next = 'Next';
    public string $control_previous = 'Previous';
    public bool $with_indicators = false;
    public bool $fade = false;
    public bool $dark = false;


    public function __construct(protected CarouselServiceAbstract $carouselService)
    {}


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
        $resolver->setDefaults(['id' => null, 'class' => null, 'with_controls' => false, 'with_indicators' => false, 'control_next' => 'Next', 'control_previous' => 'Previous', 'fade' => false, 'dark' => false]);
        $resolver->setAllowedTypes('with_controls', 'bool');
        $resolver->setAllowedTypes('with_indicators', 'bool');
        $resolver->setAllowedTypes('fade', 'bool');
        $resolver->setAllowedTypes('dark', 'bool');
        $resolver->setAllowedTypes('control_next', ['null', 'string']);
        $resolver->setAllowedTypes('control_previous', ['null', 'string']);
        $resolver->setAllowedTypes('class', ['null', 'string']);
        $resolver->setAllowedTypes('id', ['null', 'string']);
    }

    protected function random_string($length)
    {
        $key = '';
        $keys = array_merge(range('A', 'Z'), range('a', 'z'));

        for ($i = 0; $i < $length; $i++) {
            $key .= $keys[array_rand($keys)];
        }

        return $key;
    }

    public function getImages(): array
    {
        return $this->carouselService->findAll();
    }
}