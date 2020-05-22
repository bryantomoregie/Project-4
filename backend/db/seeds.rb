# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Shoe.destroy_all
Transaction.destroy_all
User.destroy_all 



10.times do
User.create({first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "testpassword" })
end


Shoe.create({model: "Air Jordan 1", size: 10.5, brand: "Nike", user_id: User.all.sample().id, image: "http://tiny.cc/odhipz", price: 263})
Shoe.create({model: "Air Jordan 1", size: 9, brand: "Nike", user_id: User.all.sample().id, image: "http://tiny.cc/odhipz",  price: 250})
Shoe.create({model: "Air Jordan 1", size: 12, brand: "Nike", user_id: User.all.sample().id, image: "http://tiny.cc/odhipz", price: 270})
Shoe.create({model: "Air Jordan 1", size: 5, brand: "Nike", user_id: User.all.sample().id,  image: "http://tiny.cc/odhipz", price: 222})

Shoe.create({model: "Air Max 1", size: 8, brand: "Nike", user_id: User.all.sample().id,  image: "http://tiny.cc/odhipz", price: 156})
Shoe.create({model: "Air Max 1", size: 13, brand: "Nike", user_id: User.all.sample().id,  image: "http://tiny.cc/odhipz", price: 150})

Shoe.create({model: "Yeezy 350's", size: 7, brand: "Adidas", user_id: User.all.sample().id,  image: "http://tiny.cc/odhipz", price: 189})
Shoe.create({model: "Yeezy 350's", size: 9, brand: "Adidas", user_id: User.all.sample().id,  image: "http://tiny.cc/odhipz", price: 178})

10.times do
Transaction.create({user_id: User.all.sample().id, shoe_id: Shoe.all.sample().id })
end


