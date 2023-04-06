/*  This file contains a function that is used to find and print the booked times on the confrimation page

    Constant that will extract each individual time slot from the current row (object).
    This constant will take in the availability of each timeslot as well as the name of each timeslot
    so that it may check if they have been modified (have a value of 2).
    This constant will return the timeslots that have been modified.
*/
export const ExtractTime = ({availability, timeslot}) => {

    const indexMod = timeslot*.5;
    timeslot += 7-indexMod;

    if (availability == 2){
        // This block will run if the timeslot has a 30 minute increment, e.g. 730, 1030
        if(timeslot % 1 == 0.5){
            return <p>{timeslot-0.5}30</p>
        } else{
            return <p>{timeslot}00</p>
        }
    }
}