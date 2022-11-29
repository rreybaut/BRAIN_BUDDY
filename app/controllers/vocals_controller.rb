class VocalsController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  def index
    @vocals = Vocal.all
    @vocal = Vocal.new
  end

  def create
    @vocal = Vocal.new(vocal_params)
    @vocal.user = current_user
    if @vocal.save

      redirect_to vocals_path
    else

      render :index, status: :unprocessable_entity
    end
  end

  def destroy
    @vocal = Vocal.find(params[:id])
    @vocal.destroy
    redirect_to vocals_path, status: :see_other
  end

  private

  def vocal_params
    params.require(:vocal).permit(:audio, :user_id)
  end
end
