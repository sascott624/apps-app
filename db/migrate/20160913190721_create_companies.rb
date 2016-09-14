class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :url
      t.string :description
      t.string :location
    end
  end
end
