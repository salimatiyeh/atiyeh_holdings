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
    # @house = House.find(params[:id])
    begin
      @house = House.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      flash[:error] = "House not found"
      redirect_to houses_path # Redirect to the index page or handle it as per your needs
    end
  end

  def edit
    @house = House.find(params[:id])
  end

  def update
    @house = House.find(params[:id])
    if @house.update(house_params)
      redirect_to house_path(@house)
    else
      # Handle validation errors or other issues
      render 'edit'
    end
  end

  def destroy
    @house = House.find(params[:id])
    if @house.destroy
      redirect_to root_path
    else
      render 'show'
    end
  end

  private

  def house_params
    params.require(:house).permit(:name, :address, :square_feet, :number_of_rooms, :number_of_bathrooms, :has_storm_shelter, :has_garage, :rental_amount, :has_gas, :is_occupied, :img_url)
  end
end
