define("ghost/config", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function configureApp(App) {
        if (!App instanceof Ember.Application) {
            return;
        }

        App.reopen({
            LOG_ACTIVE_GENERATION: true,
            LOG_MODULE_RESOLVER: true,
            LOG_TRANSITIONS: true,
            LOG_TRANSITIONS_INTERNAL: true,
            LOG_VIEW_LOOKUPS: true
        });
    }

    __exports__["default"] = configureApp;
  });