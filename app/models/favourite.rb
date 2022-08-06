class Favourite < ApplicationRecord
    validates :artist, presence: true

    belongs_to :user
end
