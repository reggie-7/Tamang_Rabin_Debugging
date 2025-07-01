# Tamang_Rabin_Debugging
This repo contains a drag-and-drop Human Anatomy Puzzle Game.


## Description

This is a drag and drop game.

The user can pick any of the labels and drag and drop the piece into a drop zone.  
When the user drops a piece into a zone it will stay there.  
The user should only be able to drag and drop one piece into any given drop zone.  
The user should be able to click on the reset button and the game restarts — in other words, the pieces are removed from the drop zone and returned to the label box.


## Functionality Overview

- I need to know which piece the user is dragging.
- I need to know which drop zone the user has dropped a piece into.
- I need to know if there is already a piece in the drop zone and if there is, prevent the user from dropping another.

The functionality is broken down into small chunks:

### Step 1 - Allow user to drag and drop pieces

- Collect all of the labels and store them in a variable.
- Attach event listeners to each label to detect which piece is being dragged.

### Step 2 - Detect drop zones

- Collect all of the drop zones and store them in a variable.
- Attach event listeners to each drop zone to detect when a piece is dropped.


## Installation
No installation needed.


## Usage
You can open it by clicking the index file with your choice of browser.


## Contributing

Fork it!
Create your feature branch: git checkout -b my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push to the branch: git push origin my-new-feature
Submit a pull request :D

## History
TODO: Write history

## Credits
Rabin Tamang

## License
MIT License
