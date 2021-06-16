const yourRobot = ({place, parcels}, route = []) => {
  if (route.length == 0) {
     const routes = parcels.map(parcel => {
       const isPickup = parcel.place != place;
       const route = findRoute(
         roadGraph,
         place,
         parcel[isPickup ? 'place' : 'address']
       );
       return {
         route,
         pickUp: isPickup,
         priority: (isPickup ? 0.5 : 0) - route.length
       };
     });
    
     route = routes.reduce((a, b) => a.priority > b.priority ? a : b).route;
   }
 
   return {direction: route[0], memory: route.slice(1)};
 }