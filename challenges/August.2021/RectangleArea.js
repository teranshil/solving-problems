const rectangleArea = function(rectangles) {

    const events = [];
    let area = 0, openIntervals = [];

    for(const [ x1, y1, x2, y2 ] of rectangles) {
        events.push([ x1, 0, y1, y2 ]);
        events.push([ x2, 1, y1, y2 ])
    }
    events.sort( (a, b) => a[1] - b[1]);

    let previous = Number.MIN_SAFE_INTEGER;
    for( const event of events ) {
        const [ current, close, y1, y2 ] = event;
        area += gainArea(previous, current);

        if( close === 0 ) openIntervals.push([y1, y2]);
        else {
            openIntervals = openIntervals.filter( e => ( e[0] !== y1 || e[1] !== y2 ) );
            // openIntervals.sort( (a, b) => )
            // openIntervals.sort( (a, b) => )
        }
    }
};

const gainArea = () => {}

rectangleArea(  [ [0,0,2,2], [1,0,2,3], [1,0,3,1] ] );