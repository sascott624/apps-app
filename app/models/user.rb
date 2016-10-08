class User < ActiveRecord::Base
  # Include default devise modules. :confirmable,  :omniauthable, :trackable,
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :user_companies
  has_many :companies, through: :user_companies
  has_many :connections
  has_many :contacts, through: :connections
end
