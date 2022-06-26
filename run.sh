
echo -e "Helpet Starting..."

docker build -t helpet:dev .

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p $1:3000 -e CHOKIDAR_USEPOLLING=true helpet:dev
