class ImageGroupsController < ApplicationController
  def new
  	@imagegroup = ImageGroup.new
  	@image = @imagegroup.images.new
  end

  def create
  	imagegroup = ImageGroup.new(image_group_params)
  	imagegroup.save!
  end

  private
   def image_group_params
   		params.require(:image_group).permit(:name,images_attributes: [:avatar])
   end
end
