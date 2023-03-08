const people = [
    {name:'bob' , age:23, position:'developer'},
    {name:'ibrahim' , age:54, position:'manager'},
    {name:'adam' , age:43, position:'pro'},
    {name:'foysal' , age:25, position:'boss'},
    {name:'robart' , age:22, position:'juner developer'},
    {name:'json' , age:33, position:'inten'}
]

const afe= people.filter((tot)=> {
     return tot.age<25
})
console.log(afe);