# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all


User.create!(email: "karine.egler@gmail.com", password:"123456", prenom: "Karine", nom: "Egler", emergency_number: "0641317239")
User.create!(email: "valerianpallas@gmail.com", password:"123456", prenom: "Valeria", nom: "Pallas",  emergency_number: "0754536825")
User.create!(email: "rreybaut@gmail.com", password:"123456", prenom: "Raphael", nom: "Reybaut",  emergency_number: "0621888582" )
