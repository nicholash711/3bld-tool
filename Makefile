default := client

# install all dependencies
setup: 
	npm install
	cd client/ && npm install
	cd server/ && npm install

# run client
client: 
	cd client/ && npm run start

# run server
server: .PHONY
	cd server/ && npm run dev

.PHONY: