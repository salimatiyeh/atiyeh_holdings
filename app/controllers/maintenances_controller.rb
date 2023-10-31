class MaintenancesController < ApplicationController
  before_action :set_house, only: %i[new create]

  def new
    # raise
    @maintenance = Maintenance.new
  end

  def create
    @maintenance = Maintenance.new(maintenance_params)
    @maintenance.house = @house
    # @maintenance.user = current_user
    if @maintenance.save
      redirect_to house_path(@house), notice: "Maintenance ticket was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # def index
  #   # Check if params[:house_id] is present and if it's a valid House ID
  #   if params[:house_id].present? && House.exists?(params[:house_id])
  #     # If the house_id is valid, find the house
  #     @house = House.find(params[:house_id])

  #     # Then, you can find all maintenances associated with that house
  #     @maintenances = @house.maintenances.all
  #   else
  #     flash[:error] = "House not found."
  #     render "errors/error", status: :not_found
  #   end
  # end



  # def show
  #   @maintenance = House.maintenance.find(params[:id])
  # end

  # def edit
  #   @maintenance = House.maintenance.find(params[:id])
  # end

  # def update
  #   @maintenance = House.maintenance.find(params[:id])
  #   if @maintenance.update
  # end

  private

  def set_house
    @house = House.find(params[:house_id])
  end

  def maintenance_params
    params.require(:maintenance).permit(
      :house_id,
      :user_id,
      :title,
      :description,
      :time_stamp,
      :created_at,
      :updated_at,
    )
  end
end
