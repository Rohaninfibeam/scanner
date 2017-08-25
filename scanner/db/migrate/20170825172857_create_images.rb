class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :caption
      t.string :avatar_uid
      t.string :title
      t.string :avatar_name

      t.timestamps null: false
    end
  end
end
