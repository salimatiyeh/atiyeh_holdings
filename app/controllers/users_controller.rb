class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.save
    redirect_to house_path
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :photo, :encrypted_password)
  end
end
