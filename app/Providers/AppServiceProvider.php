<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Model;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        JsonResource::withoutWrapping();
        // Model::handleLazyLoadingViolationUsing(function (Model $model, string $relation) {
        //     $class = get_class($model);
         
        //     info("Attempted to lazy load [{$relation}] on model [{$class}].");
        // });
        
        
        Model::preventLazyLoading(! $this->app->isProduction());
    }
}
