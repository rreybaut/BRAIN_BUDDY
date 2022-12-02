class LocalisationsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :index]
  before_action :set_localisation, only: [:show, :destroy, :edit]

    def index
      @localisation = Localisation.new

      if current_user
        @localisations = Localisation.where(user_id: current_user.id)
      else
        @localisations =  []
      end
      @markers = @localisations.geocoded.map do |flat|
        {
          lat: flat.latitude,
          lng: flat.longitude
        }
      end
    end

  def destroy
  end

    def create
      @localisation = Localisation.new(localisation_params)
      @localisation.user_id = current_user.id
      if @localisation.save
            redirect_to localisations_path
          else
            render localisations_path, status: :unprocessable_entity
          end
    end

    private

    def set_localisation
         @localisation = Localisation.find(params[:id])
    end

    def localisation_params
      params.require(:localisation).permit(:address, :user)
    end
end
