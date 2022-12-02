class ListelementsController < ApplicationController
  def index
    @list = List.find(params[:list_id])
    @Listelements = Listelement.all
    @listelement = Listelement.new
  end

  def new

    @listelement = Listelement.new
  end

  def create
    @list = List.find(params[:list_id])
    @listelement = Listelement.new(listelement_params[:list_id])
    @listelement.list = @list
    if @listelement.save
      redirect_to lists_path(@list)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @listelement = listelement.find(params[:id])
    @listelement.destroy
    redirect_to list_path(@listelement.list)
  end

  private

  def listelement_params
    params.require(:listelement).permit(:content)
  end
end

  # def check(current_user)
  #   list_my_undelivered_orders(current_user)
  #   index = @orders_view.ask_user_for_index
  #   my_orders = @order_repo.my_undelivered_orders(current_user)
  #   order = my_orders[index]
  #   @order_repo.mark_as_delivered(order)
  # end

  # private

  # def select_meal
  #   meals = @meal_repo.all
  #   @meals_view.display(meals)
  #   index = @orders_view.ask_user_for_index
  #   return meals[index]
  # end

  # def list_my_undelivered_orders(user)
  #   orders = @order_repo.my_undelivered_orders(user)
  #   @orders_view.display(orders)
  # end
