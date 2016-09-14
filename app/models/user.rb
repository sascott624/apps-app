class User < ActiveRecord::Base
  # Include default devise modules. :confirmable,  :omniauthable, :trackable,
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
