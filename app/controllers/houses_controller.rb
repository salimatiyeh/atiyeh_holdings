class HousesController < ApplicationController
  def new
    @house = House.new
  end

  def create
    @house = House.new(house_params)
    if @house.save
      redirect_to house_path(@house)
    else
      render 'new'
    end
  end

  def index
    @houses = House.all
  end

  def show
    @house = House.find(params[:id])
  end

  private

  def house_params
    params.require(:house).permit(:name, :address, :square_feet, :number_of_rooms, :number_of_bathrooms, :has_storm_shelter, :has_garage, :rental_amount, :has_gas, :is_occupied, :img_url)
  end
end
