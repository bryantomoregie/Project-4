


class UsersController < ApplicationControllers

    
    def create 

        user = User.create({
            first_name: params[:first_name],
            last_name: params[:last_name],
            password_digest: params[:password],
            email: params[:email]
        })

        render (json: user)
    end

    def show    
        user = User.find(params[:id])

        render (json: user)
    end 

    def update 
        user = User.find(params[:id])
        user = User.update({
            first_name: params[:first_name],
            last_name: params[:last_name],
            password_digest: params[:password],
            email: params[:email]
        })
        render (json: user)
    end 

    def destroy 
        user = User.find(params[:id])
        user.destroy()
    end


end