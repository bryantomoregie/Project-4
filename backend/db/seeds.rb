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


Shoe.create({model: "Air Jordan 1 Retro High OG 'Chicago' 2015", size: 10.5, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/008/488/063/original/14741_01.jpg.jpeg?1513115596", price: 263})
Shoe.create({model: "Air Jordan 1 Retro High OG 'Royal Toe'", size: 9, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/035/766/949/original/519961_01.jpg.jpeg?1587670167",  price: 250})
Shoe.create({model: "Air Jordan 1 High Zoom 'Racer Blue'", size: 12, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/033/820/127/original/575379_01.jpg.jpeg?1583558295", price: 270})
Shoe.create({model: "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'", size: 5, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/018/783/118/original/488879_01.jpg.jpeg?1550260861", price: 222})

Shoe.create({model: "KAWS x Air Jordan 4 Retro 'Black'", size: 9, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/009/543/608/original/178709_01.jpg.jpeg?1516942866", price: 458})
Shoe.create({model: "Travis Scott x Air Jordan 4 Retro 'Cactus Jack'", size: 9, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/012/478/528/original/365514_01.jpg.jpeg?1528250655", price: 458})
Shoe.create({model: "Air Jordan 4 Retro SE 'What The 4'", size: 10.5, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/028/286/211/original/503839_01.jpg.jpeg?1573502565", price: 195})
Shoe.create({model: "Air Jordan 4 Retro 'Cement' 2012", size: 13, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/028/286/211/original/503839_01.jpg.jpeg?1573502565", price: 340})


Shoe.create({model: "Air Max 90 'Hyper Royal'", size: 8, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/033/449/007/original/594611_01.jpg.jpeg?1582913987", price: 156})
Shoe.create({model: "Air Max 90 'City Pack - Tokyo'", size: 13, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/032/442/628/original/589983_01.jpg.jpeg?1581019227", price: 150})
Shoe.create({model: "OFF-WHITE x Air Max 90 'Desert Ore'", size: 8, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/017/794/463/original/394710_01.jpg.jpeg?1547236891", price: 600})
Shoe.create({model: "Air Max 97 QS 'Olympic Rings - Yellow'", size: 10, brand: "Nike", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/033/118/851/original/587677_01.jpg.jpeg?1582311298", price: 130})


Shoe.create({model: "Yeezy Boost 700 'Wave Runner'", size: 7, brand: "Adidas", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/014/507/858/original/195483_01.jpg.jpeg?1536271278", price: 189})
Shoe.create({model: "Yeezy Boost 700 'Mauve'", size: 9, brand: "Adidas", user_id: User.all.sample().id,  image: "https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/015/292/400/original/386481_01.jpg.jpeg?1539209010", price: 178})
Shoe.create({model: "Yeezy 500 High 'Tyrian'", size: 11, brand: "Adidas", user_id: User.all.sample().id, image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/036/948/554/original/626844_01.jpg.jpeg?1590087632", price: 270})
Shoe.create({model: "Yeezy Boost 700 MNVN 'Triple Black'", size: 8.5, brand: "Adidas", user_id: User.all.sample().id, image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/036/854/148/original/558032_01.jpg.jpeg?1589917938", price: 335})

Shoe.create({model: "Ben & Jerry's x Dunk Low SB 'Chunky Dunky'", size: 12, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/035/924/793/original/616017_01.jpg.jpeg?1588007195", price: 2000})
Shoe.create({model: "Dunk Low Pro SB 'Laser Orange'", size: 9, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/750/attachments/product_template_pictures/images/036/120/441/original/BQ6817_800.png.png", price: 240})
Shoe.create({model: "Dunk Low Retro SP 'St. John's'", size: 11.5, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/750/attachments/product_template_pictures/images/036/219/613/original/CU1727_100.png.png", price: 1000})
Shoe.create({model: "Dunk Low Pro SB 'Dark Russet'", size: 8.5, brand: "Nike", user_id: User.all.sample().id, image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/025/315/728/original/531551_01.jpg.jpeg?1567044095", price: 270})


10.times do
Transaction.create({user_id: User.all.sample().id, shoe_id: Shoe.all.sample().id })
end


