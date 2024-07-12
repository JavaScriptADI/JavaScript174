function goTo(to, from = "სახლი") {
    console.log(`მივდივარ ${from}-დან ${to}-ში`);
}

function bring(item, from, to) {
    console.log(`მიმაქვს ${item}, ${from}-დან ${to}-თან`);
}

function bringWater(who = "შენ", numberOfBottles = 1) {
    console.log('-'.repeat(10));
    goTo("სამზარეულო");
    console.log(`ვიღებ ${numberOfBottles} ბოთლს`);
    bring("წყალი", "სამზარეულო", who);
    return numberOfBottles;
}


const waterBottles = bringWater();
console.log(`მე მაქვს ${waterBottles} წყლის ბოთლი!`);
console.log(`ახლა მაქვს ${bringWater("შენ", 2)} წყლის ბოთლი!`);
bringWater("გიორგი", 5);
goTo("სახლი", "უცნობი ადგილი");