class CreateShoeTable < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string :model
      t.float :size
      t.string :brand
      t.float :price
      t.string :image
      t.integer :user_id
    end
  end
end
