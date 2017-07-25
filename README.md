# Robo Factory


## Clone repo
1. Create new directory.
2. Open terminal in this new directory.
3. Run `git clone git@github.com:misaal9/neo-robo.git`.
4. Enter your credentials, if any.
5. Once cloned, go to folder by running `cd neo-robo`.
6. Install dependencies by running `npm i`.
7. Wait for dependencies to be installed.

Before you start the servers, delete shipment.json, extinguish.json, recycle.json JSON files from the root path, if any. These files will be created on their own.
The app runs even if these files are present, but I've run into some issues, and had to restart express to resolve this a couplae of times.

## Start react and node servers.
- In terminal run `node server`. This should start express server.
- Run `npm start` in another terminal, same path. This should start the react server.
- Ensure you run node server before react.
- Ensure that react starts at port 3000, and node (express) starts at port 8080. I've currently hardcoded the ports.
- If you want to use any other ports, you will need to manually change ports in source.

## Before running application
- After running react server, your default browser should open the app if all goes well.
- Open dev console to see for any errors.
- Also see network tabs to see if all resources have been loaded.
- If you see a 404 on any XHR request, you may need to restart express.
- For example, you see a successful XHR call to /api/robots in networks tab, if all has gone well.

## About robots.json
- `robots.json` should contains list of robots in batch.
- Some values have already been added for testing, but feel free to add your own in valid JSON format.
- Ensure IDs of every robot is unique.

## Note
- I've been getting some errors (unexpected end of JSON input) when API calls are being made to save IDs to extinguish, recycle JSON files.
- To resolve this, I deleted the 3 newly created JSON files (shipment.json, extinguish.json, recycle.json), and restarted my servers.
- This resolved the issue most of the times.
