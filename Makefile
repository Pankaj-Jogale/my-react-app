build:
	docker build -t my-react-app .
run:
	docker run -i -d -p 3000:3000 my-react-app