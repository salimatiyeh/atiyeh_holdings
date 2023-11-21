module Api
  class TestController < ActionController::API
    def index
      response = {
        test: true,
        message: "Hello from ruby"
      }
      render json: response
    end
  end
end
