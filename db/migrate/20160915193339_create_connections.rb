class CreateConnections < ActiveRecord::Migration[5.0]
  def change
    create_table :connections do |t|
      t.string :notes
      t.integer :user_id
      t.integer :contact_id
    end
  end
end
