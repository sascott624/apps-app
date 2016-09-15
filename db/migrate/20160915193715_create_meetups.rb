class CreateMeetups < ActiveRecord::Migration[5.0]
  def change
    create_table :meetups do |t|
      t.datetime :date
      t.string :type
      t.string :notes
      t.string :connection_id
    end
  end
end
