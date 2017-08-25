class AddImageGroupIdToImage < ActiveRecord::Migration
  def change
    add_column :images, :image_group_id, :integer
  end
end
