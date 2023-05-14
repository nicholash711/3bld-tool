default := client

# install all dependencies
setup:
	cd client/ && npm install
	cd server/ && npm install

# run client
start-client: 
	cd client/ && npm run start

# run server
start-server: .PHONY
	cd server/ && npm run dev

### Docker targets ###

up: down
	docker compose up -d

up-build: down
	docker compose up --build -d

down: .PHONY
	docker compose down


### MISC ###

clean:
	sudo rm -rf ./server/data/

scrub: clean
	rm -rf ./client/node_modules
	rm -rf ./server/node_modules

.PHONY: