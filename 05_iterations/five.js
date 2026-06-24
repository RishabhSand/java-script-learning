const coding = ["java", "ruby", "js", "python", "cpp" ]

coding.forEach( function (item) {
    // console.log(item)
} )

coding.forEach( (item) => {
    // console.log(item)
})

// function name(item){
//     console.log(item)
// }
// coding.forEach(name)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )



const mycoding = [
    {
        languagename: " java script",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py",
    },
    {
        languagename: "css ",
        languagefilename: "css"
    }
]
mycoding.forEach(item => {
    console.log(item.languagename)
});
