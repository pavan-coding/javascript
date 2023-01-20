let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]     
  };
  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup;// room references meetup

  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key == 'occupiedBy') ? undefined : value;
  }));
   console.log( JSON.stringify(room, function replacer(key, value) {
        return (key == 'place')?undefined : value;
  }));