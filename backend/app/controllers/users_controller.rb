class UsersController < ApplicationController

    def index
        users = User.all

        render(json: users, :include => [:shoes, :transactions])
    end
    
    def create
        if User.find_by(email: params[:email]) == nil
            user = User.create({
                first_name: params[:firstName],
                last_name: params[:lastName],
                password: params[:password],
                email: params[:email]
            })

            render(json: user)
        else
            render(json: ["Email already exists."])
        end
    end

    def show    
        user = User.find(params[:id])

        render(json: user)
    end 

    def update 
        user = User.find(params[:id])
        user.update({
            first_name: params[:first_name],
            last_name: params[:last_name],
            password: params[:password],
            email: params[:email]
        })
        render(json: user)
    end 

    def destroy 
        user = User.find(params[:id])
        user.destroy()
    end

end