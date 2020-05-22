


class TransactionsController < ApplicationController

    def index 
        transactions = Transaction.all

        render (json: transactions)
    end 

    def create 
        transaction = Transaction.create({
            user_id: params[:user_id],
            shoe_id: params[:shoe_id]
        })
        render (json: transactions)    
    end

    def show
        transaction = Transaction.find(params[:id])

        render (json: transaction)

    end 



end