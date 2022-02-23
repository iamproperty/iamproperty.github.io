<?php

namespace IAMProperty\iamkey;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    private const VIEW_PATH = __DIR__ . '/../resources/views';

    public function boot(): void
    {
        $this->loadViewsFrom(self::VIEW_PATH, 'iamkey');

        $this->publishes([
            self::VIEW_PATH => resource_path('views/vendor/iamkey'),
        ], 'views');
    }
}
?>