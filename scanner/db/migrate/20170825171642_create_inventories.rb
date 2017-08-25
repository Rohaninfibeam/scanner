class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.integer :available
      t.integer :sold_out

      t.timestamps null: false
    end
  end
end
