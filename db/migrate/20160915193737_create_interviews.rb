class CreateInterviews < ActiveRecord::Migration[5.0]
  def change
    create_table :interviews do |t|
      t.datetime :date
      t.string :type
      t.string :notes
    end
  end
end
