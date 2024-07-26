
    let database = [];



    class User {
        constructor(name, age, email, password) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.password = password;
        }
    }






    const signUp = () => {
        
        let regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/
          let numberRegex = /\d/
        do {
             names = prompt("Enter a name");
            names = names.trim();
            names = names.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        
            let a = names.split('').filter(char => char !== ' ').length;
            if (a < 5 || regex.test(names)|| a>20 ||  numberRegex.test(names)) {
                console.log("Name invalid. Please try again.");
            } else {
                console.log("Name valid");
                break; 
            }
        } while (true);
        
        do {
            email = prompt("Enter your email")
            
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            const emailExists = database.find(user => user.email === email);

        if (emailExists) {
            console.log("Email already exists. ");
        }
            else if (!email || email.indexOf(' ') !== -1 || email.length < 10 || email.length > 30 || !emailRegex.test(email)) {
                console.log("Invalid email");
            } else {
                email = email.trim()
                email = email.charAt(0).toLowerCase() + email.slice(1).toLowerCase()
                console.log("Valid email");
                break; 
            }
        } while (true);
        

        do {
            age = prompt("enter your age ")
            age.trim()
            if (age.length<=0||isNaN(age)||age.includes(" ")||age.length>=3|| age<=0) {
                console.log("invalid age please try again");
            }else{
                age= parseInt(age)
                console.log("age is valid ");
                break;
            }


        } while (true)

        do {
            let sc= ["@" , "#" , "-" , "+" , "*" , "/","$"]
            password = prompt("enter your password")
            let a = sc.find(c=>password.includes(c))
            if (password.includes(" ")||password.length<7||!a) {
                console.log("faible password ");
            }else{
                console.log("valid password ");
                break;
            }
        } while (true);
        let passcheck = prompt("verife your pass word")
        if (passcheck==password) {
            console.log("sign up succssefuly");
        }else{
            console.log("the pasword isnt the same");
            return
        }


        let user = new User(names, age, email,password);
        let useracc= new bankaccount(names,2000)
        console.log(useracc);

        console.log(user);
        database.push(user);
        console.table(database);
    }
    // signUp()
    const login =()=>{
        do {
            logemail = prompt("enter your email to log")
         if (logemail!=email) {
            console.log("email is not found");
         }else if(logemail==email){
            console.log("welcome ");
            
            do {
                logpassword = prompt("enter password")
            if (logpassword!=password) {
                console.log("password inccorect ");
            }else if (logpassword==password) {
                
                console.log("ur login sucss sefuly");
                break;
            }
            } while (true);
            break
         }
            
         } while (true);
    }

    const changePassword=()=>{
        exemail=prompt("enter ur exesting email ")
        if (exemail==email) {
           let newpass=prompt("enter your new password")
           let o=database.find(e=>e.email==exemail)
           o.password=newpass
            console.table(database);
            
        }        
    }



    
    const mainMenu = () => {
            do {
                
                const choice = prompt("Choose an option: 1. Sign Up 2. Log In 3. deposit Type 'exit' to exit").toLowerCase();
        
                if (choice === '1' || choice === 'sign up') {
                    signUp();
                } else if (choice === '2' || choice === 'log in') {
                    login()
                    
                } else if (choice === '3' || choice === 'change password') {
                    changePassword()
                } else if (choice === 'exit') {
                    console.log("Exiting...");
                    return
                } else {
                    console.log("Invalid choice. Please try again.");
                }
            } while (true);        
        }
    
       
    mainMenu();

    