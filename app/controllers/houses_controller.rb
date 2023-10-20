class HousesController < ApplicationController
  def new
    @house = House.new
  end

  # def create
  #   @house = House.new(house_params)
  #   if @house.save
  #     redirect_to house_path(@house)
  #   else
  #     render 'new'
  #   end
  # end
  def create
    @house = House.new(house_params)
    @house.save
    redirect_to house_path(@house)
  end

  def index
    @houses = House.all

    @markers = @houses.geocoded.map do |house|
      {
        lat: house.latitude,
        lng: house.longitude
      }
    end
  end

  # def show
  #   @house = find_house_or_redirect
  #   return unless @house

  #   return if handle_missing_image

  #   @markers = [{
  #     lng: @house.longitude,
  #     lat: @house.latitude,
  #     info_window_html: render_to_string(partial: "info_window", locals: { house: @house })
  #   }]

  # end

  def show
    @house = House.find(params[:id])
    handle_missing_image if @house.photo.blank?
    @markers = [{
      lng: @house.longitude,
      lat: @house.latitude,
      info_window_html: render_to_string(partial: "info_window", locals: { house: @house })
    }]
  end

  def edit
    @house = House.find(params[:id])
  end

  def update
    @house = House.find(params[:id])
    if @house.update(house_params)
      redirect_to house_path(@house)
    else
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
    params.require(:house).permit(
      :name,
      :address,
      :square_feet,
      :number_of_rooms,
      :number_of_bathrooms,
      :has_storm_shelter,
      :has_garage,
      :rental_amount,
      :has_gas,
      :is_occupied,
      :img_url,
      :photo,
      :longitude,
      :latitude
    )
  end

  def find_house_or_redirect
    House.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    flash[:error] = "House not found"
    redirect_to houses_path
    nil
  end

  def handle_missing_image
    return if @house.photo.attached?

    flash[:error] = "Image not found for this house."
    redirect_to houses_path
    true
  end
end
