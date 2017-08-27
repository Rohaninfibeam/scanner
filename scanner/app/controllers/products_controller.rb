class ProductsController < ApplicationController
  def new
  	@product = Product.new
  	@inventory_ids = Inventory.all.map{|inv| [inv.id,inv.id]}
  	@image_ids = ImageGroup.all.map{|img| [img.name,img.id]}
  end

  def create
  	@product = Product.new(product_params)
  	@product.save!
  end

  def show
  	@product = Product.find_by_upc(params[:upc])
  end

  def scanner
  	puts params[:upc]
  	@product = Product.find_by_upc(params[:upc])
    @cart = Cart.find(cookies[:cart_id])
    @cart.cart_items.new
  	puts @product
  	respond_to do |format|
  		format.js
  	end
  end

  private

  def product_params
  	params.require(:product).permit(:name,:upc,:description,:price,:image_group_id,:inventory_id)
  end
end
