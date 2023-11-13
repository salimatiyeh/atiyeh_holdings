class MaintenancesController < ApplicationController
  before_action :set_house, only: %i[new create]

  def new
    @maintenance = Maintenance.new
  end

  def create
    @maintenance = Maintenance.new(maintenance_params)
    # @house = House.find(params[:house_id])
    @maintenance.house = @house
    # @maintenance.user = current_user
    if @maintenance.save
      redirect_to house_path(@house), notice: "Maintenance ticket was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def index
    if params[:house_id].present? && House.exists?(params[:house_id])
      house = House.find(params[:house_id])
      @maintenances = house.maintenances
    else
      flash[:error] = "House not found."
      render "errors/error", status: :not_found
    end
  end

  def show
    @maintenance = Maintenance.find(params[:id])
    @house = @maintenance.house
  end

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
      photos: []
    )
  end
end
