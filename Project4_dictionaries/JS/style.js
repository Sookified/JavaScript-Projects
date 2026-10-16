function my_Dictionary(){
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };

    //delete Breed from dictionary
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML=Animal.Breed;
}