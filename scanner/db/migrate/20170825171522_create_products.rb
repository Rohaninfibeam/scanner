class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.string :description
      t.integer :image_group_id
      t.integer :inventory_id

      t.timestamps null: false
    end
  end
end
