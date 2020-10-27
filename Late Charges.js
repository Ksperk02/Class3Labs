//The Waukesha Public Library charges a late fee of $0.25 per day
// for books and $0.50 per day for DVDs. Design an app that will
// charge a library patron based on the number of items they are
// returning late.


function createBookFees() {

    var booksFee = 0.25;
    var dvdFee = 0.5;

    var Books = prompt("How many books?");
    var bookDays = prompt("How many days late?");
    var Dvds = prompt("How many DVDs?");
    var dvdDays = prompt("How many days late?");

    var booksDue = Books * (bookDays * booksFee);
    var dvdDue = Dvds * (dvdDays * dvdFee);

    alert("You owe " + booksDue + "$ for your books.");
    alert("You owe " + dvdDue + "$ for your DVDs.");

}