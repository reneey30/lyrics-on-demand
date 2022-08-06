class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :member_email
      t.string :password_digest

      t.timestamps
    end
  end
end
