# config/application.rb or config/initializers/cors.rb

# TODO: Add your own CORS configuration here
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :options]
  end
end
