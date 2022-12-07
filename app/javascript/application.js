// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import { soundRecord } from "./components/sound_record";
// soundRecord()
import { syntheseVocal } from "./components/synthese_vocal";
syntheseVocal()
