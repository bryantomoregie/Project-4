class CreateTransactionTable < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.integer :shoe_id
    end
  end
end
