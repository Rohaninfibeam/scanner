class ImageGroup < ActiveRecord::Base
	has_many :product
	has_many :images, dependent: :destroy
	accepts_nested_attributes_for :images
end
