var hotel = {
    name : 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability : function(){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName').textContent = hotel.name;

var elRooms = document.getElementById('rooms').textContent = hotel.checkAvailability();