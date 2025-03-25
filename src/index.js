// IMPORTS //

import './style.css';
import generateWave from './js/waveGenerator';
import Plt from './js/plot';


// VARIABLES //

const plotContainer = document.querySelector( '.plot-container' );
const settingsButton = document.querySelector( '.settings-button' );
const modal = document.querySelector( '.modal' );
const parametersForm = document.querySelector( '.parameters-form' );
const cancelButton = document.querySelector( '.cancel-button' );


// INITIALIZATION //

const plt = new Plt( plotContainer );


// FUNCTIONS //

/**
* Updates the frequency and duration fields according to the period, iterations, and sampling rate.
*
* @returns {void}
*/
function updateCalculatedFields() {
	let samplingRate;
	let iterations;
	let frequency;
	let duration;
	let period;

	period = document.getElementById( 'period' ).value;
	iterations = document.getElementById( 'iterations' ).value;
	samplingRate = document.getElementById( 'sampling-rate' ).value;
	frequency = document.getElementById( 'frequency' );
	duration = document.getElementById( 'duration' );    
	frequency.value = samplingRate / period;
	duration.value = iterations / samplingRate;
}

/**
* Opens the input parameter modal.
*
* @returns {void}
*/
function openModal() {
	modal.classList.add( 'show' );
	updateCalculatedFields();
}

/**
* Closes the input parameter modal.
*
* @returns {void}
*/
function closeModal() {
	modal.classList.remove( 'show' );
}

/**
* Handles the form submission.
*
* @param {Event} e - Form submission event.
* @returns {void}
*/
function handleFormSubmit ( e ) {
	let formData;
	let waveData;

	e.preventDefault();
	formData = {
		amplitude: document.getElementById( 'amplitude' ).value,
		period: document.getElementById( 'period' ).value,
		iterations: document.getElementById( 'iterations' ).value,
		samplingRate: document.getElementById( 'sampling-rate' ).value
	};
	waveData = generateWave( formData );
	plt.updatePlt( waveData, formData.amplitude );
	closeModal();
}


// EVENTS //

settingsButton.addEventListener( 'click', openModal );
cancelButton.addEventListener( 'click', closeModal );

parametersForm.addEventListener( 'submit', handleFormSubmit );
parametersForm.addEventListener( 'input', ( e ) => {
	if ( e.target.id === 'sampling-rate' || e.target.id === 'period' || e.target.id === 'iterations' ) {
		updateCalculatedFields();
	}
} );

window.addEventListener( 'resize', () => plt.handleResize() );
window.addEventListener( 'DOMContentLoaded', () => {
	parametersForm.dispatchEvent( new Event( 'submit' ) );
});
