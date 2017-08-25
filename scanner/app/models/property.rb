class Property < ActiveRecord::Base
	has_many :products, through: :productproperties
end
