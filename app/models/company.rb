class Company < ApplicationRecord
  has_many :user_companies
  has_many :users, through: :user_companies
  has_many :employees, foreign_key: "company_id", class_name: "Contact"

end
