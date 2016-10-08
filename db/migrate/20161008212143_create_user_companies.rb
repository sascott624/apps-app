class CreateUserCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :user_companies do |t|
      t.integer :user_id
      t.integer :company_id
    end
  end
end
