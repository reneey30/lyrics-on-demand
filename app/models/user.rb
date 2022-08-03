class User < ApplicationRecord
    has_secure_password
    validates :useremail, presence: true
    validates :useremail, uniqueness: { case_sensitive: false }
end