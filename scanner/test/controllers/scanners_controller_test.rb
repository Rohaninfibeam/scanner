require 'test_helper'

class ScannersControllerTest < ActionController::TestCase
  test "should get findproduct" do
    get :findproduct
    assert_response :success
  end

end
