import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleableElementTwo"]
  fire(event) {
    event.preventDefault();
    console.log("fire business_controller")

    this.toggleableElementTwoTarget.classList.toggle("d-none")
  }
}
