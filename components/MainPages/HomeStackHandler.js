import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import tripData from '../../database/tripData.json';
import PreTripHome from '../HomePages/PreTrip/PreTripHome';
import OnFlightHome from '../HomePages/OnFlight/OnFlightHome';
import InTripHome from '../HomePages/InTrip/InTripHome';
import PostTripHome from '../HomePages/PostTrip/PostTripHome';

const HomeStackHandler = ( ) => {
   
    const [relative, setRel] = useState();
    const [diff, setDiff] = useState();
    const [minDiff, setMinDiff] = useState();
    const [hrDiff, setHrDiff] = useState();
    const [sHrDiff, setSHDiff] = useState();
    const [sMinDiff, setSMDiff] = useState();
    const [name, setName] = useState();
    const [point, setPoint] = useState();
    const [time, setTime] = useState();
    //const [eTime, setETime] = useState();

    useEffect(()=>{selection();},[hrDiff, minDiff, relative]);

    const selection = async () => {

        const tokenU = await AsyncStorage.getItem('@storage_Key');
        const token = JSON.parse(tokenU);
        
        const tripFind = tripData.trips; 

        for(let i=0; i<tripFind.length; i++){  
            if(token == tripFind[i].id){

                const fDate = tripFind[i].sDate;
                const eDate = tripFind[i].eDate;
                const eTime = tripFind[i].eTime;
                setName(tripFind[i].name);

                const date1 = moment();
                const date2 = moment(fDate);
                const dateE = moment(eDate); 
                
                setSHDiff(dateE.diff(date1,'hours'));
                setSMDiff(dateE.diff(date1,'minutes') - (60 * sHrDiff));

                setHrDiff(date2.diff(date1, 'hours')); 
                setDiff(date2.diff(date1, 'days')); 
                setMinDiff((date2.diff(date1, 'minutes')) - (60 * hrDiff));
                setTime(eTime);

                if(Math.floor(diff) == 0 && moment().isBefore(fDate)){
                    setRel("onF"); setPoint("pre"); }
                
               /* else if(moment().isSame(eDate,'day') && moment().isBefore(eDate)){
                    setRel('onF');
                    setPoint('post');
                }*/ 

                else if(Math.floor(diff) > 0 && moment().isBefore(fDate)){setRel('pre');}
                
                else if(moment().isAfter(eDate)){ 
                    if(diff > 0){ setRel("pst"); }
                
                } else if(moment().isAfter(fDate) && moment().isBefore(eDate)){ setRel("in"); } 

            } 
        }     
    }
    if(relative=='onF'){
        return(<OnFlightHome name={name} rel={'pre'} hours={hrDiff} mins={minDiff}/>)
    } else if(relative=='pre'){
        return(<PreTripHome rela={relative} days={diff} name={name}/>);
    } else if(relative=='pst'){
        return(<PostTripHome />)
    } else if(relative=='in'){
        return(<InTripHome name={name} day={1-diff}/>)
    } else{
        return(<PostTripHome />)
    }
}

export default HomeStackHandler