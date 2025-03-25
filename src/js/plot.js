// IMPORTS //

import Plot from '@stdlib/plot/ctor';


// MAIN //

/**
* Class for creating and updating the plot.
*
* @param {HTMLElement} container - Plot container.
*/
class Plt {
    constructor( container ) {
        this.container = container;
        this.plt = this.initializePlt();
    }

    initializePlt() {
        let dimensions;

        dimensions = this.calculateDimensions();
        return new Plot([], [], {
            width: dimensions.width,
            height: dimensions.height,
            xLabel: 'Time (s)',
            xNumTicks: dimensions.xNumTicks,
            yLabel: 'Amplitude',
            yNumTicks: dimensions.yNumTicks,
            title: 'Sine Wave',
            lineWidth: 2,
            colors: ['blue'],
            lineStyle: '-'
        });
    }

    calculateDimensions() {
        let containerWidth;
        let containerHeight;
        let xNumTicks;
        let yNumTicks;

        containerWidth = this.container.clientWidth - 48;
        containerHeight = this.container.clientHeight - 48;

        if ( containerWidth < 400 ) {
            xNumTicks = 5;
        } else if ( containerWidth < 600 ) {
            xNumTicks = 7;
        } else {
            xNumTicks = 10;
        }

        if ( containerHeight < 300 ) {
            yNumTicks = 4;
        } else if ( containerHeight < 500 ) {
            yNumTicks = 6;
        } else {
            yNumTicks = 8;
        }

        return { 
            width: containerWidth,
            height: containerHeight,
            xNumTicks,
            yNumTicks
        };
    }

    updatePlt( data, amplitude ) {
        let dimensions;

        dimensions = this.calculateDimensions();
        this.plt.width = dimensions.width;
        this.plt.height = dimensions.height;
        this.plt.xNumTicks = dimensions.xNumTicks;
        this.plt.yNumTicks = dimensions.yNumTicks;
        this.plt.x = [data.x];
        this.plt.y = [data.y];
        this.plt.yMax = parseInt(amplitude, 10) + 1;
        this.plt.yMin = parseInt(-amplitude, 10) - 1;
        this.container.innerHTML = this.plt.render('html');
    }

    handleResize() {
        let dimensions;

        dimensions = this.calculateDimensions();
        this.plt.width = dimensions.width;
        this.plt.height = dimensions.height;
        this.plt.xNumTicks = dimensions.xNumTicks;
        this.plt.yNumTicks = dimensions.yNumTicks;
        this.container.innerHTML = this.plt.render('html');
    }
}


// EXPORTS //

export default Plt;
