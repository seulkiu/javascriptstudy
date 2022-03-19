class 사람 {
    constructor(name, age, gender, favoritefood, dislikefood) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.favoritefood = favoritefood;
        this.dislikefood = dislikefood;
    }
    
introduce(){
console.log(`안녕하세요. ${this.name} 입니다.`);
}

hungry(){
    console.log(`배고파요. 이렇게 하는 거 맞나요?`);
}

full(){
    console.log(`배불러요`);
}

favoriteFood(){
    console.log(`${this.favoritefood} 완전 좋아해요.`);
}

dislikeFood(){
    console.log(`${this.dislikefood} 먹으라면 차라리 굶겠어요.`);
}

getName(){
    return this.name;
}

getAge(){
    return this.age;
}

getGender(){
    return this.gender;
}

getFavoritefood(){
    return this.favoritefood;
}

getDislikefood(){
    return this.dislikefood;
}

setName(name){
    this.name = name;
}

setAge(age){
    this.age = age;
}

setGender(gender){
    this.gender = gender;
}

setFavoritefood(favoritefood){
    this.favoritefood = favoritefood;
}

setDislikefood(dislikefood){
    this.dislikefood = dislikefood;
}
}

let nikki = new 사람("이슬기", "31", "여", "비지찌개", "익힌당근");
let friend1 = new 사람("김모씨", "31", "여", "돼지국밥", "없음");
let friend2 = new 사람("박모씨", "31", "여", "요거트볼", "라면");
let boyfriend1 = new 사람("차은우", "24", "남", "피자", "불닭볶음면");
let boyfriend2 = new 사람("로운", "25", "남", "아이스크림", "시금치");


class add extends 사람 {
    constructor(name, age, gender, favoritefood, dislikefood, birthday, job) {
        super(name, age, gender, favoritefood, dislikefood);
        this.birthday = birthday;
        this.job = job;
    }
getBirthday(){
    return this.birthday;
}
getJob(){
    return this.job;
}
setBirthday(birthday){
    this.birthday = birthday;
}
setJob(job){
    this.job = job;
}
birthDay(){
    console.log(`${this.birthday} 기대할게요. 후후.`);
}
myJob(){
    console.log(`제 직업은 ${this.job} 입니다. 돈 버는 게 쉽지 않네요...`);
}
}

let