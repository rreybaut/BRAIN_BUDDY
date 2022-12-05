# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Listelement.destroy_all
List.destroy_all
Vocal.destroy_all
Nft.destroy_all
Localisation.destroy_all
User.destroy_all

karine = User.create!(email: "karine.egler@gmail.com", password:"123456", prenom: "Karine", nom: "Egler", emergency_number: "0641317239")
valeria = User.create!(email: "valerianpallas@gmail.com", password:"123456", prenom: "Valeria", nom: "Pallas", emergency_number: "0754536825")
raphael = User.create!(email: "rreybaut@gmail.com", password:"123456", prenom: "Raphael", nom: "Reybaut", emergency_number: "0621888582" )

Localisation.create!(user_id: karine.id, address: "55 Av Borriglione, Nice", longitude: 7.261375, latitude: 43.7163432)
Localisation.create!(user_id: valeria.id, address: "20 bd Gambetta, Nice", longitude: 7.2561841, latitude: 43.7025862)
Localisation.create!(user_id: raphael.id, address: "25 Av Jean Medecin, Nice", longitude: 7.2672797, latitude: 43.7013388)
Localisation.create!(user_id: karine.id, address: "300 Av du General De Gaulle, Saint Laurent du Var", longitude: 7.1917881, latitude:43.6687945 )
Localisation.create!(user_id: karine.id, address: "10 rue de Rome, Marseille", longitude: 5.3785415 , latitude: 43.2950062)
Localisation.create!(user_id: karine.id, address: "18 rue Bonaparte, Nice", longitude: 7.2672797, latitude: 43.7013388)
Localisation.create!(user_id: karine.id, address: "19 rue Hoche, Cannes", longitude:0.0 , latitude: nil)

Nft.create!(user_id: valeria.id, photo: "dalmatian.jpg")
