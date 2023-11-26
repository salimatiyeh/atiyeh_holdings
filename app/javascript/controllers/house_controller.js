import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleableElement"]
  fire(event) {
    event.preventDefault();
    console.log("fire house_controller")
    this.toggleableElementTarget.classList.toggle("d-none")
  }
}
