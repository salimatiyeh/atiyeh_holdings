module Api
  class HousesController  < ActionController::API
    def index
      @houses = House.all
      render json: @houses
    end
  
    def show
      @house = House.find(params[:id])
      render json: @house
    end

    def create
      @house = House.new(house_params)
      if @house.save
        render json: @house
      else
        render status: :unprocessable_entity
      end
    end

    def update
      @house = House.find(params[:id])
      if @house.update(house_params)
        render json: @house
      else
        render status: :unprocessable_entity
      end
    end

    def destroy
      @house = House.find(params[:id])
      if @house.destroy
        render json: @house
      else
        render status: :unprocessable_entity
      end
    end
  end
end
