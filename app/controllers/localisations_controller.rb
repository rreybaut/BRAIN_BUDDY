class LocalisationsController < ApplicationController
  before_action :set_localisation, only: [:show, :destroy]

    def index
      @localisations = Localisation.all
      @markers = Localisation.geocoded.map do |position|
        {
          lng: position.longitude,
          lat: position.latitude
        }

      end
    end


      def create
       @localisation = Localisation.new(localisation_params)
          if @localisation.save
            redirect_to localisation_path(@localisation)
          else
            render root_path, status: :unprocessable_entity
          end
      end

      private

      def set_localisation
         @localisation = Localisation.find(params[:id])
      end

       def localisation_params
          params.require(:localisation).permit(:coordinates, :user_id)
       end
end
