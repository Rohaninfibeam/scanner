class Product < ActiveRecord::Base
	has_one :image_group
	has_many :properties, through: :productproperties
	has_one :inventory
	def available_stock
		inventory = Inventory.find(inventory_id)
		inventory.available - inventory.sold_out
	end
end
