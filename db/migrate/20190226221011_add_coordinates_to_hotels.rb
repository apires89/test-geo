class AddCoordinatesToHotels < ActiveRecord::Migration[5.2]
  def change
    add_column :hotels, :latitude, :float
    add_column :hotels, :longitude, :float
  end
end
