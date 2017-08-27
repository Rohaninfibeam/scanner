class CartsController < ApplicationController
  def new
  end

  def create
  end

  def update
  	@cart = Cart.find(cookies[:cart_id]);
  	@cart.cart_items.create(cart_items_params)
  end

  def addcart
  	@cart = Cart.find(cookies[:cart_id]);
  	@cart.cart_items.new(cart_items_params)
  end

  private

  def cart_items_params
  	params.require(:cart).pernit(:product_id,:quantity);
  end
end
