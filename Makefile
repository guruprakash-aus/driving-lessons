start_db:
	docker compose -f ./db/docker-compose.yml -p drive_lessons up -d

stop_db:
	docker compose -p drive_lessons down