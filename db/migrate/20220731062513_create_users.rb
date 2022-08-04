class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :user_email
      t.interger :user_id
      t.string :password_digest
      t.timestamps
    end
  end
end
