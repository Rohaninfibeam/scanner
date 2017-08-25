class Product < ActiveRecord::Base
	has_one :image_group
	has_many :properties, through: :productproperties
	has_one :inventory
end
