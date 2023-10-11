<?php

declare(strict_types=1);

namespace Proglab\Components\Components\Modal;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('proglab_modal', template: '@ProglabComponents/components/modal/modal.html.twig')]
class Modal
{
    public ?string $id = null;
}
