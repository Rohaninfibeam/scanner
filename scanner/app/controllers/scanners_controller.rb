class ScannersController < ApplicationController
  def findproduct
  	if(!cookies[:cart_id])
  		@cart = Cart.create
  		cookies[:cart_id] = @cart.id
  	end
  end
end
