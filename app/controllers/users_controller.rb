class UsersController < ApplicationController

  before_action find_user, only: [:show, :update, :edit, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    end
  end

  def new
    @user = User.new
  end

  def show
    render json: @user
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user
    end
  end

  def destroy
    @user.destroy
  end

  def edit
  end

  private

  def find_user
    @user = User.find_by(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
