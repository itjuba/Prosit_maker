defmodule PrositMaker.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string, null: false
      add :password_hash, :string
      add :password, :string
      add :username, :string
      add :name, :string
      add :address, :string
      timestamps()
    end
    create unique_index(:users, [:email])

  end
end
