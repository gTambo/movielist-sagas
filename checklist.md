## Checklist

- [x] build in click functionality on each movie list item
    - [x] consider moving these into a separate child component
- [x] router and link to add movie page (or use history)
- [x] add movie page component with form (can be empty for now)
- [x] '/details' component, route and link
- [x] get movie details with genres, store in redux (helllo, sagas) and display to dom.
    - [x] dispatch to saga, pass in payload for movie Id
    - [x] saga function for movies table details req
    - [x] saga function for genre table req
    - [x] reducer for selected movie in index
    - [x] movieRouter GET description query
    - [x] genre router GET genre query
    - [x] render to dom
- [x] useHistory with button to home page
- [ ] fill out AddMovie selector (MUI?)
    - [x] cancel button (useHistory to '/')
    - [x] save button (POST to server)
    - [x] 2 inputs (title, poster),
    - [ ] textarea (descrip),
    - [ ] get genres into dropdown
        - [x] saga get genres
        - [ ] build out genre router with DB query
        - [ ] map results into select element
    - [ ] build in functionality onSelect for dropdown
    - [ ] handle Save function
- [ ] implement MUI cards for posters
- [ ] mui grids
- [ ] __**many code comments**__
- [ ] update README (include pics, maybe a gifs)

## Stretch Goals

- [ ] details stay on page refresh
- [ ] Edit component, router, link or button
    - [ ] input and textarea for accepting title, descrip changes
    - [ ] cancel and save buttons
    - [ ] put route (does this need to go into redux for any reason?), redirect to Details on success
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
