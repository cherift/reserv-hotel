help:
	@echo "Available commands :"
	@echo ""
	@echo "  install	: Installes full depencies."
	@echo "  deploy	: Deployes the project in production."
	@echo "  run		: Run the project"
	@echo ""

install :
	npm ci

run :
	npm run watch

deploy :
	pm2 deploy production