class Image < ActiveRecord::Base
	dragonfly_accessor :avatar
	belongs_to :image_group
end
