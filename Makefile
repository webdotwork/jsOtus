include .env

test_only:
	echo "HIIIIIII"

test_build:
	docker build -t otus-qajs . 

test_shell:
	docker run -v "$(pwd):/app" -v /app/node_modules -it otus-qajs bash

test_run:
	docker run --memory=2G --cpus=4 otus-qajs npm run test:ci
