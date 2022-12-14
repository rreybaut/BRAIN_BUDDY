class LocalisationsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :index]
  before_action :set_localisation, only: [:show, :destroy, :edit]

  def index
    @localisation = Localisation.new

    if params[:index]
      @index = params[:index].to_i
    else
      @index = 0
    end
    if current_user
      @localisations = Localisation.where(user_id: current_user.id).order("created_at DESC")
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
      redirect_to localisations_path, alert: "Localisation en erreur"
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
