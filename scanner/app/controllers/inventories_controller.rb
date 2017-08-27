class InventoriesController < ApplicationController
  def new
  	@inventory = Inventory.new
  end

  def create
  	@inventory =Inventory.new(inventory_params)
  	@inventory.save!
  end

  private

  def inventory_params
  	params.require(:inventory).permit(:available,:sold_out)
  end
end
