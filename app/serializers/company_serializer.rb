class CompanySerializer < ActiveModel::Serializer
  attributes :name, :url, :description, :location

end
