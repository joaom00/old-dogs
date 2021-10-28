all:
	@make deps
	@make create-db
	@make migrations
	@make dev

deps:
	@echo Installing dependencies...
	@yarn

create-db:
	@echo Creating database...
	@yarn db:create

migrations:
	@echo Running migrations...
	@yarn typeorm migration:run

dev:
	@echo Running server...
	@yarn dev
