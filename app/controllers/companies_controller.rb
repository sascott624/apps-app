class CompaniesController < ApplicationController

  before_action :find_company, only: [:show, :update, :edit, :destroy]

  def index
    @companies = Company.all
    render json: @companies
  end

  def create
    @company = Company.new(company_params)
    if @company.save
      render json: @company
    end
  end

  def new
    @company = Company.new
  end

  def show
    render json: @company
  end

  def update
    @company.update(company_params)
    if @company.save
      render json: @company
    end
  end

  def destroy
    @company.destroy
  end

  def edit
  end

  private

  def find_company
    @company = Company.find_by(params[:id])
  end

  def company_params
    params.require(:company).permit(:name, :url, :description, :location)
  end

end
