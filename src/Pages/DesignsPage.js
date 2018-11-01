import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import CustomSpinner from 'react-spinner';
import '../Styles/DesignPage.less';

function makeUnsplashSrc (id) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

const THEMED_IMAGES = [
	{ id: '1471101173712-b9884175254e', caption: 'Photo by Pedro Lastra', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/5oRzZU5uwSM (Dragonfly)
	{ id: '1471127432458-65206be149c9', caption: 'Photo by Ernesto Velázquez', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/Kpgt4pl03O0 (Deer)
	{ id: '1470777639313-60af88918203', caption: 'Photo by Cris Saur', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GNUcUx-iObg (Koala)
	{ id: '1453550486481-aa4175b013ea', caption: 'Photo by Benjamin Pley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/WiSeaZ4E6ZI (Elephant)
	{ id: '1415904663467-dfdc16cae794', caption: 'Photo by Levi Saunders', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/NUMlxTPsznM (Coyote)
];

// This is the theme 
const theme = {
	// container
	container: {
		background: 'rgba(255, 255, 255, 0.9)',
	},

	// arrows
	arrow: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		fill: '#222',
		opacity: 0.6,
		transition: 'opacity 200ms',

		':hover': {
			opacity: 1,
		},
	},
	arrow__size__medium: {
		borderRadius: 40,
		height: 40,
		marginTop: -20,

		'@media (min-width: 768px)': {
			height: 70,
			padding: 15,
		},
	},
	arrow__direction__left: { marginLeft: 10 },
	arrow__direction__right: { marginRight: 10 },
	close: {
		fill: '#D40000',
		opacity: 0.6,
		transition: 'all 200ms',
		':hover': {
			opacity: 1,
		},
	},

	// footer
	footer: {
		color: 'black',
	},
	footerCount: {
		color: 'rgba(0, 0, 0, 0.6)',
	},

	// thumbnails
	thumbnail: {
	},
	thumbnail__active: {
		boxShadow: '0 0 0 2px #00D8FF',
	},
};

class DesignPage extends React.Component {
   render() {
    return(
		<Gallery images={THEMED_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
			src: makeUnsplashSrc(id),
			thumbnail: makeUnsplashThumbnail(id, orientation),
			srcSet: [
				makeUnsplashSrcSet(id, 1024),
				makeUnsplashSrcSet(id, 800),
				makeUnsplashSrcSet(id, 500),
				makeUnsplashSrcSet(id, 320),
			],
			caption,
			orientation,
			useForDemo,
		}))}
			theme={theme}
			spinner={CustomSpinner}
			spinnerColor={'#D40000'}
			spinnerSize={150}
			showThumbnails/>
);
   } 
}

export default DesignPage;