 

var family = {
    Name: "John" + "<br>" + "<br>",
    John : {
        son1:"Chris" + "<br>",
            Chris:{
                son1:"Ali" + "<br>" + "<br>",
                son2:"Karim" + "<br>" + "<br>",
            son2:"Alex" + "<br>" + "<br>",
                    Alex:{
                    son1:"John" + "<br>",
                    son2:"Alex" + "<br>",
                    son3:"Garret" + "<br>",
                    son4:"Wood" + "<br>",
                        John:{
                        son1:"Ali" + "<br>",
                        son2:"Jack"+ "<br>" + "<br>",
                            Ali:{
                            son1:"Sulaiman" + "<br>",
                            son2:"Usman" + "<br>",
                            son3:"Salman" + "<br>",
                            son4:"Javed" + "<br>" + "<br>",
                                Sulaiman:{
                                son1:"kareem" + "<br>",
                                son2:"Raheem" + "<br>" + "<br>",
                                    Raheem:{
                                    son1:"Nadeem" + "<br>",
                                    son2:"Kaleem" + "<br>" + "<br>",
                                        Kaleem:{
                                        son1:"Amir" + "<br>",
                                        son2:"Liaqat" + "<br>" + "<br>",
                            
                
                        

                    
                Wood:{
                son1:"Chris" + "<br>",
                son2:"Roy" + "<br>",
                son3:"Max" + "<br>",
                son4:"Nova",
                son5:"Root",
                son6:"Mark" + "<br>" + "<br>",
            Max:{
            son1:"Usman" + "<br>",
            son2:"Salman" + "<br>",
            son3:"Javed" + "<br>",
            son4:"Mark" + "<br>",
            son5:"Alex" + "<br>",
               
                Mark:{
                    son1:"Morgan" + "<br>",
                    son2:"Watson" + "<br>",
                    son5:"Hales" + "<br>",
        
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

var family2 ={
    name: "Jack" + "<br>" + "<br>",
Jack:{
    son1:"kevin" + "<br>",
    son2:"derekwood" + "<br>" + "<br>",
}
};

var family3 = {
    name : "David" + "<br>" + "<br>",

    David:{
        son1:"kegan" + "<br>",
        Kegan:{
            son1:"alex" + "<br>" + "<br>",
            alex:{
                son1:"jackma" + "<br>" + "<br>",
                jackma:{
                    son1:"kevin" + "<br>",
                    son2:"derek" + "<br>",
                    son3:"trump" + "<br>",
                    son4:"obama" + "<br>",
                    son5:"bush" + "<br>" + "<br>",

                
                son2:"bill" + "<br>" + "<br>",
                bill:{
                    son1:"robert" + "<br>",
                    son2:"john" + "<br>" + "<br>",
                    }
                }
            }
        }
    }
}



console.log(family3);
function print(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            print(obj[key]);   
        } else {
            document.write(obj[key]);    
        }
    }
}

print(family );
print(family2 );
print(family3 );




