Input

The program uses a predefined dataset consisting of user profiles. Profiles have an image, name, occupation, description and a flag showThumbnail that determines the size of the card image preview. The profiles are initially loaded into the app state on startup.

Process

Each card occupies half of the screen vertically and is easily swiped through using a ScrollView component. Every card shows a photo and information about the user. Tapping a card reverses the”showThumbnail” flag and updates the card’s state. This makes the card’s image shrink to thumbnail size or restore itself with the original dimensions.

Output

The result is an adaptive layout with profile cards presented neatly. Tapping a card causes its thumbnail to expand or shrink, improving usability and engagement for the user. The grid keeps two cards on each row while preserving the same look and feel across devices and operating systems.
