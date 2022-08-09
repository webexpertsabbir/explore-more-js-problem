function woodCal(chairQ, tbleQ, bedQ){
const perChairW = 3;
const perTbleW = 10;
const perBedW = 50;

const chairW = perChairW * chairQ;
const TbleW = perTbleW * tbleQ;
const bedW = perBedW * bedQ;

const totalWood = chairW + TbleW + bedW;
return totalWood;

}
const totalWood = woodCal(10, 0, 0);
console.log(totalWood);
