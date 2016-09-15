class Connection < ApplicationRecord
  belongs_to :user
  belongs_to :contact

  has_many :emails
  has_many :meetups
  has_many :interviews
end
