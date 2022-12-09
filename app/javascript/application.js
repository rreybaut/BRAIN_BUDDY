// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

import { syntheseVocal } from "./components/synthese_vocal";
import { commandeVocal } from "./components/commande_vocal";
import { soundRecord } from "./components/sound_record";
import { socialButtons } from "./components/social_buttons";

document.addEventListener("turbolinks:load", function () {
  soundRecord()
  commandeVocal()
  syntheseVocal()
  socialButtons()
});
