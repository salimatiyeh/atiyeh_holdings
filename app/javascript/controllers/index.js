// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)


// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
// import address_autocomplete_controller from "./address_autocomplete_controller"
// application.register("address-autocomplete", address_autocomplete_controller)

// import map_controller from "./map_controller"
// application.register("map", map_controller)

// import hello_controller from "./hello_controller"
// application.register("hello", hello_controller)
