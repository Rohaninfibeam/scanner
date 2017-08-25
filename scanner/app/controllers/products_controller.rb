class ProductsController < ApplicationController
  def new
  	@product = Product.new
  end

  def create
  	Product.new
  end

  def show
  	@product = Product.find_by_upc(params[:upc])
  end
end
