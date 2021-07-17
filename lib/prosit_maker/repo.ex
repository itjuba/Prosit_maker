defmodule PrositMaker.Repo do
  use Ecto.Repo,
    otp_app: :prosit_maker,
    adapter: Ecto.Adapters.Postgres
end
