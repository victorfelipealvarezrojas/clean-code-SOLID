

(() => {
    
    type Gender = 'M' | 'F';
    
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    //const userS = new UserSetting("c:/..", "/home", "v@v.cl", "ADM", "Victor", "M", new Date("1985-10-21"))
    //console.log({ userS, checkC: userS.checkCredentials() })


})();