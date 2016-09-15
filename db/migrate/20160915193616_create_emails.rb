class CreateEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :emails do |t|
      t.datetime :date
      t.string :notes
      t.string :connection_id
    end
  end
end
