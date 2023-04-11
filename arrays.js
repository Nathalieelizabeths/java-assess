// //1. Write a function that takes in a string and returns it when reversed
let food ="eating"
function eat(food){
    let take=food.split('').reverse('').join('')
    console.log(take)
}
eat(food)
//2. Write a function that takes in the following array and consoles the target if it is found else
//null
const searchr=(target,num) =>{
    for(let i=0;i<num.length;i++){
        if(target===num[i]){
            return i
        }
    }
    return null
}


let num = [2,8,0,23,5,45,76]
Target = 23
console.log(searchr(23,num))
//3. Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a 
//leap year” if not console log i.e “2001 is not a leap year”
leap=[2000,]
let leapyears=0

//4

//5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
function returns(numArray){
    numArray.forEach((item) =>console.log(item*4))
        
}

returns(numArray)
//6. Write a function that takes in an array of strings and returns an array with every element
//turned into a number
let nums =["10","24","45","75","23","64","73"]
function sm(nums){
    for(let y=0;y<nums.length;y++){
        console.log(nums[y])
    }
}
sm(nums)