class CreateEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :emails do |t|
      t.datetime :date
      t.string :notes
    end
  end
end
