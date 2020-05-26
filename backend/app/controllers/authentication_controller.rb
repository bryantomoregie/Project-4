class AuthenticationController < ApplicationController

  def login 
    user = User.find_by({email: params[:email]})
    if (user && user.authenticate(params[:password]))
        session[:user_id] = user.id
        render(json: {success: true, id: user.id})
    else 
        render(json: {error: true, message:'Invalid Login'})
    end
  end

  def get_session_user
    current_user = session[:user_id]
    render(json: current_user)
  end
end

