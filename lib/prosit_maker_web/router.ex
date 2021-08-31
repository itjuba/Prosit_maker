defmodule PrositMakerWeb.Router do
  use PrositMakerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api_protected do
    plug :accepts, ["json"]
    plug PrositMakerWeb.Auth_plug
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PrositMakerWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api", PrositMakerWeb do
    pipe_through :api
    post "/auth" , UserController, :auth
    resources "/users", UserController, only: [:create]
  end

   #Other scopes may use custom stacks.
   scope "/api", PrositMakerWeb do
     pipe_through :api_protected

     get "/user_by" , UserController, :get_user_by
     get "/users_list" , UserController, :index
     resources "/users", UserController, only: [:show]
   end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: PrositMakerWeb.Telemetry
    end
  end
end
