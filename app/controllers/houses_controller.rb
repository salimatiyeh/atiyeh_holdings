class HousesController < ApplicationController

  def new
    @house = House.new
  end

end
