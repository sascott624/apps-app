class Company < ApplicationRecord

  has_many :employees, foreign_key: "company_id", class_name: "Contact"

end
