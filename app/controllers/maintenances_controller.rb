class MaintenancesController < ApplicationController
  def new
    @maintenance = Maintenance.new
  end

  def create
    @maintenance = Maintenance.new(maintenance_params)
    if @maintenance.save
      redirect_to house_path(@maintenance.house), notice: "Maintenance ticket was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # def index
  #   @maintenance = House.maintenance.all
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

  def maintenance_params
    params.require(:maintenance).permit(:house_id, :user_id, :title, :description, :time_stamp, :created_at, :updated_at)
  end
end
