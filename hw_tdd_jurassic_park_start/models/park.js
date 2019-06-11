const Park = function (name, ticketPrice, dinosaursCollection) {
this.name = name;
this.ticketPrice = ticketPrice;
this.dinosaursCollection = [];
}

module.exports = Park;

Park.prototype.addDinosaur = function (dinosaur) {
return this.dinosaursCollection.push(dinosaur)
};

Park.prototype.removeDinosaursFromCollection = function (dinosaur) {
  const indexOfDinosaurs = this.dinosaursCollection.indexOf(dinosaur);
  this.dinosaursCollection.splice(indexOfDinosaurs, 1)
};
// Park.prototype.findMostVisitorsAttracted = function () {
// mostVisited = function(a, b) {
//   return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
// }
// return this.dinosaurs.sort(mostVisited)[0];
// };

//
// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;
//
// function myFunction() {
//   points.sort(function(a, b){return a-b});
//   document.getElementById("demo").innerHTML = points;
// }
