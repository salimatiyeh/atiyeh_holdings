class ExpensesController < ApplicationController
  def new
    @expense = Expense.new
  end

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      redirect_to root_path, notice: "successfully created"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @expense = Expense.find(params[:id])
    @house = @expense.house
  end

  def index
    @house = House.find(params[:house_id])
    @expenses = @house.expenses
  end

  private

  def expense_params
    params.require(:expense).permit(
      :title,
      :description,
      :amount,
      :category,
      :expense_date,
      :document,
      :house_id
    )
  end

end
