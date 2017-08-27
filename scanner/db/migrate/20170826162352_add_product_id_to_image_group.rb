class AddProductIdToImageGroup < ActiveRecord::Migration
  def change
    add_column :image_groups, :product_id, :integer
  end
end
