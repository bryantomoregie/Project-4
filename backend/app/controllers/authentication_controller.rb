class AuthenticationController < ApplicationController

  def login 

    user = User.find_by({email: params[:email]})
    if (user != nil && user.authenticate(params[:password]))
        session[:user_id] = user.id
        render json: {success: true, id: user.id}
    else 
        render json: {error: true, message:'Invalid Login'}
    end
  end
end

