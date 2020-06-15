json.extract! event, :id, :title, :body, :start, :end, :allDay, :created_at, :updated_at
json.url event_url(event, format: :json)
