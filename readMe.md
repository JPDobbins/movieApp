# Example movie app using ionic 

### File structure:
    - src
        - app: store majority of functionality here
            - home: standard home folder for home screen (deleted for this example)
            - pages: files pertaining to a given page, it's styling, routing declarations, test, and script functionality
            - services: files similar to controllers, defines alot of back end functionality 
        - assets: store images etc
        - environments: define dev ops environments e.g. production and development 
        - theme: css et. al 

### Key files:
    - index.html 
        - base file where code mounted 
        - <app-root> element hooks angular and other files to base file 
    - app.module.ts
        - stores imported packages 
    - app-routing.module.ts
        - declare routes 

### Commands:
    - ionic g page pages/movies 
        - create a page folder called movies, within the pages directory 
    - ionic g page pages/movieDetails 
        - create a page folder called movieDetails, within the pages directory 
    - ionic g service services/movie 
        - create a movie service called movie
    - ionic serve 
        - create dummy web server and see preview of app  
    - npm i @ionic/lab
        - install lab component 
    - ionic lab
        - display app as iphone and android 
    