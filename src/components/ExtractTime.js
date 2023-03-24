/* Constant that will extract each individual time slot from the current row (object).
    This constant will take in the availability of each timeslot as well as the name of each timeslot
    so that it may check if they have been modified (have a value of 2).
    This constant will return the timeslots that have been modified.
*/
export const ExtractTime = ({availability, timeslot}) => {

    const indexMod = timeslot*.5;
    timeslot += 7-indexMod;

    if (availability == 2){
        return <p>{timeslot}</p>
    }
}